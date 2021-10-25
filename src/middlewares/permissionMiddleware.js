module.exports = async function PermissionMiddleware(req, res, next) {
	try {
		const permissions = await req.db.user_permissions.findAll({
			where: {
				user_id: req.session.user_id,
			},
			include: req.db.permissions,
			raw: true,
		});

		req.user_permissions = permissions;

		next();
	} catch (error) {
		next(error);
	}
};
