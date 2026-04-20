const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");

// Temporary storage (no database)
let bookings = [];

// GET all ambulances from database
router.get("/ambulances", async (req, res) => {
  try {
    const ambulances = await Ambulance.find();
    res.json(ambulances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST new ambulance to database
router.post("/ambulances", async (req, res) => {
  try {
    const ambulance = new Ambulance(req.body);
    await ambulance.save();

    res.json({
      success: true,
      message: "Ambulance added successfully",
      ambulance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
});

module.exports = router;