
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUniversities } from "../services/universitiesApi";
import { supabase } from "../supabaseClient";
import "./AdminUniversities.css";

function AdminUniversities() {
  const [universities, setUniversities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    flag: "",
    city: "",
    fields: "",
  });

  // Supabase'ден университеттерди алуу
  useEffect(() => {
    async function loadUniversities() {
      try {
        setLoading(true);
        setError("");

        const data = await getUniversities();
        setUniversities(data);
      } catch (err) {
        console.error(err);
        setError("Университеттерди жүктөө мүмкүн болгон жок.");
      } finally {
        setLoading(false);
      }
    }

    loadUniversities();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // Supabase'ге жаңы университет кошуу
  async function handleAddUniversity(event) {
    event.preventDefault();
    setError("");

    if (
      !formData.name.trim() ||
      !formData.country.trim() ||
      !formData.city.trim()
    ) {
      setError("Заполните название, страну и город.");
      return;
    }

    const newUniversity = {
      name: formData.name.trim(),
      country: formData.country.trim(),
      flag: formData.flag.trim() || "🌍",
      city: formData.city.trim(),
      fields: formData.fields
        .split(",")
        .map((field) => field.trim())
        .filter(Boolean),
      description: "",
      image: "",
      images: [],
      tuition: "Уточняется",
      livingCost: "Уточняется",
      accommodation: "Уточняется",
      language: "Уточняется",
      duration: "Уточняется",
      requirements: [],
      expenses: [],
    };

    try {
      setSaving(true);

      const { data, error: insertError } = await supabase
        .from("Universities1")
        .insert([newUniversity])
        .select();

      if (insertError) throw insertError;

      setUniversities((previous) => [...previous, data[0]]);

      setFormData({
        name: "",
        country: "",
        flag: "",
        city: "",
        fields: "",
      });

      setShowForm(false);
    } catch (err) {
      console.error("Добавление университета:", err);
      setError("Не удалось добавить университет. Проверьте права доступа.");
    } finally {
      setSaving(false);
    }
  }

  // Supabase'ден университетти өчүрүү
  async function handleDeleteUniversity(university) {
    const confirmed = window.confirm(
      "Вы действительно хотите удалить этот университет?"
    );

    if (!confirmed) return;

    try {
      setError("");

      const { error: deleteError } = await supabase
        .from("Universities1")
        .delete()
        .eq("id", university.id);

      if (deleteError) throw deleteError;

      setUniversities((previous) =>
        previous.filter((item) => item.id !== university.id)
      );
    } catch (err) {
      console.error("Удаление университета:", err);
      setError("Не удалось удалить университет.");
    }
  }

  return (
    <div className="admin-universities">
      <div className="admin-universities-header">
        <div>
          <h1>Университеты</h1>
          <p>Управление университетами EDIVIA</p>
        </div>

        <Link to="/universities" className="admin-view-site">
          Посмотреть на сайте ↗
        </Link>
      </div>

      <div className="admin-universities-toolbar">
        <div className="admin-universities-stat">
          <span>Всего университетов</span>
          <strong>{universities.length}</strong>
        </div>

        <button
          className="admin-add-university"
          onClick={() => {
            setError("");
            setShowForm((previous) => !previous);
          }}
        >
          {showForm ? "Отмена" : "+ Добавить университет"}
        </button>
      </div>

      {showForm && (
        <form
          className="admin-university-form"
          onSubmit={handleAddUniversity}
        >
          <h2>Новый университет</h2>

          <label>
            Название *
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Например, University of Oxford"
              required
            />
          </label>

          <label>
            Страна *
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Например, Германия"
              required
            />
          </label>

          <label>
            Флаг
            <input
              name="flag"
              value={formData.flag}
              onChange={handleChange}
              placeholder="Например, 🇩🇪"
            />
          </label>

          <label>
            Город *
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Например, Берлин"
              required
            />
          </label>

          <label>
            Направления обучения
            <input
              name="fields"
              value={formData.fields}
              onChange={handleChange}
              placeholder="IT, Медицина, Бизнес"
            />
          </label>

          {error && (
            <p className="admin-university-error">{error}</p>
          )}

          <button
            type="submit"
            className="admin-save-university"
            disabled={saving}
          >
            {saving ? "Сохранение..." : "Сохранить университет"}
          </button>
        </form>
      )}

      {error && !showForm && (
        <p className="admin-university-error">{error}</p>
      )}

      <div className="admin-universities-list">
        <div className="admin-universities-list-header">
          <h2>Список университетов</h2>
          <span>{universities.length} записей</span>
        </div>

        <div className="admin-universities-table-wrapper">
          <table className="admin-universities-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Университет</th>
                <th>Страна</th>
                <th>Город</th>
                <th>Направления</th>
                <th>Действия</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">Загрузка университетов...</td>
                </tr>
              ) : (
                <>
                  {universities.map((university, index) => (
                    <tr key={university.id}>
                      <td>{index + 1}</td>

                      <td>
                        <div className="admin-university-name">
                          <span className="admin-university-flag">
                            {university.flag}
                          </span>
                          <span>{university.name}</span>
                        </div>
                      </td>

                      <td>{university.country}</td>
                      <td>{university.city}</td>

                      <td>
                        <div className="admin-university-fields">
                          {university.fields?.map((field) => (
                            <span key={field}>{field}</span>
                          ))}
                        </div>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="admin-delete-university"
                          onClick={() =>
                            handleDeleteUniversity(university)
                          }
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))}

                  {universities.length === 0 && (
                    <tr>
                      <td colSpan="6">
                        Университетов пока нет.
                      </td>
                    </tr>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUniversities;
