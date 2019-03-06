export default (sequelize, DataTypes) => {
	const order_detail = sequelize.define(
		'order_detail',
		{
			item_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			attribute: DataTypes.STRING(1000),
			product_name: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
			unit_cost: DataTypes.DECIMAL(10, 2),
		},
		{}
	)
	order_detail.associate = models => {
		// associations can be defined here
		order_detail.belongsTo(models.orders, { foreignKey: 'order_id' })
		order_detail.belongsTo(models.product, { foreignKey: 'product_id' })
	}
	return order_detail
}
