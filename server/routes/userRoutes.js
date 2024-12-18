


const express = require("express");
const {
  register,
  login,
  getUser,
  editUser,
  changeAvatar,
  getAuthors,
} = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes - Apply authMiddleware to these routes
router.use(authMiddleware);

// Fetch user details by ID
router.get("/:id", getUser);

// Update user details by ID
router.patch("/edit-user/:id", editUser);  // No need for authMiddleware here since it's already applied globally

// Change user avatar (ensure you're handling file uploads correctly in changeAvatar controller)
router.patch("/change-avatar", changeAvatar);  // Use PATCH for partial update

// Get list of authors (Public route, no auth required)
router.get("/authors", getAuthors);

module.exports = router;
