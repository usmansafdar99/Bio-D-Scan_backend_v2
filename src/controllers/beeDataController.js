import BeeData from "../models/beeData.js";

// POST: Add new bee data
export const addBeeData = async (req, res) => {
  try {
    console.log("🚀 ~ addBeeData ~ req.body:", req.body);
    const beeData = new BeeData(req.body);
    console.log("🚀 ~ addBeeData ~ beeData:", beeData);
    const savedData = await beeData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error("Error saving bee data:", error);
    res.status(500).json({ error: "Failed to add bee data" });
  }
};

// GET: Retrieve up to 5000 bee data entries (most recent first)
export const getBeeData = async (req, res) => {
  try {
    const data = await BeeData.find({})
      .sort({ createdAt: -1 }) // newest first
      .limit(1000) // cap at 5,000 documents
      .lean() // return plain JS objects (faster)
      .exec();

    res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching bee data:", error);
    res.status(500).json({ error: "Failed to fetch bee data" });
  }
};
