
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "./AdminLayout.css";

function AdminLayout() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      const { data, error } = await supabase.auth.getSession();

      if (!mounted) return;

      if (error || !data.session) {
        navigate("/admin/login", { replace: true });
      } else {
        setChecking(false);
      }
    }

    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/admin/login", { replace: true });
      } else if (mounted) {
        setChecking(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  }

  if (checking) {
    return <div style={{ padding: "40px" }}>Текшерилүүдө...</div>;
  }

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
