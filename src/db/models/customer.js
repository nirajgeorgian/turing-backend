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
			name: DataTypes.STRING(50),
			email: DataTypes.STRING(100),
			password: DataTypes.STRING,
			credit_card: DataTypes.TEXT,
			address_1: DataTypes.STRING(100),
			address_2: DataTypes.STRING(100),
			city: DataTypes.STRING(100),
			region: DataTypes.STRING(100),
			postal_code: DataTypes.STRING(100),
			country: DataTypes.STRING(100),
			day_phone: DataTypes.STRING(100),
			eve_phone: DataTypes.STRING(100),
			mob_phone: DataTypes.STRING(100),
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
