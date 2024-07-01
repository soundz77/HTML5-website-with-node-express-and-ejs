import express from "express";
import indexController from "../controllers/index.js";
import pageNotFound from "../controllers/pageNotFound.js";

const router = express.Router();

router.get("/", indexController);
router.all("*", pageNotFound);

export default router;
