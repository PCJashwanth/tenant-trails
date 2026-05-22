import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">TenantTrails</div>
      <div className="navbar__actions">
        <a href="#signin" className="navbar__link">
          Sign In
        </a>
        <button className="navbar__cta">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
