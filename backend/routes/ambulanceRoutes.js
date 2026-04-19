const express = require("express");
const router = express.Router();

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
});

module.exports = router;