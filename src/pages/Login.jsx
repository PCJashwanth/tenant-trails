import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { DEMO_USER } from "../data/mockData";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { setUser } = useAuth();
  const navigate = useNavigate();

  function validate() {
    const e = {};
    if (!email.includes("@")) e.email = "Please enter a valid email.";
    if (password.length < 6)
      e.password = "Password must be at least 6 characters.";
    return e;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    // Check against the demo account; otherwise accept any valid-format login
    // and derive a name from the email (mock auth for this lab).
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setUser({ name: DEMO_USER.name, email: DEMO_USER.email });
    } else {
      const name = email.split("@")[0];
      setUser({ name, email });
    }

    setErrors({});
    navigate("/dashboard");
  }

  return (
    <div className="auth">
      <div className="auth__card">
        <h1 className="auth__logo">TenantTrails</h1>
        <p className="auth__tagline">
          See what past tenants had to say, before you sign.
        </p>

        <form onSubmit={handleSubmit} noValidate>
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
              placeholder="alex@dal.ca"
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
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="auth__error">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="auth__submit">
            Sign In
          </button>
        </form>

        <p className="auth__switch">
          Don't have an account?{" "}
          <Link to="/signup" className="auth__switch-link">
            Create one
          </Link>
        </p>

        <div className="auth__demo">
          Demo: <strong>alex@dal.ca / password123</strong>
        </div>
      </div>
    </div>
  );
}

export default Login;
