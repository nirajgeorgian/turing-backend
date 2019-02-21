export default (sequelize, DataTypes) => {
	const shipping_region = sequelize.define(
		'shipping_region',
		{
			shipping_region: DataTypes.STRING,
		},
		{}
	)
	shipping_region.associate = models => {
		// associations can be defined here
		shipping_region.hasMany(models.shipping)
	}
	return shipping_region
}
