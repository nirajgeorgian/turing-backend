export const AttributeValue = (sequelize, type) => {
	return sequelize.define(
		'attribute_value',
		{
			attribute_value_id: {
				type: type.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			value: {
				type: type.STRING,
				allowNull: false,
			},
		},
		{
			classMethods: {
				associate: models => {
					AttributeValue.belongsTo(models.attribute)
				},
			},
		}
	)
}
