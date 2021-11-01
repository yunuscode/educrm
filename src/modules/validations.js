const joi = require("joi");

module.exports = class Validations {
	static async SignUpValidation(data, Error) {
		return await joi
			.object({
				name: joi
					.string()
					.required()
					.min(5)
					.max(64)
					.error(new Error("Name is invalid")),

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

	static async SignInValidation(data, CustomError) {
		return await joi
			.object({
				username: joi
					.string()
					.regex(/^[A-Za-z]{2,}[_-]?[A-Za-z0-9]{2,}$/)
					.required()
					.error(new CustomError(400, "Username is invalid")),
				password: joi
					.string()
					.required()
					.max(128)
					.min(5)
					.error(new CustomError(400, "Password is invalid")),
			})
			.validateAsync(data);
	}
	static async AddTeacherValidation(data, CustomError) {
		return await joi
			.object({
				user_id: joi
					.string()
					.uuid()
					.required()
					.error(new CustomError(400, "User id is invalid")),
				phone: joi
					.string()
					.required()
					.error(new CustomError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				skills: joi
					.array()
					.items(joi.string().min(2).max(32))
					.required(),
			})
			.validateAsync(data);
	}

	static async CourseCreateValidation(data, CustomError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(128)
					.required()
					.error(new CustomError(400, "Name is invalid")),
				description: joi
					.string()
					.required()
					.error(new CustomError(400, "Description is invalid"))
					.min(64),
				price: joi
					.number()
					.min(0)
					.error(new CustomError(400, "Price is invalid"))
					.required(),
			})
			.validateAsync(data);
	}

	static async AddApplicantValidation(data, CustomError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(64)
					.required()
					.error(new CustomError(400, "Name is invalid")),
				description: joi
					.string()
					.error(new CustomError(400, "Description is invalid"))
					.min(64),
				birth_date: joi
					.date()
					.error(new CustomError(400, "Date is invalid"))
					.required(),
				phone: joi
					.string()
					.required()
					.error(new CustomError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				gender: joi
					.string()
					.required()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
				source: joi
					.string()
					.required()
					.error(new Error("Source is invalid")),
			})
			.validateAsync(data);
	}

	static async UpdateApplicantValidation(data, CustomError) {
		return await joi
			.object({
				name: joi
					.string()
					.min(8)
					.max(64)
					.error(new CustomError(400, "Name is invalid")),
				description: joi
					.string()
					.error(new CustomError(400, "Description is invalid"))
					.min(64),
				birth_date: joi
					.date()
					.error(new CustomError(400, "Date is invalid")),
				phone: joi
					.string()
					.error(new CustomError(400, "Phone is invalid"))
					.regex(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
				gender: joi
					.string()
					.valid("male", "female")
					.error(new Error("This option isn't available")),
				status: joi
					.string()
					.valid("active", "waiting", "cancelled")
					.error(new Error("This option isn't available")),
				source: joi.string().error(new Error("Source is invalid")),
			})
			.validateAsync(data);
	}
};
