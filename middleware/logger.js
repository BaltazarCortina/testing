//Define middleware

const logger = (req, res, next) => {
    console.log("Middleware");
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger;