'use strict'
module.exports = (sequelize, DataTypes) => {
	const tax = sequelize.define(
		'tax',
		{
			tax_type: DataTypes.STRING,
			tax_percentage: DataTypes.FLOAT,
		},
		{}
	)
	tax.associate = function(models) {
		// associations can be defined here
	}
	return tax
}
