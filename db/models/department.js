export default (sequelize, DataTypes) => {
	const department = sequelize.define(
		'department',
		{
			department_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{}
	)
	department.associate = models => {
		// associations can be defined here
		department.hasMany(models.category, { foreignKey: 'department_id' })
	}
	return department
}
