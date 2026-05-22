import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <main className="landing__main">
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default Landing;
