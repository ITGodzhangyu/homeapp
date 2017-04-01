require('../style/app.scss')
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Search from "./component/search.js"
import Service from "./component/service.js"
import Listkind from './component/list.js'
import Detail from './component/detail.js'
import React from 'react'
import ReactDOM from 'react-dom'
import  {Router,Route,IndexRoute,IndexRedirect,Link,hashHistory} from 'react-router'
import Index from './component/index'
import '../style/app.scss'
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home"></IndexRedirect>
			<Route path="home" component={Home}></Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="search" component={Search}></Route>
			<Route path="user" component={User}></Route>
			<Route path="service" component={Service}></Route>	
		</Route>
		<Route path="/list" component={Listkind}></Route>
		<Route path="/detail" component={Detail}></Route>
	</Router>,
	document.getElementById("root")
)


