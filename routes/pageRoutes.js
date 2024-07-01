import app from "../base-template/src/app.js";

// import application routes
import renderIndexPage from "../controllers/pageController/renderIndexPage.js";
import renderGenericPage from "../controllers/pageController/renderGenericPage.js";
import renderElementsPage from "../controllers/pageController/renderElementsPage.js";
import render404Page from "../controllers/pageController/render404Page.js";

// set up routes
app.get("/", renderIndexPage);
app.get("/generic", renderGenericPage);
app.get("/elements", renderElementsPage);
app.all("*", render404Page)

