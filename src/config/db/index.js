import Sequelize from 'sequelize'

/**
 * [DB Models]
 * @type {[Model]}
 * Import all Db Models to make it executable
 */
import { AttributeValue } from '../../models/attribute_value'
import { Attribute } from '../../models/attribute'
import { Category } from '../../models/category'
import { Customer } from '../../models/customer'
import { Department } from '../../models/department'
import { Product } from '../../models/product'

const DB = process.env.DB || 'ecomm_test'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASS = process.env.DB_PASS || 'DB_PASS'
const DB_DIALECT = process.env.DB_DIALECT || 'mysql'

const sequelize = new Sequelize(DB, DB_USER, DB_PASS, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	operatorsAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
})

export const AttributeValueModel = AttributeValue(sequelize, Sequelize)
export const AttributeModel = Attribute(sequelize, Sequelize)
export const CategoryModel = Category(sequelize, Sequelize)
export const CustomerModel = Customer(sequelize, Sequelize)
export const DepartmentModel = Department(sequelize, Sequelize)
export const ProductModel = Product(sequelize, Sequelize)

export default sequelize
