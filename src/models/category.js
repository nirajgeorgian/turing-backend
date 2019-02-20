export const Category = (sequelize, type) => {
	return sequelize.define(
		'category',
		{
			category_id: {
				type: type.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			name: {
				type: type.STRING,
				allowNull: false,
			},
			description: {
				type: type.STRING,
			},
		},
		{
			classMethods: {
				associate: models => {
					Category.hasMany(models.product)
				},
			},
		}
	)
}
