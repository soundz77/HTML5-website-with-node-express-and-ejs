import globalErrorMessages from "../utils/logging/messages/globalErrorMessages.js";

const pageNotfFound = (req, res) => {
  const message = globalErrorMessages.pageNotFound + req.originalUrl;
  const title = "Basic Express App";

  res.status(404).render("error", { title, message });
};

export default pageNotfFound;
