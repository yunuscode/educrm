const {
	CourseCreatePostController,
	CourseGetController,
	CourseUpdatePutController,
	CourseGetOneController,
} = require("../../controllers/CourseController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const expressFileUploadMiddleware = require("express-fileupload");

const CourseRoute = require("express").Router();

CourseRoute.use([authMiddleware, permissionMiddleware]);

CourseRoute.post(
	"/",
	expressFileUploadMiddleware({
		abortOnLimit: true,
		safeFileNames: true,
	}),
	CourseCreatePostController
);

CourseRoute.put(
	"/:course_id",
	expressFileUploadMiddleware({
		abortOnLimit: true,
		safeFileNames: true,
	}),
	CourseUpdatePutController
);

CourseRoute.get("/", CourseGetController);

CourseRoute.get("/:course_id", CourseGetOneController);

module.exports = CourseRoute;
