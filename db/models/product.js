'use strict'
module.exports = (sequelize, DataTypes) => {
	const product = sequelize.define(
		'product',
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			price: DataTypes.DECIMAL,
			discounted_price: DataTypes.DECIMAL,
			image: DataTypes.STRING,
			image_2: DataTypes.STRING,
			thumbnail: DataTypes.STRING,
			display: DataTypes.SMALLINT,
		},
		{
			indexes: [
				{
					name: 'idx_ft_product_name_description',
					fields: ['name', 'description'],
				},
			],
		}
	)
	product.associate = function(models) {
		// associations can be defined here
	}
	return product
}
