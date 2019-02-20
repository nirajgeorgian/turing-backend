import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const AttributeValue = sequelize.define(
	'attribute_value',
	{
		attribute_value_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			unique: true,
		},
		value: {
			type: Sequelize.STRING,
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
