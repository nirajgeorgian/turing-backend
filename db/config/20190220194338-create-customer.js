'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			'customer',
			{
				customer_id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					type: Sequelize.STRING,
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true,
					validate: {
						isEmail: true,
					},
				},
				password: {
					type: Sequelize.STRING,
					allowNull: false,
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
				day_phone: {
					type: Sequelize.STRING,
				},
				eve_phone: {
					type: Sequelize.STRING,
				},
				mob_phone: {
					type: Sequelize.STRING,
				},
			},
			{}
		)
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('customers')
	},
}
