export default (sequelize, DataTypes) => {
	const tax = sequelize.define(
		'tax',
		{
			tax_type: DataTypes.STRING,
			tax_percentage: DataTypes.FLOAT,
		},
		{}
	)
	return tax
}
