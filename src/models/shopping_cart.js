import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const ShoppingCart = sequelize.define('shopping_cart', {
	item_id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
		unique: true,
	},
	cart_id: {
		type: Sequelize.CHAR,
		allowNull: false,
	},
	quantity: {
		type: Sequelize.INTEGER,
	},
	// buy_now: {
	// 	type: Sequelize.
	// },
	// added_on: {
	// 	type: Sequelize.
	// }
})
