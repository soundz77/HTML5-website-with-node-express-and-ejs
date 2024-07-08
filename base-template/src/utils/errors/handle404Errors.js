import globalErrorMessages from "../logging/messages/globalErrorMessages.js";

const handle404Errors = (req, res) => {
  const message = `${globalErrorMessages.pageNotFound} ${req.originalUrl}`;
  res.status(404).render("error", {
    title: "Page Not Found",
    message: message,
  });
};

export default handle404Errors;
