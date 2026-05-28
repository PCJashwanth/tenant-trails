import StarRating from "./StarRating";
import "./ApartmentCard.css";

function ApartmentCard({ apartment }) {
  const { name, address, neighbourhood, rating, reviewCount, tags, image } =
    apartment;

  return (
    <article className="card">
      <div className="card__image-wrap">
        <img className="card__image" src={image} alt={name} />
        <span className="card__rating-badge">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="var(--color-star)"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {rating.toFixed(1)}
        </span>
      </div>

      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <p className="card__address">
          <svg
            width="13"
            height="13"
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
          {address} · {neighbourhood}
        </p>

        <div className="card__tags">
          {tags.map((tag) => (
            <span key={tag} className="card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="card__footer">
          <span className="card__reviews">
            {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
          </span>
          <StarRating rating={rating} />
        </div>
      </div>
    </article>
  );
}

export default ApartmentCard;
