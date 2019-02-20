'use strict'
module.exports = (sequelize, DataTypes) => {
	const department = sequelize.define(
		'department',
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{}
	)
	department.associate = function(models) {
		// associations can be defined here
		department.hasMany(models.category)
	}
	return department
}
