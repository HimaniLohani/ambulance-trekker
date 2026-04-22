import { useNavigate } from "react-router-dom";

export default function Booking() {
  const navigate = useNavigate();

  return (
    <div className="page-center">
      <div className="booking-card">
        <h2>🚑 Book Your Ambulance</h2>
        <p>Fill details below</p>

        <input placeholder="Pickup Location" />
        <input placeholder="Destination" />

        <select>
          <option>Select Emergency Type</option>
          <option>Accident</option>
          <option>Cardiac</option>
          <option>Respiratory</option>
        </select>

        <input placeholder="Contact Number" />
        <input placeholder="Patient Name (Optional)" />

        <textarea placeholder="Additional Notes"></textarea>

        <div className="pricing">
          <h4>Service Pricing</h4>
          <p>🚑 Basic: ₹499</p>
          <p>🚨 Advanced: ₹999</p>
          <p>🏥 ICU: ₹1999</p>
        </div>

        <button className="primary-btn" onClick={() => navigate("/confirm")}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}