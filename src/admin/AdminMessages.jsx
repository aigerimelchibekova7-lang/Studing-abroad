
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./AdminMessages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  async function fetchMessages() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("Contact")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setError(error.message);
    } else {
      setMessages(data ?? []);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Бул билдирүүнү өчүрүүгө ишенесизби?"
    );

    if (!confirmed) return;

    setDeletingId(id);
    setError("");

    const { data, error } = await supabase
      .from("Contact")
      .delete()
      .eq("id", id)
      .select("id");

    if (error) {
      console.error("Өчүрүү катасы:", error);
      setError(error.message);
    } else if (!data || data.length === 0) {
      setError("Билдирүү өчүрүлгөн жок. Админ укугун текшериңиз.");
    } else {
      setMessages((previous) =>
        previous.filter((item) => item.id !== id)
      );
    }

    setDeletingId(null);
  }

  const filteredMessages = messages.filter((item) => {
    const query = search.toLowerCase();

    return (
      (item.full_name || "").toLowerCase().includes(query) ||
      (item.email || "").toLowerCase().includes(query) ||
      (item.country || "").toLowerCase().includes(query) ||
      (item.message || "").toLowerCase().includes(query)
    );
  });

  return (
    <div className="admin-messages">
      <header className="messages-header">
        <div>
          <span className="messages-label">EDIVIA MANAGEMENT</span>
          <h1>Сообщения</h1>
          <p>Заявки и обращения пользователей вашего сайта.</p>
        </div>

        <button
          className="refresh-button"
          onClick={fetchMessages}
          disabled={loading}
        >
          ↻ {loading ? "Загрузка..." : "Обновить"}
        </button>
      </header>

      <section className="messages-summary">
        <div className="summary-icon">✉️</div>
        <div>
          <span>Всего сообщений</span>
          <h2>{messages.length}</h2>
        </div>
      </section>

      <div className="messages-toolbar">
        <div>
          <h2>Все обращения</h2>
          <p>Список сообщений из контактной формы</p>
        </div>

        <input
          type="text"
          placeholder="Поиск по имени, email или стране..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {error && (
        <div className="messages-error">
          <strong>Ошибка:</strong>
          <p>{error}</p>
        </div>
      )}

      {loading ? (
        <p className="messages-status">Загрузка сообщений...</p>
      ) : !error && filteredMessages.length === 0 ? (
        <div className="messages-empty">
          <span>✉️</span>
          <h3>
            {search ? "Ничего не найдено" : "Пока нет сообщений"}
          </h3>
          <p>
            {search
              ? "Попробуйте изменить поисковый запрос."
              : "Новые обращения появятся здесь."}
          </p>
        </div>
      ) : (
        !error && (
          <div className="messages-table-wrapper">
            <table className="messages-table">
              <thead>
                <tr>
                  <th>Имя</th>
                  <th>Email</th>
                  <th>Телефон</th>
                  <th>Страна</th>
                  <th>Сообщение</th>
                  <th>Дата</th>
                  <th>Действие</th>
                </tr>
              </thead>

              <tbody>
                {filteredMessages.map((item) => (
                  <tr key={item.id}>
                    <td className="message-name">
                      {item.full_name || "Не указано"}
                    </td>
                    <td>{item.email || "—"}</td>
                    <td>{item.phone || "—"}</td>
                    <td>{item.country || "—"}</td>
                    <td className="message-text">
                      {item.message || "—"}
                    </td>
                    <td>
                      {item.created_at
                        ? new Date(item.created_at).toLocaleDateString("ru-RU")
                        : "—"}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="message-delete-btn"
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                      >
                        {deletingId === item.id
                          ? "Өчүрүлүүдө..."
                          : "Өчүрүү"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}

      {!loading && !error && filteredMessages.length > 0 && (
        <p className="messages-count">
          Показано: {filteredMessages.length} из {messages.length}
        </p>
      )}
    </div>
  );
}

export default AdminMessages;
