'use strict'

const crypto = require('crypto')

module.exports = (sequelize, DataTypes) => {
	const customer = sequelize.define(
		'customer',
		{
			customer_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			credit_card: {
				type: DataTypes.TEXT,
			},
			address_1: {
				type: DataTypes.STRING,
			},
			address_2: {
				type: DataTypes.STRING,
			},
			city: {
				type: DataTypes.STRING,
			},
			region: {
				type: DataTypes.STRING,
			},
			postal_code: {
				type: DataTypes.STRING,
			},
			country: {
				type: DataTypes.STRING,
			},
			day_phone: {
				type: DataTypes.STRING,
			},
			eve_phone: {
				type: DataTypes.STRING,
			},
			mob_phone: {
				type: DataTypes.STRING,
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

	customer.protoDataTypes.verifyPassword = pwd => {
		const salt = Buffer.from(`${process.env.HASH_SECRET}`, 'base64')
		const key = crypto.pbkdf2Sync(pwd, salt, 100000, 64, 'sha512')
		return this.password === key.toString('hex')
	}

	return customer
}
