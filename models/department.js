'use strict'

module.exports = (sequelize, DataTypes) => {
	const department = sequelize.define(
		'department',
		{
			department_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
			},
		},
		{}
	)
	department.associate = function(models) {
		// associations can be defined here
		department.hasMany(models.category)
	}
	return department
}
