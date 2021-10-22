module.exports = class CustomError extends Error {
	constructor(errorCode, errorMessage) {
		super(errorMessage);
		this.errorCode = errorCode;
	}
};
