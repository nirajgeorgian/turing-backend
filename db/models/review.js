'use strict'
module.exports = (sequelize, DataTypes) => {
	const review = sequelize.define(
		'review',
		{
			review: DataTypes.TEXT,
			rating: DataTypes.INTEGER,
			created_on: DataTypes.DATE,
		},
		{}
	)
	review.associate = function(models) {
		// associations can be defined here
		review.belongsTo(models.customer)
	}
	return review
}
