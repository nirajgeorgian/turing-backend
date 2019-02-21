'use strict'
module.exports = (sequelize, DataTypes) => {
	const category = sequelize.define(
		'category',
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{}
	)
	category.associate = function(models) {
		// associations can be defined here
		category.belongsToMany(models.product, {
			through: 'product_category',
			foreignKey: 'category_id',
		})
	}
	return category
}
