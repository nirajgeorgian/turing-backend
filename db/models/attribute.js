'use strict'
module.exports = (sequelize, DataTypes) => {
	const attribute = sequelize.define(
		'attribute',
		{
			name: DataTypes.STRING,
		},
		{}
	)
	attribute.associate = function(models) {
		// associations can be defined here
	}
	return attribute
}
