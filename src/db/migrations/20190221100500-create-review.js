'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('review', {
			review_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			review: {
				type: Sequelize.TEXT,
			},
			rating: {
				type: Sequelize.INTEGER,
			},
			created_on: {
				type: Sequelize.DATE,
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
		return queryInterface.dropTable('review')
	},
}
