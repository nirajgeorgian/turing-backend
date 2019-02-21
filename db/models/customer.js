export default (sequelize, DataTypes) => {
	const customer = sequelize.define(
		'customer',
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			credit_card: DataTypes.TEXT,
			address_1: DataTypes.STRING,
			address_2: DataTypes.STRING,
			city: DataTypes.STRING,
			region: DataTypes.STRING,
			postal_code: DataTypes.STRING,
			country: DataTypes.STRING,
			day_phone: DataTypes.STRING,
			eve_phone: DataTypes.STRING,
			mob_phone: DataTypes.STRING,
		},
		{}
	)
	customer.associate = models => {
		// associations can be defined here
		customer.belongsTo(models.shipping_region)
	}
	return customer
}
