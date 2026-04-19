const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");

router.get("/ambulances", async (req, res) => {
  try {
    const ambulances = await Ambulance.find();
    res.json(ambulances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;