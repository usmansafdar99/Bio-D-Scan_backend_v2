import { Router } from "express";
import { addBeeData, getBeeData, getBeeDataByField, addBeeDataByField } from "../controllers/beeDataController.js";

const router = Router();

// Bee-data addition endpoint
router.post("/", addBeeData);

// Bee-data retrieval endpoint (supports ?field=A query param)
router.get("/", getBeeData);

// Bee-data retrieval by field (A, B, C, D)
router.get("/field/:fieldId", getBeeDataByField);

// Bee-data addition by field (A, B, C, D) - For hardware devices
router.post("/field/:fieldId", addBeeDataByField);

export default router;
