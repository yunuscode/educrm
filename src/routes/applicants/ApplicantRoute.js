const {
	ApplicantGetController,
	ApplicantPostController,
	ApplicantPutController,
} = require("../../controllers/ApplicantController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const ApplicantRoute = require("express").Router();

ApplicantRoute.use([authMiddleware, permissionMiddleware]);

ApplicantRoute.get("/", ApplicantGetController);
ApplicantRoute.post("/:course_id", ApplicantPostController);
ApplicantRoute.put("/:applicant_id", ApplicantPutController);

module.exports = ApplicantRoute;
