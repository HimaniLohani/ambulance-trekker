const {
  getAllAmbulances,
  getAmbulanceById,
  updateStatus
} = require("../models/ambulanceModel");

// ✅ get all
exports.getAmbulances = (req, res) => {
  res.json(getAllAmbulances());
};

// ✅ book ambulance (IMPORTANT)
exports.bookAmbulance = (req, res) => {
  const id = parseInt(req.params.id);

  const ambulance = getAmbulanceById(id);

  if (!ambulance) {
    return res.json({ message: "Ambulance not found" });
  }

  if (ambulance.status === "busy") {
    return res.json({ message: "Already booked" });
  }

  updateStatus(id, "busy");

  res.json({
    message: "Ambulance booked 🚑",
    ambulance
  });
};