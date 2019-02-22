export default (sequelize, DataTypes) => {
	const audit = sequelize.define(
		'audit',
		{
			audit_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			created_on: DataTypes.DATE,
			message: DataTypes.TEXT,
			code: DataTypes.INTEGER,
		},
		{}
	)
	audit.associate = models => {
		// associations can be defined here
		audit.belongsTo(models.orders, { foreignKey: 'order_id' })
	}
	return audit
}
