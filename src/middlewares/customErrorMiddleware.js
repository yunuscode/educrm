const CustomError = require("../helpers/CustomError");

module.exports = function customErrorMiddleware(req, res, next) {
	res.error = CustomError;
	next();
};
