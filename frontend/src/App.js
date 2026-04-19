import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/ambulances")
      .then((res) => res.json())
      .then((data) => setAmbulances(data))
      .catch((err) => console.log(err));
  }, []);

  const HomePage = () => (
    <div>
      <nav className="navbar">
        <div className="logo">🚑 HelpLink</div>

        <div className="nav-right">
          <span>📞 Emergency: 108</span>
          <button className="signin">Sign In</button>
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

        <button className="book-btn">🚑 Book Ambulance Now</button>

        <p className="note">
          By booking, you agree to our terms. Emergency: <b>108</b>
        </p>
      </div>

      <div className="why">
        <h3 className="tag">Why Choose Us</h3>
        <h1>Emergency Care You Can Trust</h1>
        <p>
          We combine affordability with quality service to ensure you get the best
          emergency medical care
        </p>
      </div>

      <div className="steps">
        <h3 className="tag">Simple Process</h3>
        <h1>How It Works</h1>

        <div className="step-container">
          <div className="step">
            <h2>01</h2>
            <h3>Book Online</h3>
            <p>Enter your location and select ambulance type</p>
          </div>

          <div className="step">
            <h2>02</h2>
            <h3>Get Matched</h3>
            <p>We find nearest ambulance to your location</p>
          </div>

          <div className="step">
            <h2>03</h2>
            <h3>Track Live</h3>
            <p>Monitor ambulance in real-time</p>
          </div>

          <div className="step">
            <h2>04</h2>
            <h3>Get Care</h3>
            <p>Receive professional medical help</p>
          </div>
        </div>

        <button className="start-btn">Start Booking Now</button>
      </div>

      <div className="ambulance-list">
        <h1>Available Ambulances</h1>

        {ambulances.map((ambulance) => (
          <div key={ambulance._id} className="ambulance-card">
            <h3>{ambulance.driverName}</h3>
            <p>Phone: {ambulance.phone}</p>
            <p>Available: {ambulance.available ? "Yes" : "No"}</p>
            <p>
              Coordinates: {ambulance.location.coordinates[0]},{" "}
              {ambulance.location.coordinates[1]}
            </p>
          </div>
        ))}
      </div>

      <div className="footer">
        <h2>🚑 HelpLink</h2>
        <p>Providing affordable and reliable ambulance services 24/7</p>

        <div className="footer-bottom">
          <h1>Emergency? Call Now!</h1>
          <h2>108</h2>
          <p>Available 24/7</p>
        </div>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;