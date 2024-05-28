const express = require("express");
const trimRequest = require("trim-request");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminController = require("../controllers/adminContoller");

const router = express.Router();

/**Authntication Routes */
router.route("/register").post(trimRequest.all, authController.register);
router.route("/login").post(trimRequest.all, authController.login);
router.route("/logout").post(trimRequest.all, authController.logout);

/**Routes only for ADMIN */
router.route("/admin").get(trimRequest.all, adminController.getAllUsers);

/**Token Routes */
router
  .route("/refreshToken")
  .post(trimRequest.all, authController.refreshToken);
router
  .route("/testingauthMiddlware")
  .get(trimRequest.all, authMiddleware.checkAuthorization, (req, res) => {
    req.user;
    res.send(req.user);
  });

module.exports = router;
