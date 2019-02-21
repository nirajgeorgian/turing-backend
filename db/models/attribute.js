export default (sequelize, DataTypes) => {
	const attribute = sequelize.define(
		'attribute',
		{
			name: DataTypes.STRING,
		},
		{}
	)
	return attribute
}
