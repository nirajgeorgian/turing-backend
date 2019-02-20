export const Product = (sequelize, type) => {
	return sequelize.define(
		'product',
		{
			product_id: {
				type: type.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			name: {
				type: type.STRING,
				allowNull: false,
			},
			description: {
				type: type.STRING,
			},
			price: {
				type: type.DECIMAL,
			},
			discounted_price: {
				type: type.DECIMAL,
			},
			image: {
				type: type.STRING,
			},
			image_2: {
				type: type.STRING,
			},
			thumbnail: {
				type: type.STRING,
			},
			display: {
				type: type.SMALLINT,
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
}
