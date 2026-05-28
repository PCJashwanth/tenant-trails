import { Link } from "react-router-dom";
import "./Landing.css";

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature">
      <div className="feature__icon">{icon}</div>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__description">{description}</p>
    </div>
  );
}

function Landing() {
  return (
    <div className="landing">
      <nav className="navbar">
        <div className="navbar__logo">TenantTrails</div>
        <div className="navbar__actions">
          <Link to="/login" className="navbar__link">
            Sign In
          </Link>
          <Link to="/signup" className="navbar__cta">
            Get Started
          </Link>
        </div>
      </nav>

      <main>
        <section className="hero">
          <span className="hero__pill">Launching in Halifax, Nova Scotia</span>
          <h1 className="hero__headline">
            Know what you're signing before you sign it.
          </h1>
          <p className="hero__subtitle">
            Read honest reviews from past tenants. See AI-generated summaries.
            Make informed decisions about where you live.
          </p>
          <div className="hero__buttons">
            <Link to="/signup" className="hero__btn hero__btn--primary">
              Create Free Account
            </Link>
            <Link to="/login" className="hero__btn hero__btn--secondary">
              Sign In
            </Link>
          </div>
        </section>

        <section className="features">
          <FeatureItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="var(--color-star)"
                stroke="var(--color-star)"
                strokeWidth="2"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            }
            title="Verified Reviews"
            description="Real ratings with photos and videos from past tenants."
          />
          <FeatureItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-message)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            }
            title="AI Summaries"
            description="Key issues and sentiment extracted from every review."
          />
          <FeatureItem
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-question)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            }
            title="Ask Questions"
            description="Comment on reviews and get answers from past tenants."
          />
        </section>
      </main>
    </div>
  );
}

export default Landing;
