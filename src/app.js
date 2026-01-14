import express from "express";
import morgan from "morgan";
import testRoutes from "./routes/test.js";
import cors from "cors";
import beeDataRoutes from "./routes/beeData.js";
import "./config/index.js"; // Ensure MongoDB connection is established

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Logging middleware to log API requests in 'dev' format
app.use(morgan("dev"));

// Mount the testing routes under /api/test
app.use("/api/test", testRoutes);

// Mount the bee-data routes under /api/bee-data
app.use("/api/bee-data", beeDataRoutes);

export default app;
