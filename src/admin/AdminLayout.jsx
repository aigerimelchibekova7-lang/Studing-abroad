import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <div className="admin-logo-icon">E</div>

          <div>
            <h2>EDIVIA</h2>
            <span>ADMIN PANEL</span>
          </div>
        </div>

        <div className="sidebar-section-title">
          ГЛАВНОЕ МЕНЮ
        </div>

        <nav className="admin-navigation">
          <NavLink to="/admin" end className="admin-nav-link">
            <span className="nav-icon">▦</span>
            <span>Главная</span>
          </NavLink>

          <NavLink to="/admin/messages" className="admin-nav-link">
            <span className="nav-icon">✉️</span>
            <span>Сообщения</span>
          </NavLink>

          <NavLink to="/admin/universities" className="admin-nav-link">
            <span className="nav-icon">🎓</span>
            <span>Университеты</span>
          </NavLink>

          <NavLink to="/admin/countries" className="admin-nav-link">
            <span className="nav-icon">🌍</span>
            <span>Страны</span>
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <div className="admin-profile">
            <div className="profile-avatar">E</div>

            <div>
              <strong>Администратор</strong>
              <span>EDIVIA Management</span>
            </div>
          </div>

          <NavLink to="/" className="back-to-site">
            ↗ Вернуться на сайт
          </NavLink>
        </div>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;