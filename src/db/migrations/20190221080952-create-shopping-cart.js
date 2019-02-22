'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('shopping_cart', {
			cart_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			attribute: {
				type: Sequelize.STRING(1000),
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
			customer_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'customer',
					key: 'customer_id',
				},
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('shopping_cart')
	},
}
