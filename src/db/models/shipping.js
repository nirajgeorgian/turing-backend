export default (sequelize, DataTypes) => {
	const shipping = sequelize.define(
		'shipping',
		{
			shipping_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			shipping_type: DataTypes.STRING,
			shipping_cost: DataTypes.FLOAT(10, 2),
		},
		{}
	)
	return shipping
}
