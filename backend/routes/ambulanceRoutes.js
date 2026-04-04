const express = require("express");
const router = express.Router();

router.get("/ambulances", (req, res) => {
  res.json([
    {
      driverName: "Ravi",
      phone: "9876543210",
      location: "Delhi",
      available: true
    }
  ]);
});

module.exports = router;