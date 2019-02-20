export const ProductCategory = (sequelize, type) => {
	return sequelize.define('product_category', {
		product_id: {
			type: type.INTEGER,
			primaryKey: true,
		},
		category_id: {
			type: type.INTEGER,
			primaryKey: true,
		},
	})
}
