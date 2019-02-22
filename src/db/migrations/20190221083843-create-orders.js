'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'orders',
			{
				order_id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				total_amount: {
					type: Sequelize.DECIMAL(10, 2),
				},
				created_on: {
					type: Sequelize.DATE,
				},
				shipped_on: {
					type: Sequelize.DATE,
				},
				status: {
					type: Sequelize.INTEGER,
					default: 0,
				},
				comments: {
					type: Sequelize.STRING,
				},
				auth_code: {
					type: Sequelize.STRING(50),
				},
				reference: {
					type: Sequelize.STRING(50),
				},
				tax_id: {
					type: Sequelize.INTEGER,
					references: {
						model: 'tax',
						key: 'tax_id',
					},
				},
				shipping_id: {
					type: Sequelize.INTEGER,
					references: {
						model: 'shipping',
						key: 'shipping_id',
					},
				},
			},
			{}
		)
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('orders')
	},
}
