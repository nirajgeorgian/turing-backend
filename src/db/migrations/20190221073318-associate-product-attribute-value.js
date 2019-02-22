'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
		return queryInterface.createTable('product_attribute', {
			product_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'product',
					key: 'product_id',
				},
			},
			attribute_value_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: 'attribute_value',
					key: 'attribute_value_id',
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
		return queryInterface.dropTable('product_attribute')
	},
}
