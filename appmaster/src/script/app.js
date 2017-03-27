require('../style/app.scss')
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Kind from "./component/kind.js"
import Service from "./component/service.js"
import React from 'react'
import ReactDOM from 'react-dom'
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
import Footer from './component/footer'
import '../style/app.scss'
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Footer}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="home" component={Home}></Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="kind" component={Kind}></Route>
			<Route path="user" component={User}></Route>
			<Route path="service" component={Service}></Route>
		</Route>
	</Router>,
	document.getElementById("root")
)


