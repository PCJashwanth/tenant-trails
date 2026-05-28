import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const { setUser } = useAuth();
  const navigate = useNavigate();

  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.includes("@")) e.email = "Please enter a valid email.";
    if (password.length < 6)
      e.password = "Password must be at least 6 characters.";
    if (confirm !== password) e.confirm = "Passwords do not match.";
    return e;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setUser({ name: name.trim(), email });
    setErrors({});
    navigate("/dashboard");
  }

  return (
    <div className="auth">
      <div className="auth__card">
        <h1 className="auth__logo">TenantTrails</h1>
        <p className="auth__tagline">
          Create your account to submit reviews and comments.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="auth__field">
            <label className="auth__label" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              type="text"
              className={
                "auth__input" + (errors.name ? " auth__input--error" : "")
              }
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="auth__error">{errors.name}</span>}
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={
                "auth__input" + (errors.email ? " auth__input--error" : "")
              }
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="auth__error">{errors.email}</span>}
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={
                "auth__input" + (errors.password ? " auth__input--error" : "")
              }
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="auth__error">{errors.password}</span>
            )}
          </div>

          <div className="auth__field">
            <label className="auth__label" htmlFor="confirm">
              Confirm password
            </label>
            <input
              id="confirm"
              type="password"
              className={
                "auth__input" + (errors.confirm ? " auth__input--error" : "")
              }
              placeholder="Repeat password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {errors.confirm && (
              <span className="auth__error">{errors.confirm}</span>
            )}
          </div>

          <button type="submit" className="auth__submit">
            Create Account
          </button>
        </form>

        <p className="auth__switch">
          Already have an account?{" "}
          <Link to="/login" className="auth__switch-link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
