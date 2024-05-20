import express from "express";
import authRoutes from "./auth.route.js";
import serviceRoutes from "./services.route.js";

const router = express.Router();
router.use("/auth", authRoutes);
router.use("/", serviceRoutes);

export default router;
