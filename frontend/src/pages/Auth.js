import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  return (
    <div className="page-center">
      <div className="auth-card">
        <h2>🚑 HelpLink</h2>
        <p>Choose your role</p>

        <div className="tabs">
          <button
            className={role === "patient" ? "active" : ""}
            onClick={() => setRole("patient")}
          >
            Patient Login
          </button>

          <button
            className={role === "driver" ? "active" : ""}
            onClick={() => setRole("driver")}
          >
            Driver Signup
          </button>
        </div>

        {role === "patient" ? (
          <>
            <input placeholder="Phone / Email" />
            <input type="password" placeholder="Password" />
            <button onClick={() => navigate("/booking")} className="primary-btn">
              Login →
            </button>
          </>
        ) : (
          <>
            <input placeholder="Full Name" />
            <input placeholder="Phone Number" />
            <input placeholder="License Number" />
            <input placeholder="Vehicle Number" />
            <input type="password" placeholder="Password" />
            <button className="primary-btn">Sign Up →</button>
          </>
        )}
      </div>
    </div>
  );
}