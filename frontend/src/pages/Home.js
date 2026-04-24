import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🚑 HelpLink</div>
        <div className="nav-right">
          <span>📞 Emergency: 108</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-container">
        <div className="hero-left">
          <h1>
            Emergency Care at the <br />
            <span>Lowest Cost</span>
          </h1>

          <p>
            Professional ambulance service with 24/7 availability.
            Fast response and affordable rates.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/auth")}
          >
            🚑 Book Ambulance Now
          </button>
        </div>

        <div className="hero-right">
          <img src="/ambulance.jpg" alt="ambulance" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          ⚡
          <h3>Fast Response</h3>
          <p>Reach you within 10 minutes</p>
        </div>

        <div className="feature-card">
          💰
          <h3>Affordable</h3>
          <p>Starting at just ₹499</p>
        </div>

        <div className="feature-card">
          🕒
          <h3>24/7 Available</h3>
          <p>Always ready to help</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps">
        <h2>How It Works</h2>

        <div className="step-grid">
          <div className="step-card">
            <h3>1. Login</h3>
            <p>Login as patient or driver</p>
          </div>

          <div className="step-card">
            <h3>2. Book</h3>
            <p>Enter pickup and destination</p>
          </div>

          <div className="step-card">
            <h3>3. Confirm</h3>
            <p>Get ambulance instantly</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta">
        <h2>Need Emergency Help?</h2>
        <button onClick={() => navigate("/auth")}>
          🚑 Book Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 HelpLink | Emergency: 108</p>
      </footer>
    </div>
  );
}

