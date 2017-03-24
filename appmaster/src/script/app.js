require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Kind from "./component/kind.js"
import  {Router,Route,Link,hashHistory} from 'react-router'
import Footer from './component/footer'

//ReactDOM.render(
//<Footer></Footer>,
//document.getElementById('root')
//)
var HelloWorld=React.createClass({
		render:function(){
			return (
				<div className="container">
						<a href="#/Home">首页</a>
						<a href="#/Kind">分类</a>
						<a href="#/Cart">购物车</a>
						<a href="#/User">我的</a>
				</div>
			)
		}
});
ReactDOM.render(<HelloWorld/>,document.getElementById("root"));

