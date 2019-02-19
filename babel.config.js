module.exports = {
	presets: ['@babel/preset-env'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					test: './test',
				},
			},
		],
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-async-generators',
		'@babel/plugin-syntax-object-rest-spread',
		'@babel/plugin-transform-regenerator',
		'@babel/plugin-transform-runtime',
	],
}
