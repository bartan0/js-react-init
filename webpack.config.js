const { resolve } = require('path')


const { MODE = 'development' } = process.env
const IS_DEV = MODE == 'development'

const DIR_ROOT = __dirname
const DIR_SRC = 'src'
const DIR_BUILD = 'build'

module.exports = {
	context: resolve(DIR_ROOT, DIR_SRC),
	entry: './index.js',
	mode: MODE,

	output: {
		filename: 'main.js',
		path: resolve(DIR_ROOT, DIR_BUILD)
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{ loader: 'babel-loader', options: {
						presets: [
							'@babel/preset-react',
							[ '@babel/preset-env', {
								targets: '> 1%, not dead'
							} ]
						]
					} }
				]
			}, {
				test: /index.html$/,
				use: [
					{ loader: 'file-loader', options: {
						name: 'index.html'
					} },
					'extract-loader',
					'html-loader',
				]
			}, {
				test: /index.css$/,
				use: [
					{ loader: 'file-loader', options: {
						name: 'main.css'
					} },
					'extract-loader',
					'css-loader',
				]
			}
		]
	}
}
