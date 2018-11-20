// package.json の設定。
// "start": "webpack-dev-server --mode development",
// "dev": "webpack --mode development",
// "build": "webpack --mode development"

// 「--mode」オプションで指定したモードによってバンドルの仕方が変わる
// development: 開発用
// production: minify
// start：ローカルサーバ立ち上げ（開発用）
// dev：開発用バンドル
// build：納品用バンドル

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
	// 【JavaScript】バンドル設定ですよ。
	{
		// メインとなるJavaScriptファイル（エントリーポイント）
		// 「entry」を指定しなければ => src/index.js
		entry: __dirname + '/assets/scripts/index.js',

		// 「output」を指定しなければ => dist/main.js
		output: {
			path: __dirname + '/assets/scripts/',
			filename: 'bundle.js',
			// webpack-dev-server にてバンドルした「bundle.js」の出力先。
			// ローカルサーバのルートパス指定で大丈夫。
			// ちなみに、ここでバンドルした「bundle.js」は実際には保存されない。
			// 保存したけりゃ「npm run dev」の開発用バンドル使ってちょ。
			// メモリ上で生成してメモリ上で使う。らしい。
			publicPath: '/assets/scripts/',
		},

		// ローカルサーバ設定
		devServer: {
			contentBase: __dirname,
			open: true,
			inline: true,
			watchContentBase: true,
			historyApiFallback: true,
		},

		module: {
			rules: [
				{
					test: /\.vue$/,
					use: [
						{
							loader: 'vue-loader',
						},
					],
				},
				{
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: [
									'@babel/preset-env',
								],
							},
						},
					],
				},
			],
		},
		resolve: {
			extensions: ['.js', '.vue'],
			modules: [
				'node_modules',
			],
			alias: {
				vue: 'vue/dist/vue.common.js',
			},
		},
		plugins: [
			new VueLoaderPlugin(),
		],
	},


	// 【SASS、CSS】バンドル設定ですよ。
	{
		// まずは、元になるscssファイルね。
		entry: {
			style: __dirname + '/assets/sass/core.scss',
		},

		// 出力先の設定。
		output: {
			filename: 'core.css',
			path: __dirname + '/assets/styles/',
			filename: 'core.css',
			publicPath: '/assets/styles/',
		},

		module: {
			rules: [
				{
					test: /\.scss$/,

					// これについては良く分かっておりません。助けて。
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ['css-loader?-url&sourseMap', 'sass-loader'],
					}),
				},
			],
		},

		// 初期状態では、jsファイル内にcssの内容もバンドルされちゃうので
		// プラグインを使用して、「core.css」ってファイルを作ります。
		plugins: [
			new ExtractTextPlugin('core.css'),
		],
	},
]