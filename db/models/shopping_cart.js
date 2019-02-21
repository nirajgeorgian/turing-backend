'use strict'
module.exports = (sequelize, DataTypes) => {
	const shopping_cart = sequelize.define(
		'shopping_cart',
		{
			cart_id: DataTypes.CHAR,
			attributes: DataTypes.STRING,
			quantity: DataTypes.INETGER,
			buy_now: DataTypes.BOOLEAN,
			added_on: DataTypes.DATE,
		},
		{}
	)
	shopping_cart.associate = function(models) {
		// associations can be defined here
		shopping_cart.belongsTo(models.product)
	}
	return shopping_cart
}
