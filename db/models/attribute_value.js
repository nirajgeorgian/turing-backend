export default (sequelize, DataTypes) => {
	const attribute_value = sequelize.define(
		'attribute_value',
		{
			value: DataTypes.STRING,
		},
		{}
	)
	attribute_value.associate = models => {
		// associations can be defined here
		attribute_value.belongsToMany(models.product, {
			through: 'product_attribute',
			foreignKey: 'attribute_value_id',
		})
	}
	return attribute_value
}
