'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('audit', {
			audit_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			created_on: {
				type: Sequelize.DATE,
			},
			message: {
				type: Sequelize.TEXT,
			},
			code: {
				type: Sequelize.INTEGER,
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
		return queryInterface.dropTable('audit')
	},
}
