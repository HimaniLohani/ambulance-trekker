const express = require("express");
const app = express();

app.use(express.json());

const ambulanceRoutes = require("./routes/ambulanceRoutes");

app.use("/api", ambulanceRoutes);

app.get("/", (req, res) => {
  res.send("Ambulance Backend Running 🚑");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});