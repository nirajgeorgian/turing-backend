export default (sequelize, DataTypes) => {
	const product = sequelize.define(
		'product',
		{
			product_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
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
				{
					type: 'FULLTEXT',
					name: 'product_idx',
					fields: ['name', 'description'],
				},
			],
		}
	)
	product.associate = models => {
		// associations can be defined here
		product.belongsToMany(models.category, {
			through: 'product_category',
			foreignKey: 'product_id',
		})
		product.belongsToMany(models.attribute_value, {
			through: 'product_attribute',
			foreignKey: 'product_id',
		})
	}
	return product
}
