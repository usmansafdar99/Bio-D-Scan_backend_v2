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

// GET: Retrieve bee data entries (most recent first), optionally filtered by field
export const getBeeData = async (req, res) => {
  try {
    const { field } = req.query;
    
    // Build query filter
    const filter = {};
    if (field && ["A", "B", "C", "D"].includes(field.toUpperCase())) {
      filter.Field = field.toUpperCase();
    }

    const data = await BeeData.find(filter)
      .sort({ createdAt: -1 }) // newest first
      .limit(1000) // cap at 1,000 documents
      .lean() // return plain JS objects (faster)
      .exec();

    res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching bee data:", error);
    res.status(500).json({ error: "Failed to fetch bee data" });
  }
};

// GET: Retrieve bee data by specific field (A, B, C, D)
export const getBeeDataByField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    
    // Validate field parameter
    if (!fieldId || !["A", "B", "C", "D"].includes(fieldId.toUpperCase())) {
      return res.status(400).json({ error: "Invalid field. Must be A, B, C, or D" });
    }

    const data = await BeeData.find({ Field: fieldId.toUpperCase() })
      .sort({ createdAt: -1 })
      .limit(1000)
      .lean()
      .exec();

    res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching bee data by field:", error);
    res.status(500).json({ error: "Failed to fetch bee data" });
  }
};

// POST: Add bee data for a specific field (A, B, C, D) - Used by hardware devices
export const addBeeDataByField = async (req, res) => {
  try {
    const { fieldId } = req.params;
    
    // Validate field parameter
    if (!fieldId || !["A", "B", "C", "D"].includes(fieldId.toUpperCase())) {
      return res.status(400).json({ error: "Invalid field. Must be A, B, C, or D" });
    }

    // Add Field to the request body
    const dataWithField = {
      ...req.body,
      Field: fieldId.toUpperCase()
    };

    console.log(`🚀 ~ addBeeDataByField ~ Field ${fieldId}:`, dataWithField);
    
    const beeData = new BeeData(dataWithField);
    const savedData = await beeData.save();
    
    res.status(201).json({ message: `Data added successfully for Field ${fieldId.toUpperCase()}`, data: savedData });
  } catch (error) {
    console.error("Error saving bee data by field:", error);
    res.status(500).json({ error: "Failed to add bee data" });
  }
};
