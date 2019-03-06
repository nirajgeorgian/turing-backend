export default (sequelize, DataTypes) => {
	const tax = sequelize.define(
		'tax',
		{
			tax_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			tax_type: DataTypes.STRING(100),
			tax_percentage: DataTypes.FLOAT(10, 2),
		},
		{}
	)
	return tax
}
