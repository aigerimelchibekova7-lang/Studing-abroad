import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  getUniversities, saveUniversities } from "../UniversitiesStorage";
import "./AdminUniversities.css";

function AdminUniversities() {
  const [universities, setUniversities] = useState(() =>
    getUniversities()
  );

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    flag: "",
    city: "",
    fields: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleAddUniversity(event) {
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
      tuition: "Уточняется",
      livingCost: "Уточняется",
      accommodation: "Уточняется",
      language: "Уточняется",
      duration: "Уточняется",
      requirements: [],
      expenses: [],
    };

    const updatedUniversities = [
      ...universities,
      newUniversity,
    ];

    try {
      saveUniversities(updatedUniversities);
      setUniversities(updatedUniversities);

      setFormData({
        name: "",
        country: "",
        flag: "",
        city: "",
        fields: "",
      });

      setShowForm(false);
    } catch (error) {
      setError("Не удалось сохранить данные в браузере.");
    }
  }

  function handleDeleteUniversity(indexToDelete) {
    const confirmed = window.confirm(
      "Вы действительно хотите удалить этот университет?"
    );

    if (!confirmed) return;

    const updatedUniversities = universities.filter(
      (_, index) => index !== indexToDelete
    );

    try {
      saveUniversities(updatedUniversities);
      setUniversities(updatedUniversities);
    } catch (error) {
      setError("Не удалось сохранить изменения.");
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

          <button type="submit" className="admin-save-university">
            Сохранить университет
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
              {universities.map((university, index) => (
                <tr key={`${university.name}-${index}`}>
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
                      onClick={() => handleDeleteUniversity(index)}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUniversities;