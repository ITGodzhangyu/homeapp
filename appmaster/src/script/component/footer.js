import React from "react"
import ReactDOM from "react-dom"
import Home from "./home.js"
import User from "./user.js"
import Cart from "./cart.js"
import Kind from "./kind.js"
import  {Router,Route,Link,hashHistory} from 'react-router'
var Footer=React.createClass({
	getInitialState:function(){
		return {
			data:[
				{"username":"我","info":"hao"},
				{"username":"他","info":"pipipi"}
			]
		}
	},
	appToDo:function(){
			this.setState({
				data:data
			})
	},
	render:function(){
		return (
			<div className="main"> 
				<footer className="footer">
					//<Router history={hashHistory}>
						<a href="/Home">首页</a>
						<a href="/Kind">分类</a>
						<a href="/Cart">购物车</a>
						<a href="/User">我的</a>
					//</Router>
				</footer>
			</div>
		)
	}
})
module.exports=Footer;