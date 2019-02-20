export const Category = (sequelize, type) => {
	const category = sequelize.define('category', {
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
	})
	category.associate = models => {
		category.hasMany(models.product)
	}
	return category
}
