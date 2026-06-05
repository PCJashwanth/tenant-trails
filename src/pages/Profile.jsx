import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useReviews } from "../context/ReviewsContext";
import { apartments } from "../data/mockData";
import TopBar from "../components/TopBar";
import StarRating from "../components/StarRating";
import ReviewDialog from "../components/ReviewDialog";
import "./Profile.css";

function Profile() {
  const { user } = useAuth();
  const { getReviewsByUser, updateReview, deleteReview } = useReviews();

  const [editing, setEditing] = useState(null); // review object or null

  const myReviews = getReviewsByUser(user.id);

  const initials = (user?.name || "?")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function handleDelete(reviewId) {
    if (window.confirm("Are you sure you want to delete this review?")) {
      deleteReview(reviewId);
    }
  }

  function handleSaveEdit({ rating, body }) {
    if (editing) {
      updateReview(editing.id, rating, body);
    }
  }

  function getApartmentName(apartmentId) {
    return apartments.find((a) => a.id === apartmentId)?.name || "Unknown";
  }

  return (
    <div className="profile">
      <TopBar />

      <main className="profile__content">
        <Link to="/dashboard" className="profile__back">
          ← Back to apartments
        </Link>

        {/* Profile header card */}
        <section className="profile-header">
          <div className="profile-header__left">
            <span className="profile-header__avatar">{initials}</span>
            <div>
              <h1 className="profile-header__name">{user?.name}</h1>
              <p className="profile-header__email">{user?.email}</p>
            </div>
          </div>
          <div className="profile-header__stats">
            <div className="profile-stat">
              <div className="profile-stat__number">{myReviews.length}</div>
              <div className="profile-stat__label">REVIEWS</div>
            </div>
          </div>
        </section>

        {/* Reviews list */}
        <h2 className="profile__section-title">Your Reviews</h2>

        {myReviews.length === 0 ? (
          <div className="profile-empty">
            <p>You have not written any reviews yet.</p>
            <Link to="/dashboard" className="profile-empty__link">
              Browse apartments
            </Link>
          </div>
        ) : (
          <div className="profile-reviews">
            {myReviews.map((review) => (
              <article key={review.id} className="profile-review">
                <div className="profile-review__info">
                  <h3 className="profile-review__apt">
                    {getApartmentName(review.apartmentId)}
                  </h3>
                  <StarRating rating={review.rating} />
                  <p className="profile-review__body">
                    {review.body.length > 160
                      ? review.body.slice(0, 160) + "..."
                      : review.body}
                  </p>
                </div>
                <div className="profile-review__actions">
                  <Link
                    to={`/apartment/${review.apartmentId}`}
                    className="profile-review__btn profile-review__btn--view"
                  >
                    View
                  </Link>
                  <button
                    className="profile-review__btn profile-review__btn--edit"
                    onClick={() => setEditing(review)}
                  >
                    Edit
                  </button>
                  <button
                    className="profile-review__btn profile-review__btn--delete"
                    onClick={() => handleDelete(review.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {editing && (
        <ReviewDialog
          title="Edit Review"
          initialRating={editing.rating}
          initialBody={editing.body}
          submitLabel="Save Changes"
          onClose={() => setEditing(null)}
          onSubmit={handleSaveEdit}
        />
      )}
    </div>
  );
}

export default Profile;
