import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";
const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts)
router.get("/category/:category", getProductsByCategory);
router.get("/recommendation", getRecommendedProducts);

router.post("/", protectRoute, adminRoute, createProduct)
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;