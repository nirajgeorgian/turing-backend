import bcrypt from 'bcrypt'

export default (sequelize, DataTypes) => {
	const customer = sequelize.define(
		'customer',
		{
			customer_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			credit_card: DataTypes.TEXT,
			address_1: DataTypes.STRING,
			address_2: DataTypes.STRING,
			city: DataTypes.STRING,
			region: DataTypes.STRING,
			postal_code: DataTypes.STRING,
			country: DataTypes.STRING,
			day_phone: DataTypes.STRING,
			eve_phone: DataTypes.STRING,
			mob_phone: DataTypes.STRING,
		},
		{
			hooks: {
				beforeCreate: function(customer) {
					customer.password = bcrypt.hashSync(
						customer.password,
						bcrypt.genSaltSync(10),
						null
					)
				},
			},
		}
	)

	customer.associate = models => {
		customer.belongsTo(models.shipping_region, {
			foreignKey: 'shipping_region_id',
		})
		customer.hasMany(models.shopping_cart, { foreignKey: 'customer_id' })
	}

	customer.prototype.validPassword = function(password) {
		return bcrypt.compareSync(password, this.password)
	}

	return customer
}
