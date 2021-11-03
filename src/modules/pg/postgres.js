const { Sequelize } = require("sequelize");
const SessionModel = require("../../models/SessionModel");
const UserModel = require("../../models/UserModel");
const CourseModel = require("../../models/CourseModel");
const PermissionModel = require("../../models/PermissionModel");
const init = require("./init");
const relations = require("./relations");
const UserPermissionModel = require("../../models/UserPermissionModel");
const TeachersModel = require("../../models/TeachersModel");
const ApplicantModel = require("../../models/ApplicantModel");
const GroupModel = require("../../models/GroupModel");
const GroupStudentsModel = require("../../models/GroupStudentsModel");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: false,
});

module.exports = async function postgres() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.users = await UserModel(sequelize, Sequelize);
		db.sessions = await SessionModel(sequelize, Sequelize);
		db.permissions = await PermissionModel(sequelize, Sequelize);
		db.user_permissions = await UserPermissionModel(sequelize, Sequelize);
		db.teachers = await TeachersModel(sequelize, Sequelize);
		db.courses = await CourseModel(sequelize, Sequelize);
		db.applicants = await ApplicantModel(sequelize, Sequelize);
		db.groups = await GroupModel(sequelize, Sequelize);
		db.group_students = await GroupStudentsModel(sequelize, Sequelize);

		await relations(db);

		// await db.applicants.sync({ force: true });

		await init(db);

		await sequelize.sync({ force: true });

		return db;
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
