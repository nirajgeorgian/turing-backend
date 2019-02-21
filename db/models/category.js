export default (sequelize, DataTypes) => {
	const category = sequelize.define(
		'category',
		{
			category_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{}
	)
	category.associate = models => {
		// associations can be defined here
		category.belongsToMany(models.product, {
			through: 'product_category',
			foreignKey: 'category_id',
		})
	}
	return category
}
