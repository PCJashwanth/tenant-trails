import { useState } from "react";
import Modal from "./Modal";
import { validateReview } from "../utils/validation";
import "./ReviewDialog.css";

function ReviewDialog({
  title = "Write a Review",
  initialRating = 0,
  initialBody = "",
  submitLabel = "Submit Review",
  onClose,
  onSubmit,
}) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);
  const [body, setBody] = useState(initialBody);
  const [errors, setErrors] = useState({});

  function handleSubmit() {
    const e = validateReview(rating, body);
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    onSubmit({ rating, body: body.trim() });
    onClose();
  }

  const displayRating = hoverRating || rating;

  return (
    <Modal title={title} onClose={onClose}>
      <div className="review-dialog__field">
        <label className="review-dialog__label">Your rating</label>
        <div
          className="review-dialog__stars"
          onMouseLeave={() => setHoverRating(0)}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={
                "review-dialog__star" +
                (n <= displayRating ? " review-dialog__star--filled" : "")
              }
              onClick={() => setRating(n)}
              onMouseEnter={() => setHoverRating(n)}
              aria-label={`${n} star${n === 1 ? "" : "s"}`}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  fill={
                    n <= displayRating
                      ? "var(--color-star)"
                      : "var(--color-border)"
                  }
                />
              </svg>
            </button>
          ))}
        </div>
        <div className="review-dialog__hint">
          {rating === 0 ? "Click to rate" : `${rating} of 5`}
        </div>
        {errors.rating && (
          <span className="review-dialog__error">{errors.rating}</span>
        )}
      </div>

      <div className="review-dialog__field">
        <label className="review-dialog__label" htmlFor="review-body">
          Your review
        </label>
        <textarea
          id="review-body"
          className={
            "review-dialog__textarea" +
            (errors.body ? " review-dialog__textarea--error" : "")
          }
          rows={5}
          placeholder="What was your experience living here? Cover maintenance, responsiveness, noise, pests, deposit handling, and anything future tenants should know."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {errors.body && (
          <span className="review-dialog__error">{errors.body}</span>
        )}
      </div>

      <div className="review-dialog__actions">
        <button
          type="button"
          className="review-dialog__cancel"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="button"
          className="review-dialog__submit"
          onClick={handleSubmit}
        >
          {submitLabel}
        </button>
      </div>
    </Modal>
  );
}

export default ReviewDialog;
