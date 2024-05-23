const express = require("express");
const trimRequest = require("trim-request");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/register").post(trimRequest.all, authController.register);
router.route("/login").post(trimRequest.all, authController.login);
router.route("/logout").post(trimRequest.all, authController.logout);

module.exports = router;
