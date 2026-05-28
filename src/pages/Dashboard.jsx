import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ApartmentCard from "../components/ApartmentCard";
import {
  apartments,
  neighbourhoods,
  totalReviews,
} from "../data/mockData";
import "./Dashboard.css";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("all");
  const [sort, setSort] = useState("rating-desc");

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const visibleApartments = useMemo(() => {
    let list = [...apartments];

    // Search by name, address, or neighbourhood
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.address.toLowerCase().includes(q) ||
          a.neighbourhood.toLowerCase().includes(q)
      );
    }

    // Filter by neighbourhood
    if (neighbourhood !== "all") {
      list = list.filter((a) => a.neighbourhood === neighbourhood);
    }

    // Sort
    if (sort === "rating-desc") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "rating-asc") list.sort((a, b) => a.rating - b.rating);
    else if (sort === "reviews-desc")
      list.sort((a, b) => b.reviewCount - a.reviewCount);

    return list;
  }, [search, neighbourhood, sort]);

  const initials = (user?.name || "?").slice(0, 2).toUpperCase();

  return (
    <div className="dashboard">
      <nav className="topbar">
        <div className="topbar__left">
          <div className="topbar__logo" onClick={() => navigate("/")}>
            TenantTrails
          </div>
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="topbar__right">
          <span className="topbar__avatar">{initials}</span>
          <span className="topbar__name">{user?.name}</span>
          <button className="topbar__signout" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </nav>

      <main className="dashboard__content">
        <h1 className="dashboard__title">Apartments in Halifax</h1>
        <p className="dashboard__subtitle">
          Honest reviews from real tenants. Read before you rent.
        </p>

        <div className="dashboard__stats">
          <span className="stat-pill">
            <strong>{apartments.length}</strong> apartments
          </span>
          <span className="stat-pill">
            <strong>{totalReviews}</strong> reviews
          </span>
          <span className="stat-pill">
            <strong>{neighbourhoods.length}</strong> neighbourhoods
          </span>
        </div>

        <div className="dashboard__filters">
          <select
            className="dashboard__select"
            value={neighbourhood}
            onChange={(e) => setNeighbourhood(e.target.value)}
          >
            <option value="all">All Neighbourhoods</option>
            {neighbourhoods.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          <select
            className="dashboard__select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="rating-desc">Highest Rated</option>
            <option value="rating-asc">Lowest Rated</option>
            <option value="reviews-desc">Most Reviewed</option>
          </select>
        </div>

        {visibleApartments.length === 0 ? (
          <p className="dashboard__empty">
            No apartments match your search.
          </p>
        ) : (
          <div className="dashboard__grid">
            {visibleApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
