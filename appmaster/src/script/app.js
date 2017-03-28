require('../style/app.scss')
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Search from "./component/search.js"
import Service from "./component/service.js"
import React from 'react'
import ReactDOM from 'react-dom'
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
import Index from './component/index'
import '../style/app.scss'
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="home" component={Home}></Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="search" component={Search}></Route>
			<Route path="user" component={User}></Route>
			<Route path="service" component={Service}></Route>
		</Route>
	</Router>,
	document.getElementById("root")
)


