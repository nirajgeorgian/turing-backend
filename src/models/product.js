import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const Product = sequelize.define('product', {
	product_id: {
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
	price: {
		type: Sequelize.DECIMAL,
	},
	discounted_price: {
		type: Sequelize.DECIMAL,
	},
	image: {
		type: Sequelize.STRING,
	},
	image_2: {
		type: Sequelize.STRING,
	},
	thumbnail: {
		type: Sequelize.STRING,
	},
	display: {
		type: Sequelize.SMALLINT,
	},
})
