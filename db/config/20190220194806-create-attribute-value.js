'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('attribute_value', {
			attribute_value_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			value: {
				type: Sequelize.STRING,
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('attribute_values')
	},
}
