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
				type: Sequelize.STRING(100),
			},
			attribute_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'attribute',
					key: 'attribute_id',
				},
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('attribute_value')
	},
}
