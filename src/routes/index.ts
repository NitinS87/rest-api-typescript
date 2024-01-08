import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

router.get("/health", (req, res) => {
  res.json({ message: "OK" });
});

export default router;
