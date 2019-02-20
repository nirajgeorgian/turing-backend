'use strict'

module.exports = (sequelize, DataTypes) => {
	const attribute_value = sequelize.define(
		'attribute_value',
		{
			attribute_value_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			value: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{}
	)
	attribute_value.associate = function(models) {
		// associations can be defined here
		attribute_value.belongsTo(models.attribute)
	}
	return attribute_value
}
