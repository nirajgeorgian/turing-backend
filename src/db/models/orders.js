export default (sequelize, DataTypes) => {
	const orders = sequelize.define(
		'orders',
		{
			order_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			total_amount: DataTypes.DECIMAL(10, 2),
			created_on: DataTypes.DATE,
			shipped_on: DataTypes.DATE,
			status: DataTypes.INTEGER,
			comments: DataTypes.STRING,
			auth_code: DataTypes.STRING(50),
			reference: DataTypes.STRING(50),
		},
		{}
	)
	orders.associate = models => {
		// associations can be defined here
		orders.belongsTo(models.shipping, { foreignKey: 'shipping_id' })
		orders.belongsTo(models.tax, { foreignKey: 'tax_id' })
		orders.belongsTo(models.customer, { foreignKey: 'customer_id' })
	}
	return orders
}
