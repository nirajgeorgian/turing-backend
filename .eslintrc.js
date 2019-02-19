module.exports = {
	env: {
		es6: true,
		node: true,
	},
	plugins: ['prettier'],
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
	},
}
