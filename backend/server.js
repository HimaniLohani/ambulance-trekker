const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// LOGIN API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    res.json({ success: true, message: "Login Successful ✅" });
  } else {
    res.json({ success: false, message: "Invalid Credentials ❌" });
  }
});

// BOOKING API
app.post("/api/ambulances", (req, res) => {
  const data = req.body;

  console.log("Booking:", data);

  res.json({
    success: true,
    message: "Ambulance booked successfully 🚑",
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000/api/login 🚀");
});