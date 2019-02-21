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
			tax_type: DataTypes.STRING,
			tax_percentage: DataTypes.FLOAT,
		},
		{}
	)
	return tax
}
