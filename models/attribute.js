'use strict'

module.exports = (sequelize, DataTypes) => {
	const attribute = sequelize.define(
		'attribute',
		{
			attribute_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true,
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
