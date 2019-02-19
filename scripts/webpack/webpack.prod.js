const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common')

module.exports = merge(common, {
	entry: './index',
	mode: 'production',
	externals: [nodeExternals()],
})
