export default (sequelize, DataTypes) => {
	const shipping_region = sequelize.define(
		'shipping_region',
		{
			shipping_region_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			shipping_region: DataTypes.STRING(100),
		},
		{}
	)
	shipping_region.associate = models => {
		// associations can be defined here
		shipping_region.hasMany(models.shipping, { foreignKey: 'shipping_id' })
	}
	return shipping_region
}
