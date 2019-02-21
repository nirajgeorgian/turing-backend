'use strict'
module.exports = (sequelize, DataTypes) => {
	const shipping = sequelize.define(
		'shipping',
		{
			shipping_type: DataTypes.STRING,
			shipping_cost: DataTypes.FLOAT,
		},
		{}
	)
	shipping.associate = function(models) {
		// associations can be defined here
	}
	return shipping
}
