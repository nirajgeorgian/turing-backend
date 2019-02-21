export default (sequelize, DataTypes) => {
	const shopping_cart = sequelize.define(
		'shopping_cart',
		{
			cart_id: DataTypes.CHAR,
			attribute: DataTypes.STRING,
			quantity: DataTypes.INTEGER,
			buy_now: DataTypes.BOOLEAN,
			added_on: DataTypes.DATE,
		},
		{}
	)
	shopping_cart.associate = models => {
		// associations can be defined here
		shopping_cart.belongsTo(models.product)
	}
	return shopping_cart
}
