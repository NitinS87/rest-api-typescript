import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

router.get("/health", (req: Request, res: Response) => {
  res.json({ message: "OK" });
});

export default router;
