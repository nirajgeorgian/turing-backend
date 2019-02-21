export default (sequelize, DataTypes) => {
	const review = sequelize.define(
		'review',
		{
			review_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			review: DataTypes.TEXT,
			rating: DataTypes.INTEGER,
			created_on: DataTypes.DATE,
		},
		{}
	)
	review.associate = models => {
		// associations can be defined here
		review.belongsTo(models.customer, { foreignKey: 'customer_id' })
	}
	return review
}
