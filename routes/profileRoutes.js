const express = require("express");
const {
  viewProfile,
  editProfile,
  verifyToken,
} = require("../controllers/profileController");
const router = express.Router();

router.get("/view/:userId", verifyToken, viewProfile);
router.put("/edit", verifyToken, editProfile);

module.exports = router;
