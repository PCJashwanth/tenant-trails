import "./StarRating.css";

// Renders 5 stars with full / half / empty fills based on a 0-5 rating.
function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let type = "empty";
    if (rating >= i) type = "full";
    else if (rating >= i - 0.5) type = "half";
    stars.push(type);
  }

  return (
    <span className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {stars.map((type, index) => (
        <Star key={index} type={type} />
      ))}
    </span>
  );
}

function Star({ type }) {
  const full = "var(--color-star)";
  const empty = "var(--color-border)";

  if (type === "half") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor={full} />
            <stop offset="50%" stopColor={empty} />
          </linearGradient>
        </defs>
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          fill="url(#half-grad)"
        />
      </svg>
    );
  }

  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={type === "full" ? full : empty}
      />
    </svg>
  );
}

export default StarRating;
