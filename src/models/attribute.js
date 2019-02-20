export const Attribute = (sequelize, type) => {
	return sequelize.define('attribute', {
		attribute_id: {
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
	})
}
