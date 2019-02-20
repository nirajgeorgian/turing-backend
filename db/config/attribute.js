'use strict'

module.exports = (sequelize, DataTypes) => {
	const attribute = sequelize.define(
		'attribute',
		{
			attribute_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{}
	)
	return attribute
}
