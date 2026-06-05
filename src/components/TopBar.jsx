import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./TopBar.css";

function TopBar({ search, onSearchChange }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const initials = (user?.name || "?")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <nav className="topbar">
      <div className="topbar__left">
        <Link to="/dashboard" className="topbar__logo">
          TenantTrails
        </Link>
        <div className="topbar__search">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-placeholder)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="topbar__search-input"
            type="text"
            placeholder="Search apartments by address or neighbourhood..."
            value={search ?? ""}
            onChange={(e) =>
              onSearchChange ? onSearchChange(e.target.value) : null
            }
            readOnly={!onSearchChange}
            onClick={() => {
              if (!onSearchChange) navigate("/dashboard");
            }}
          />
        </div>
      </div>

      <div className="topbar__right">
        <Link to="/profile" className="topbar__user">
          <span className="topbar__avatar">{initials}</span>
          <span className="topbar__name">{user?.name?.split(" ")[0]}</span>
        </Link>
        <button className="topbar__signout" onClick={handleLogout}>
          Sign out
        </button>
      </div>
    </nav>
  );
}

export default TopBar;
