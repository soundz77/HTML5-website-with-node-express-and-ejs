import app from "../../base-template/src/app.js";
const pageRouter = app();

// import application routes
import renderIndexPage from "../controllers/pageController/renderIndexPage.js";
import renderGenericPage from "../controllers/pageController/renderGenericPage.js";
import renderElementsPage from "../controllers/pageController/renderElementsPage.js";
import render404Page from "../controllers/pageController/render404Page.js";

// set up routes
pageRouter.get("/", renderIndexPage);
pageRouter.get("/generic", renderGenericPage);
pageRouter.get("/elements", renderElementsPage);
pageRouter.all("*", render404Page);

export default pageRouter;
