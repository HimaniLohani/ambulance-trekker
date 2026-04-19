const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema({
  driverName: String,
  phone: String,
  location: String,
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Ambulance", ambulanceSchema);