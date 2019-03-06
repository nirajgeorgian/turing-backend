export default (sequelize, DataTypes) => {
	const attribute = sequelize.define(
		'attribute',
		{
			attribute_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: DataTypes.STRING(100),
		},
		{}
	)
	return attribute
}
