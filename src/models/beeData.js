import mongoose from "mongoose";

const beeDataSchema = new mongoose.Schema(
  {
    Date: { type: String, required: true },
    Time: { type: String, required: true },
    "Bumble Bee": { type: Number, required: true },
    "Honey Bee": { type: Number, required: true },
    "Lady Bug": { type: Number, required: true },
    "Total Count": { type: Number, required: true },
    "Temperature (C)": { type: Number },
    "Humidity (%)": { type: Number },
    Longitude: { type: Number },
    Latitude: { type: Number },
    Field: { type: String, enum: ["A", "B", "C", "D"], required: true },
  },
  { timestamps: true }
);

const BeeData = mongoose.model("BeeData", beeDataSchema);

export default BeeData;

// import mongoose from "mongoose";

// const beeDataSchema = new mongoose.Schema(
//   {
//     Date: { type: String, required: true },
//     Time: { type: String, required: true },
//     "Species Name": { type: String, required: true }, // e.g., "Bumble Bee"
//     Presence: { type: String, enum: ["Y", "N"], required: true }, // Y/N as string
//     Abundance: { type: Number, required: true },
//     "Busiest Time Number": { type: Number },
//     "Temperature (C)": { type: Number },
//     "Humidity (%)": { type: Number },
//     latitude: { type: Number },
//     longitude: { type: Number },
//   },
//   { timestamps: true }
// );

// const BeeData = mongoose.model("BeeData", beeDataSchema);

// export default BeeData;
