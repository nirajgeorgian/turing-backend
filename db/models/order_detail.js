export default (sequelize, DataTypes) => {
	const order_detail = sequelize.define(
		'order_detail',
		{
			attribute: DataTypes.STRING,
			product_name: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
			unit_cost: DataTypes.DECIMAL,
		},
		{}
	)
	order_detail.associate = models => {
		// associations can be defined here
		order_detail.belongsTo(models.orders)
		order_detail.belongsTo(models.product)
	}
	return order_detail
}
