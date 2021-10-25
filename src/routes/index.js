const errorHandler = require("../helpers/errorHandler");

module.exports = async function (app) {
	try {
		app.use("/users", require("./users/UserRoute"));
		app.use("/teachers", require("./teachers/TeacherRoute"));
	} finally {
		app.use(errorHandler);
	}
};
