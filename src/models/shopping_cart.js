export const ShoppingCart = (sequelize, type) => {
	return sequelize.define('shopping_cart', {
		item_id: {
			type: type.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			unique: true,
		},
		cart_id: {
			type: type.CHAR,
			allowNull: false,
		},
		quantity: {
			type: type.INTEGER,
		},
		// buy_now: {
		// 	type: type.
		// },
		// added_on: {
		// 	type: type.
		// }
	})
}
