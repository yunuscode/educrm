const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const CourseRoute = require("express").Router();

CourseRoute.use([authMiddleware, permissionMiddleware]);

module.exports = CourseRoute;
