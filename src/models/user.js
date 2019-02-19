import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const Customer = sequelize.define('customer', {
	customer_id: {
		type: Sequelize.STRING,
	},
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	},
	credit_card: {
		type: Sequelize.TEXT,
	},
	address_1: {
		type: Sequelize.STRING,
	},
	address_2: {
		type: Sequelize.STRING,
	},
	city: {
		type: Sequelize.STRING,
	},
	region: {
		type: Sequelize.STRING,
	},
	postal_code: {
		type: Sequelize.STRING,
	},
	country: {
		type: Sequelize.STRING,
	},
	shipping_region_id: {
		type: Sequelize.STRING,
	},
	day_phone: {
		type: Sequelize.STRING,
	},
	eve_phone: {
		type: Sequelize.STRING,
	},
	mob_phone: {
		type: Sequelize.STRING,
	},
})
