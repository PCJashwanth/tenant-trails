import StarRating from "./StarRating";
import { mockAuthors } from "../data/mockData";
import "./ReviewCard.css";

function formatDate(iso) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  // Parse YYYY-MM-DD as local time. new Date("2026-04-02") interprets
  // it as UTC midnight, which can shift the day by one in negative-
  // offset timezones (e.g. Halifax).
  const parts = String(iso).split("-");
  if (parts.length !== 3) return iso;
  const year = Number(parts[0]);
  const month = Number(parts[1]) - 1;
  const day = Number(parts[2]);
  const d = new Date(year, month, day);
  if (isNaN(d.getTime())) return iso;
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function ReviewCard({ review, currentUserId }) {
  const author = mockAuthors[review.userId];
  const initials = author?.initials || review.userId.slice(0, 2).toUpperCase();
  const name = author?.name || review.userId;
  const isMine = currentUserId && review.userId === currentUserId;

  return (
    <article className="review-card">
      <div className="review-card__header">
        <span className="review-card__avatar">{initials}</span>
        <div className="review-card__author">
          <div className="review-card__name">
            {name}
            {isMine && <span className="review-card__mine"> (you)</span>}
          </div>
          <div className="review-card__date">{formatDate(review.date)}</div>
        </div>
        <div className="review-card__stars">
          <StarRating rating={review.rating} />
        </div>
      </div>

      <p className="review-card__body">{review.body}</p>
    </article>
  );
}

export default ReviewCard;
