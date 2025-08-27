
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { title: "ShareBites Home" });
});

export default router;
