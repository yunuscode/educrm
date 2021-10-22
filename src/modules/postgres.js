const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: false,
});

module.exports = async function postgres() {
	try {
		await sequelize.authenticate();
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
