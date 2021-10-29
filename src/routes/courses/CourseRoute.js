const {
	CourseCreatePostController,
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

module.exports = CourseRoute;
