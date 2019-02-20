import crypto from 'crypto'

export const Customer = (sequelize, type) => {
	const customer = sequelize.define(
		'customer',
		{
			customer_id: {
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
			email: {
				type: type.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: type.STRING,
				allowNull: false,
			},
			credit_card: {
				type: type.TEXT,
			},
			address_1: {
				type: type.STRING,
			},
			address_2: {
				type: type.STRING,
			},
			city: {
				type: type.STRING,
			},
			region: {
				type: type.STRING,
			},
			postal_code: {
				type: type.STRING,
			},
			country: {
				type: type.STRING,
			},
			day_phone: {
				type: type.STRING,
			},
			eve_phone: {
				type: type.STRING,
			},
			mob_phone: {
				type: type.STRING,
			},
		},
		{
			hooks: {
				beforeCreate: user => {
					const salt = Buffer.from(`${process.env.HASH_SECRET}`, 'base64')
					const key = crypto.pbkdf2Sync(
						user.password,
						salt,
						100000,
						64,
						'sha512'
					)
					user.password = key.toString('hex')
				},
			},
		}
	)
	customer.prototype.verifyPassword = pwd => {
		const salt = Buffer.from(`${process.env.HASH_SECRET}`, 'base64')
		const key = crypto.pbkdf2Sync(pwd, salt, 100000, 64, 'sha512')
		return this.password === key.toString('hex')
	}
	return customer
}
