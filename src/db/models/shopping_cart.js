export default (sequelize, DataTypes) => {
	const shopping_cart = sequelize.define(
		'shopping_cart',
		{
			cart_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			attribute: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
			buy_now: DataTypes.BOOLEAN,
			added_on: DataTypes.DATE,
		},
		{}
	)
	shopping_cart.associate = models => {
		// associations can be defined here
		shopping_cart.belongsTo(models.product, {
			foreignKey: 'product_id',
			as: 'product',
		})
		shopping_cart.belongsTo(models.customer, {
			foreignKey: 'customer_id',
			as: 'customer',
		})
	}
	return shopping_cart
}
