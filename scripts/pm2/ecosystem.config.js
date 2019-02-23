module.exports = {
	apps: [
		{
			name: 'backend-api',
			script: './index.js',
			exec_mode: 'fork',
			exec_interpreter: './node_modules/.bin/babel-node',
			instances: 1,
			merge_logs: true,
			env: {
				PORT: 8080,
				MONITORING: false,
				NODE_ENV: 'development',
			},
			env_production: {
				PORT: 8080,
				MONITORING: false,
				NODE_ENV: 'production',
			},
		},
	],
}
