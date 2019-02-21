'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('order_detail', {
			item_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			attributes: {
				type: Sequelize.STRING,
			},
			product_name: {
				type: Sequelize.STRING,
			},
			quantity: {
				type: Sequelize.INTEGER,
			},
			unit_cost: {
				type: Sequelize.DECIMAL(10, 2),
			},
			product_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'product',
					key: 'product_id',
				},
			},
			order_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'orders',
					key: 'order_id',
				},
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('order_detail')
	},
}
