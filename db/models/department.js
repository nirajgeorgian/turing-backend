export default (sequelize, DataTypes) => {
	const department = sequelize.define(
		'department',
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{}
	)
	department.associate = models => {
		// associations can be defined here
		department.hasMany(models.category)
	}
	return department
}
