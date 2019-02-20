'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('product', {
			product_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.DECIMAL,
			},
			discounted_price: {
				type: Sequelize.DECIMAL,
			},
			image: {
				type: Sequelize.STRING,
			},
			image_2: {
				type: Sequelize.STRING,
			},
			thumbnail: {
				type: Sequelize.STRING,
			},
			display: {
				type: Sequelize.SMALLINT,
			},
			category_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'category',
					key: 'category_id',
				},
			},
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('product')
	},
}
