import express from "express";

import { allServices } from "../controllers/service.controller.js";

const router = express.Router();

router.route("/services").get(allServices);

export default router;
