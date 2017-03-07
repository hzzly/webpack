module.exports = {
	entry: './src/entry.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
			        presets: ['env']
			    }
			},
			{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
}