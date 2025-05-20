const express = require("express");
const sql = require("./connection/db.js");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to query device information
app.post("/device", async (req, res) => {
  try {
    const { username } = req.body;

    if ( !username) {
      return res.status(400).json({ error: "Both device_id and username are required" });
    }

    // Query the database
    const devices = await sql`
      SELECT * FROM soil_data 
      WHERE username = ${username} 
     
    `;

    if (devices.length === 0) {
      return res.status(404).json({ message: "No matching device found" });
    }

    res.json(devices); // Return the first matching device
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});