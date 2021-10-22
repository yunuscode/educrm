module.exports = async function (app) {
	app.use("/users", require("./users/UserRoute"));
};
