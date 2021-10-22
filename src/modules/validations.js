const joi = require("joi");

module.exports = class Validations {
	static async SignUpValidation(data) {
		return await joi
			.object({
				name: joi
					.string()
					.required()
					.min(5)
					.max(64)
					.error(new Error("Name is invalid")),
				email: joi
					.string()
					.email()
					.error(new Error("Email is invalid")),
				password: joi
					.string()
					.required()
					.max(128)
					.min(6)
					.error(new Error("Password is invalid")),
				username: joi
					.string()
					.regex(/^[A-Za-z]{2,}[_-]?[A-Za-z0-9]{2,}$/)
					.required()
					.error(new Error("Username is invalid")),
				gender: joi
					.string()
					.required()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
			})
			.validateAsync(data);
	}

	static async SignInValidation(data) {
		return await joi
			.object({
				password: joi
					.string()
					.required()
					.max(128)
					.min(6)
					.error(new Error("Password is invalid")),
				username: joi
					.string()
					.regex(/^[A-Za-z]{2,}[_-]?[A-Za-z0-9]{2,}$/)
					.required()
					.error(new Error("Username is invalid")),
			})
			.validateAsync(data);
	}
};
