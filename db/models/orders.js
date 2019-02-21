'use strict'
module.exports = (sequelize, DataTypes) => {
	const orders = sequelize.define(
		'orders',
		{
			total_amount: DataTypes.DECIMAL,
			created_on: DataTypes.DATE,
			shipped_on: DataTypes.DATE,
			status: DataTypes.INTEGER,
			comments: DataTypes.STRING,
			auth_code: DataTypes.STRING,
			reference: DataTypes.STRING,
		},
		{}
	)
	orders.associate = function(models) {
		// associations can be defined here
		orders.belongsTo(models.shipping)
		orders.belongsTo(models.tax)
		orders.belongsTo(models.customer)
	}
	return orders
}
