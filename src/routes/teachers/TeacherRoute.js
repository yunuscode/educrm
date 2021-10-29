const {
	TeacherCreatePostController,
	TeacherUpdatePutController,
	TeacherGetController,
} = require("../../controllers/TeacherController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const TeacherRoute = require("express").Router();

TeacherRoute.use([authMiddleware, permissionMiddleware]);

TeacherRoute.post("/", TeacherCreatePostController);
TeacherRoute.put("/:teacher_id", TeacherUpdatePutController);
TeacherRoute.get("/", TeacherGetController);

module.exports = TeacherRoute;
