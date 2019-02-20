'use strict'

module.exports = (sequelize, DataTypes) => {
	const category = sequelize.define(
		'category',
		{
			category_id: {
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
	category.associate = function(models) {
		// associations can be defined here
		category.hasMany(models.product)
	}
	return category
}
