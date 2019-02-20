import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const Attribute = sequelize.define('attribute', {
	attribute_id: {
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
})
