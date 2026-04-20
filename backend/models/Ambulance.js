const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema({
  driverName: String,
  phone: String,
  available: Boolean,
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    }
  }
});

ambulanceSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Ambulance", ambulanceSchema);