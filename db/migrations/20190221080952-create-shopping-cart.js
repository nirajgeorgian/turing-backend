'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('shopping_cart', {
			item_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cart_id: {
				type: Sequelize.CHAR,
			},
			attributes: {
				type: Sequelize.STRING,
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			buy_now: {
				type: Sequelize.BOOLEAN,
			},
			added_on: {
				type: Sequelize.DATE,
			},
			product_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'product',
					key: 'product_id',
				},
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('shopping_cart')
	},
}
