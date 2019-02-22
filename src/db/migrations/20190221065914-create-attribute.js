'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('attribute', {
			attribute_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING(100),
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('attribute')
	},
}
