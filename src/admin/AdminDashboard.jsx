import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./Admin.css";

function AdminDashboard() {
  const [messagesCount, setMessagesCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStatistics() {
      const { count, error } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true });

      if (error) {
        setError(error.message);
      } else {
        setMessagesCount(count ?? 0);
      }

      setLoading(false);
    }

    fetchStatistics();
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div>
          <span className="dashboard-label">
            EDIVIA MANAGEMENT
          </span>

          <h1>Панель управления</h1>

          <p>
            Добро пожаловать! Здесь вы можете следить за работой
            своего проекта.
          </p>
        </div>

        <div className="dashboard-badge">
          ✦ Администратор EDIVIA
        </div>
      </header>

      <section className="dashboard-stats">
        <article className="stat-card stat-primary">
          <div className="stat-icon">✉️</div>

          <p>Всего сообщений</p>

          <h2>
            {loading ? "..." : error ? "—" : messagesCount}
          </h2>

          <span>Данные из Supabase</span>
        </article>

        <article className="stat-card">
          <div className="stat-icon">🎓</div>

          <p>Университеты</p>

          <h2>—</h2>

          <span>Таблица пока не подключена</span>
        </article>

        <article className="stat-card">
          <div className="stat-icon">🌍</div>

          <p>Страны</p>

          <h2>—</h2>

          <span>Таблица пока не подключена</span>
        </article>
      </section>

      {error && (
        <div className="admin-error">
          <strong>Ошибка Supabase:</strong> {error}

          <p>
            Проверьте разрешения на чтение таблицы и настройки RLS.
          </p>
        </div>
      )}

      <section className="dashboard-welcome">
        <span>ТВОЯ СЛЕДУЮЩАЯ ГЛАВА НАЧИНАЕТСЯ ЗДЕСЬ</span>

        <h2>Образование без границ.</h2>

        <p>
          EDIVIA помогает студентам находить возможности
          для получения образования в разных странах мира.
        </p>
      </section>
    </div>
  );
}

export default AdminDashboard;