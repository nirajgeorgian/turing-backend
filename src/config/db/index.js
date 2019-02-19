import Sequelize from 'sequelize'

const DB = process.env.DB || 'ecomm_test'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASS = process.env.DB_PASS || 'DB_PASS'
const DB_DIALECT = process.env.DB_DIALECT || 'mysql'

const sequelize = new Sequelize(DB, DB_USER, DB_PASS, {
	host: 'localhost',
	dialect: DB_DIALECT,
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})

export default sequelize
