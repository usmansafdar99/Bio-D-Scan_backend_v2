import { Router } from "express";
import { addBeeData, getBeeData } from "../controllers/beeDataController.js";

const router = Router();

// Bee-data addition endpoint
router.post("/", addBeeData);

// Bee-data retrieval endpoint
router.get("/", getBeeData);

export default router;
