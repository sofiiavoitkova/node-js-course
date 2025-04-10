import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

router.get("/product/:id", (req, res) => {
  res.json({ message: "hello" });
});
router.post("/product", () => {});
// router.put("/product/:id", body("name").isString(), (req, res) => {
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     res.status(400);
//     res.json({ errors: errors.array() });
//   }
// });
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.delete("/product/:id", () => {});

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.post("/update", () => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional()
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString()
);
router.delete("/update/:id", () => {});

router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepiont/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepiont",
  body("name").optional().isString(),
  body("description").optional().isString(),
  body("updateID").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
