const { Sequelize } = require("sequelize");
const SessionModel = require("../models/SessionModel");
const UserModel = require("../models/UserModel");
const relations = require("./relations");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: false,
});

module.exports = async function postgres() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await SessionModel(sequelize, Sequelize);

		await relations(db);

		await sequelize.sync();

		return db;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
