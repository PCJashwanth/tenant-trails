import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useReviews } from "../context/ReviewsContext";
import { apartments } from "../data/mockData";
import TopBar from "../components/TopBar";
import AISummary from "../components/AISummary";
import StarRating from "../components/StarRating";
import ReviewCard from "../components/ReviewCard";
import ReviewDialog from "../components/ReviewDialog";
import "./ApartmentDetail.css";

function ApartmentDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const { getReviewsForApartment, addReview } = useReviews();

  const [showDialog, setShowDialog] = useState(false);

  const apartment = apartments.find((a) => a.id === Number(id));
  if (!apartment) {
    return <Navigate to="/dashboard" replace />;
  }

  const aptReviews = getReviewsForApartment(apartment.id);
  const avgRating =
    aptReviews.length > 0
      ? aptReviews.reduce((sum, r) => sum + r.rating, 0) / aptReviews.length
      : apartment.rating;

  // Rating breakdown: count of each star value (1-5)
  const breakdown = [5, 4, 3, 2, 1].map((stars) => {
    const count = aptReviews.filter((r) => Math.round(r.rating) === stars).length;
    const pct = aptReviews.length > 0 ? (count / aptReviews.length) * 100 : 0;
    return { stars, count, pct };
  });

  function handleSubmitReview({ rating, body }) {
    addReview(apartment.id, user.id, rating, body);
  }

  return (
    <div className="detail">
      <TopBar />

      <main className="detail__content">
        <Link to="/dashboard" className="detail__back">
          ← Back to all apartments
        </Link>

        <div className="detail__grid">
          {/* LEFT COLUMN */}
          <div className="detail__main">
            {/* Header card */}
            <section className="detail-header">
              <div className="detail-header__main">
                <h1 className="detail-header__name">{apartment.name}</h1>
                <p className="detail-header__address">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-text-secondary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {apartment.address} · {apartment.neighbourhood}
                </p>
                <p className="detail-header__description">
                  {apartment.description}
                </p>
              </div>
              <div className="detail-header__rating">
                <div className="detail-header__rating-number">
                  {avgRating.toFixed(1)}
                </div>
                <StarRating rating={avgRating} />
                <div className="detail-header__review-count">
                  {aptReviews.length}{" "}
                  {aptReviews.length === 1 ? "review" : "reviews"}
                </div>
              </div>
            </section>

            {/* AI Summary */}
            <AISummary
              summary={apartment.aiSummary}
              issues={apartment.aiIssues}
            />

            {/* Reviews section */}
            <section className="detail-reviews">
              <div className="detail-reviews__header">
                <h2 className="detail-reviews__title">
                  Reviews ({aptReviews.length})
                </h2>
                <button
                  className="detail-reviews__write-btn"
                  onClick={() => setShowDialog(true)}
                >
                  + Write a Review
                </button>
              </div>

              {aptReviews.length === 0 ? (
                <p className="detail-reviews__empty">
                  No reviews yet. Be the first to write one.
                </p>
              ) : (
                <div className="detail-reviews__list">
                  {aptReviews.map((review) => (
                    <ReviewCard
                      key={review.id}
                      review={review}
                      currentUserId={user?.id}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="detail__sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-card__title">Property Info</h3>
              <dl className="property-info">
                <div className="property-info__row">
                  <dt>Landlord</dt>
                  <dd>{apartment.landlord}</dd>
                </div>
                <div className="property-info__row">
                  <dt>Units</dt>
                  <dd>{apartment.units}</dd>
                </div>
                <div className="property-info__row">
                  <dt>Year built</dt>
                  <dd>{apartment.yearBuilt}</dd>
                </div>
                <div className="property-info__row">
                  <dt>Neighbourhood</dt>
                  <dd>{apartment.neighbourhood}</dd>
                </div>
              </dl>
            </div>

            <div className="sidebar-card">
              <h3 className="sidebar-card__title">Rating Breakdown</h3>
              <div className="breakdown">
                {breakdown.map((row) => (
                  <div key={row.stars} className="breakdown__row">
                    <span className="breakdown__label">
                      {row.stars}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="var(--color-star)"
                        aria-hidden="true"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </span>
                    <div className="breakdown__bar">
                      <div
                        className="breakdown__bar-fill"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="breakdown__count">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="sidebar-write-btn"
              onClick={() => setShowDialog(true)}
            >
              Write a Review
            </button>
          </aside>
        </div>
      </main>

      {showDialog && (
        <ReviewDialog
          onClose={() => setShowDialog(false)}
          onSubmit={handleSubmitReview}
        />
      )}
    </div>
  );
}

export default ApartmentDetail;
