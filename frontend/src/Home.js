import "./App.css";
import { useState } from "react";

function Home() {
  const [pickup, setPickup] = useState("");
  const [hospital, setHospital] = useState("");
  const [patient, setPatient] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Basic Life Support");
  const [loading, setLoading] = useState(false);

  // 🚑 BOOKING FUNCTION (Backend connected)
  const handleBooking = async () => {
    if (!pickup || !hospital || !patient || !phone) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickup,
          hospital,
          patient,
          phone,
          type,
        }),
      });

      const data = await res.json();

      alert(data.message);

      // clear form
      setPickup("");
      setHospital("");
      setPatient("");
      setPhone("");
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <div>

      {/* 🔴 NAVBAR */}
      <div className="navbar">
        🚑 HelpLink

        <div className="nav-right">
          <span onClick={() => window.location.href = "tel:108"}>
            📞 Emergency: 108
          </span>

          <button onClick={() => window.location.href = "/login"}>
            Sign In
          </button>
        </div>
      </div>

      {/* 🔥 HERO */}
      <div className="hero">
        <div className="hero-left">
          <h1>
            Emergency Care at the <br />
            <span>Lowest Cost</span>
          </h1>

          <p>
            Professional ambulance service with 24/7 availability.
          </p>
        </div>

        <div className="hero-right">
          <img src="/image.png" alt="ambulance" />
          <div className="price">₹499</div>
        </div>
      </div>

      {/* 📦 BOOKING */}
      <div className="booking" id="booking">
        <h1>Book Your Ambulance in Seconds</h1>
        <p>Fill in the details and get an ambulance at your doorstep</p>

        {/* 🚑 TYPES */}
        <div className="types">
          <div
            className={`type ${type === "Basic Life Support" ? "active" : ""}`}
            onClick={() => setType("Basic Life Support")}
          >
            🚑 Basic Life Support <br /> <span>₹499</span>
          </div>

          <div
            className={`type ${type === "Advanced Life Support" ? "active" : ""}`}
            onClick={() => setType("Advanced Life Support")}
          >
            🚨 Advanced Life Support <br /> <span>₹999</span>
          </div>

          <div
            className={`type ${type === "ICU" ? "active" : ""}`}
            onClick={() => setType("ICU")}
          >
            🏥 ICU Ambulance <br /> <span>₹1999</span>
          </div>
        </div>

        {/* 📝 FORM */}
        <div className="form-grid">
          <input
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter pickup address"
          />

          <input
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            placeholder="Enter hospital name"
          />

          <input
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            placeholder="Enter patient name"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>

        {/* 🚑 BUTTON */}
        <button className="book-btn" onClick={handleBooking}>
          {loading ? "Booking..." : "🚑 Book Ambulance Now"}
        </button>

        <p className="note">
          By booking, you agree to our terms. Emergency: <b>108</b>
        </p>
      </div>

      {/* WHY */}
      <div className="why">
        <h3 className="tag">Why Choose Us</h3>
        <h1>Emergency Care You Can Trust</h1>
      </div>

      {/* HOW IT WORKS */}
      <div className="steps">
        <h3 className="tag">Simple Process</h3>
        <h1>How It Works</h1>

        <div className="step-container">
          <div className="step">
            <h2>01</h2>
            <h3>Book Online</h3>
          </div>

          <div className="step">
            <h2>02</h2>
            <h3>Get Matched</h3>
          </div>

          <div className="step">
            <h2>03</h2>
            <h3>Track Live</h3>
          </div>

          <div className="step">
            <h2>04</h2>
            <h3>Get Care</h3>
          </div>
        </div>

        {/* 🔥 SCROLL BUTTON */}
        <button
          className="start-btn"
          onClick={() => {
            document
              .getElementById("booking")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Start Booking Now
        </button>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <h2>🚑 HelpLink</h2>

        <div className="footer-bottom">
          <h1>Emergency? Call Now!</h1>

          <h2 onClick={() => window.location.href = "tel:108"}>
            108
          </h2>

          <p>Available 24/7</p>
        </div>
      </div>

    </div>
  );
}

export default Home;