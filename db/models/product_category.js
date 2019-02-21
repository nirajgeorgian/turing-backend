export default (sequelize, DataTypes) => {
	const product_category = sequelize.define(
		'product_category',
		{
			product_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			category_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
		},
		{}
	)
	return product_category
}
