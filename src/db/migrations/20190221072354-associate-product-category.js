'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return queryInterface.createTable('product_category', {
			product_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'product',
					key: 'product_id',
				},
			},
			category_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'category',
					key: 'category_id',
				},
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
		return queryInterface.dropTable('product_category')
	},
}
