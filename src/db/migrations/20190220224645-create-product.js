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
				type: Sequelize.STRING(100),
			},
			description: {
				type: Sequelize.STRING(1000),
			},
			price: {
				type: Sequelize.DECIMAL(10, 2),
			},
			discounted_price: {
				type: Sequelize.DECIMAL(10, 2),
			},
			image: {
				type: Sequelize.STRING(150),
			},
			image_2: {
				type: Sequelize.STRING(150),
			},
			thumbnail: {
				type: Sequelize.STRING(150),
			},
			display: {
				type: Sequelize.SMALLINT(6),
			},
			// category_id: {
			// 	type: Sequelize.INTEGER,
			// 	references: {
			// 		model: 'category',
			// 		key: 'category_id',
			// 	},
			// },
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('product')
	},
}
