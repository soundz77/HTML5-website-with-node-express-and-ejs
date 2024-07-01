import logger from "../../base-template/src/utils/logging/logger.js";
import globalErrorMessages from "../../base-template/src/utils/logging/messages/globalErrorMessages.js";

const render404Page = (req, res) => {
    
    const originalUrl = req.originalUrl || "unknown URL";   
    
    logger.error(`${globalErrorMessages.pageNotFound}: ${originalUrl}`, 404);
    
    res.status(404).render("error")
}

export default render404Page;