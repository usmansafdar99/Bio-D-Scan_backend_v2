import { Router } from "express";
import { sayHello } from "../controllers/helloController.js";

const router = Router();

// Testing endpoint (e.g., hello)
router.get("/hello", sayHello);

export default router;
