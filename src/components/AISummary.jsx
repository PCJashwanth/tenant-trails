import "./AISummary.css";

function AISummary({ summary, issues }) {
  if (!summary) return null;

  return (
    <div className="ai-summary">
      <div className="ai-summary__bar" />
      <div className="ai-summary__header">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="var(--color-primary)"
          aria-hidden="true"
        >
          <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          <path d="M19 3 L19.7 5.3 L22 6 L19.7 6.7 L19 9 L18.3 6.7 L16 6 L18.3 5.3 Z" />
        </svg>
        <span className="ai-summary__label">AI-GENERATED SUMMARY</span>
      </div>

      <p className="ai-summary__body">{summary}</p>

      {issues && issues.length > 0 && (
        <div className="ai-summary__issues">
          <h4 className="ai-summary__issues-title">Key Issues</h4>
          <div className="ai-summary__tags">
            {issues.map((issue) => (
              <span key={issue} className="ai-summary__tag">
                {issue}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AISummary;
