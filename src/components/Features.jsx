import "./Features.css";

function FeatureItem({ icon, title, description }) {
  return (
    <div className="feature">
      <div className="feature__icon">{icon}</div>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__description">{description}</p>
    </div>
  );
}

function Features() {
  return (
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
  );
}

export default Features;
