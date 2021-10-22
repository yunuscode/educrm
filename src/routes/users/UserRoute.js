const { SignInController } = require("../../controllers/UserController");

const UserRouter = require("express").Router();

UserRouter.post("/sign_in", SignInController);

module.exports = UserRouter;
