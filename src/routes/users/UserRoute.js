const {
	SignInController,
	CreateUserController,
	UserGetController,
} = require("../../controllers/UserController");
const authMiddleware = require("../../middlewares/authMiddleware");
const permissionMiddleware = require("../../middlewares/permissionMiddleware");

const UserRouter = require("express").Router();

UserRouter.post("/sign_in", SignInController);
UserRouter.post(
	"/account",
	[authMiddleware, permissionMiddleware],
	CreateUserController
);

UserRouter.get("/", [authMiddleware, permissionMiddleware], UserGetController);

module.exports = UserRouter;
