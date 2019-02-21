export default (sequelize, DataTypes) => {
	const shipping = sequelize.define(
		'shipping',
		{
			shipping_type: DataTypes.STRING,
			shipping_cost: DataTypes.FLOAT,
		},
		{}
	)
	return shipping
}
