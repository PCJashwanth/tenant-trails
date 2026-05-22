import "./Hero.css";

function Hero() {
  return (
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
        <button className="hero__btn hero__btn--primary">
          Create Free Account
        </button>
        <button className="hero__btn hero__btn--secondary">Sign In</button>
      </div>
    </section>
  );
}

export default Hero;
