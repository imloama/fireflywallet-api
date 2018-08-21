/* globals process */

var buble = require('rollup-plugin-buble');
var uglify = require('rollup-plugin-uglify');
var nodeResolve = require('rollup-plugin-node-resolve');

var environment = process.env.ENV || 'development';
var isDevelopmentEnv = (environment === 'development');

module.exports = [
	{
		input: 'lib/index.js',
		name: 'FireFlyWallet',
		sourceMap: false,
		output: {
			format: 'cjs',
			file: 'dist/fireflywallet.js',
		},
		plugins: [
			nodeResolve({ jsnext: true, main: true }),
			buble(),
			!isDevelopmentEnv && uglify({ output: { inline_script: true } }),
		],
	},
];
