const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
	try {
		app.use("/users", require("./users/UserRoute"));
	} finally {
		app.use(errorHandler);
	}
};
