import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="page-center">
      <div className="confirm-card">
        <h2 className="success-text">Booking Confirmed!</h2>
        <p>Your ambulance is on the way 🚑</p>

        <div className="driver-card">
          <h3>Driver Details</h3>
          <p><b>Rajesh Kumar</b></p>
          <p>Vehicle: MH-01-AB-1234</p>
          <p>⭐ 4.8 Rating</p>
        </div>

        <div className="action-btns">
          <button className="call">Call Driver</button>
          <button className="track">Track Live</button>
        </div>

        <button className="primary-btn" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}