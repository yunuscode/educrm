const {
	ApplicantGetController,
	ApplicantPostController,
} = require("../../controllers/ApplicantController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const ApplicantRoute = require("express").Router();

ApplicantRoute.use([authMiddleware, permissionMiddleware]);

ApplicantRoute.get("/", ApplicantGetController);
ApplicantRoute.post("/:course_id", ApplicantPostController);

module.exports = ApplicantRoute;
