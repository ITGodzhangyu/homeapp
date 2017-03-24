var HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
	entry:'./src/script/app.js',
	output:{
		path:__dirname +'/build',
		filename:'app_[hash].js'
	},
	devServer:{
		contentBase:'./build',
		host:'localhost',
		port:8000,
		historyApiFallback:false
	},
	module:{
		loaders:[
		  {
			test:/\.css$/,
			loader:'style-loader!css-loader'
		  },
//		  {
//			test:/\.scss$/,
//			loader:'style-loader!css-loader!sass-loader'
//		  }  //非抽离
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.ejx',
			filename:'index.html',
			title:"豆瓣电影"
		})
	]
}
