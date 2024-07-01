import express from "express";
const router = express.Router();

import renderIndexPage from "../controllers/pageController/renderIndexPage.js";
import renderGenericPage from "../controllers/pageController/renderGenericPage.js";
import renderElementsPage from "../controllers/pageController/renderElementsPage.js";

// Uses /
router.get("/", renderIndexPage);
router.get("/generic", renderGenericPage);
router.get("/elements", renderElementsPage);

export default router;


// THIS IS NOT BEING USED! base app is used instead