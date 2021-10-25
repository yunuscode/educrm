const { verifyToken } = require("../modules/jwt");

module.exports = async function AuthMiddleware(req, res, next) {
	try {
		let token = req.headers.authorization;

		if (!token) {
			throw new res.error(401, "Token is not found");
			return;
		}

		token = verifyToken(token);

		if (!token) {
			throw new res.error(401, "Token is invalid");
		}

		const session = await req.db.sessions.findOne({
			where: {
				session_id: token.session_id,
			},
			include: req.db.users,
			raw: true,
		});

		if (!session) {
			throw new res.error(401, "Session isn't found");
		}

		req.session = session;

		next();
	} catch (error) {
		next(error);
	}
};
