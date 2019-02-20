import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const Category = sequelize.define(
	'category',
	{
		category_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			unique: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
		},
	},
	{
		classMethods: {
			associate: models => {
				Category.hasMany(models.product)
			},
		},
	}
)
