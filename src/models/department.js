export const Department = (sequelize, type) => {
	return sequelize.define(
		'department',
		{
			department_id: {
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
					Department.hasMany(models.category)
				},
			},
		}
	)
}
