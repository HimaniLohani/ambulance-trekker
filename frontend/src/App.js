import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function HomePage({ ambulances }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    alert("Booking button clicked");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">🚑 HelpLink</div>

        <div className="nav-right">
          <span>📞 Emergency: 108</span>
          <button className="signin" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-left">
          <h1>
            Emergency Care at the <br />
            <span>Lowest Cost</span>
          </h1>

          <p>
            Professional ambulance service with 24/7 availability.
            Fast response and affordable rates.
          </p>
        </div>

        <div className="hero-right">
          <img src="/image.png" alt="Ambulance" />
          <div className="price">₹499</div>
        </div>
      </div>

      <div className="booking">
        <h1>Book Your Ambulance in Seconds</h1>
        <p>Fill in the details and get an ambulance at your doorstep</p>

        <div className="types">
          <div className="type active">
            🚑 Basic Life Support <br /> <span>₹499</span>
          </div>

          <div className="type">
            🚨 Advanced Life Support <br /> <span>₹999</span>
          </div>

          <div className="type">
            🏥 ICU Ambulance <br /> <span>₹1999</span>
          </div>
        </div>

        <div className="form-grid">
          <input placeholder="Enter pickup address" />
          <input placeholder="Enter hospital name" />
          <input placeholder="Enter patient name" />
          <input placeholder="Enter phone number" />
        </div>

        <button className="book-btn" onClick={handleBooking}>
          🚑 Book Ambulance Now
        </button>

        <p className="note">
          By booking, you agree to our terms. Emergency: <b>108</b>
        </p>
      </div>

      <div className="why">
        <h3 className="tag">Why Choose Us</h3>
        <h1>Emergency Care You Can Trust</h1>
      </div>

      <div className="steps">
        <button
          className="start-btn"
          onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
        >
          Start Booking Now
        </button>
      </div>

      <div className="ambulance-list">
        <h1>Available Ambulances</h1>

        {ambulances.map((ambulance) => (
          <div key={ambulance._id} className="ambulance-card">
            <h3>{ambulance.driverName}</h3>
            <p>Phone: {ambulance.phone}</p>
            <p>Available: {ambulance.available ? "Yes" : "No"}</p>
            <p>Location: {ambulance.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/ambulances")
      .then((res) => res.json())
      .then((data) => setAmbulances(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage ambulances={ambulances} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;