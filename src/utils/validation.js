// Pure validation functions. Exported separately from the page components
// so they can be unit tested in isolation.

export function validateLogin(email, password) {
  const errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email.";
  }
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }
  return errors;
}

export function validateSignup(name, email, password, confirm) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.includes("@")) errors.email = "Please enter a valid email.";
  if (password.length < 6)
    errors.password = "Password must be at least 6 characters.";
  if (confirm !== password) errors.confirm = "Passwords do not match.";
  return errors;
}

export function validateReview(rating, body) {
  const errors = {};
  if (rating === 0) errors.rating = "Please select a star rating.";
  if (!body.trim()) errors.body = "Please write a review.";
  return errors;
}
