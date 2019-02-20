import crypto from 'crypto'
import Sequelize from 'sequelize'
import { sequelize } from '../config/db'

export const Customer = sequelize.define(
	'customer',
	{
		customer_id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
			unique: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		credit_card: {
			type: Sequelize.TEXT,
		},
		address_1: {
			type: Sequelize.STRING,
		},
		address_2: {
			type: Sequelize.STRING,
		},
		city: {
			type: Sequelize.STRING,
		},
		region: {
			type: Sequelize.STRING,
		},
		postal_code: {
			type: Sequelize.STRING,
		},
		country: {
			type: Sequelize.STRING,
		},
		day_phone: {
			type: Sequelize.STRING,
		},
		eve_phone: {
			type: Sequelize.STRING,
		},
		mob_phone: {
			type: Sequelize.STRING,
		},
	},
	{
		classMethods: {
			associate: () => {
				// Add relation modeles
			},
		},
		instanceMethods: {
			verifyPassword: pwd => {
				const salt = Buffer.from(`${process.env.HASH_SECRET}`, 'base64')
				const key = crypto.pbkdf2Sync(pwd, salt, 100000, 64, 'sha512')
				return this.password === key.toString('hex')
			},
		},
		hooks: {
			beforeCreate: user => {
				const salt = Buffer.from(`${process.env.HASH_SECRET}`, 'base64')
				const key = crypto.pbkdf2Sync(user.password, salt, 100000, 64, 'sha512')
				user.password = key.toString('hex')
			},
		},
	}
)
