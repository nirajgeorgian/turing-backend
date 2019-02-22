'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('department', {
			department_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING(100),
			},
			description: {
				type: Sequelize.STRING(1000),
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('department')
	},
}
