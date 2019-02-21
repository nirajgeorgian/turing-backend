export default (sequelize, DataTypes) => {
	const audit = sequelize.define(
		'audit',
		{
			created_on: DataTypes.DATE,
			message: DataTypes.TEXT,
			code: DataTypes.INTEGER,
		},
		{}
	)
	audit.associate = models => {
		// associations can be defined here
		audit.belongsTo(models.orders)
	}
	return audit
}
