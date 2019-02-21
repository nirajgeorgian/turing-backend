export default (sequelize, DataTypes) => {
	const product_attribute = sequelize.define(
		'product_attribute',
		{
			product_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			attribute_value_id: {
				allowNull: false,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
		},
		{}
	)
	return product_attribute
}
