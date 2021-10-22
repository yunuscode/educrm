const { SignInValidation } = require("../modules/validations");

module.exports = class UserController {
	static async SignInController(req, res, next) {
		try {
			const { username, password } = await SignInValidation(req.body);
		} catch (error) {}
	}
};
