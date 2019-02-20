'use strict'

module.exports = (sequelize, DataTypes) => {
	const product = sequelize.define(
		'product',
		{
			product_id: {
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
			price: {
				type: DataTypes.DECIMAL,
			},
			discounted_price: {
				type: DataTypes.DECIMAL,
			},
			image: {
				type: DataTypes.STRING,
			},
			image_2: {
				type: DataTypes.STRING,
			},
			thumbnail: {
				type: DataTypes.STRING,
			},
			display: {
				type: DataTypes.SMALLINT,
			},
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
	return product
}
