import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useReviews } from "../context/ReviewsContext";
import TopBar from "../components/TopBar";
import ApartmentCard from "../components/ApartmentCard";
import { apartments, neighbourhoods } from "../data/mockData";
import "./Dashboard.css";

function Dashboard() {
  const { reviews } = useReviews();

  const [search, setSearch] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("all");
  const [sort, setSort] = useState("rating-desc");

  // Live counts derived from the current reviews list
  const totalReviews = reviews.length;

  const visibleApartments = useMemo(() => {
    let list = [...apartments];

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.address.toLowerCase().includes(q) ||
          a.neighbourhood.toLowerCase().includes(q)
      );
    }

    if (neighbourhood !== "all") {
      list = list.filter((a) => a.neighbourhood === neighbourhood);
    }

    if (sort === "rating-desc") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "rating-asc") list.sort((a, b) => a.rating - b.rating);
    else if (sort === "reviews-desc")
      list.sort((a, b) => b.reviewCount - a.reviewCount);

    return list;
  }, [search, neighbourhood, sort]);

  return (
    <div className="dashboard">
      <TopBar search={search} onSearchChange={setSearch} />

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
              <Link
                key={apartment.id}
                to={`/apartment/${apartment.id}`}
                className="dashboard__card-link"
              >
                <ApartmentCard apartment={apartment} />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
