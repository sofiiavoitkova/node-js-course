import { Router } from "express";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", (req, res) => {
  res.json({ message: "hello" });
});
router.post("/product", () => {});
router.put("/product/:id", () => {});
router.delete("/product/:id", () => {});

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.post("/update", () => {});
router.put("/update/:id", () => {});
router.delete("/update/:id", () => {});

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.put("/updatepoint/:id", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
