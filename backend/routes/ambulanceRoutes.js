const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");

<<<<<<< HEAD
router.get("/ambulances", async (req, res) => {
  try {
    const ambulances = await Ambulance.find();
    res.json(ambulances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
=======
// Temporary storage (no database)
let bookings = [];

// GET all bookings
router.get("/", (req, res) => {
  res.json(bookings);
});

// POST booking
router.post("/book", (req, res) => {
  const booking = req.body;

  bookings.push(booking);

  console.log("New Booking:", booking);

  res.json({
    message: "Booking successful",
    data: booking,
  });
>>>>>>> 4a3418d112421e52a29ed5b1992b3f33e71799ae
});

module.exports = router;