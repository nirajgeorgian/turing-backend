import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const Department = sequelize.define(
	'department',
	{
		department_id: {
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
				Department.hasMany(models.category)
			},
		},
	}
)
