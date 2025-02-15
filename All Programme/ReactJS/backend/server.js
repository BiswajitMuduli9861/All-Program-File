const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

let addresses = []; // In-memory database for addresses

// Fetch saved addresses
app.get("/api/addresses", (req, res) => {
  res.json(addresses);
});

// Save new address
app.post("/api/addresses", (req, res) => {
  const newAddress = req.body;
  addresses.push(newAddress);
  res.status(201).json({ message: "Address saved successfully" });
});

// Delete an address
app.delete("/api/addresses/:id", (req, res) => {
  const { id } = req.params;
  addresses = addresses.filter(addr => addr.id !== id);
  res.json({ message: "Address deleted successfully" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
