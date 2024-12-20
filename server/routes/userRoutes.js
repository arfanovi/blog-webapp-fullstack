


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

router.post("/register", register);
router.post("/login", login);

router.use(authMiddleware);

router.get("/:id", getUser);

router.patch("/edit-user/:id", editUser);  

router.patch("/change-avatar", changeAvatar); 
router.get("/authors", getAuthors);

module.exports = router;
