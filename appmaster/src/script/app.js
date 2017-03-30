import '../style/app.scss'
import {Provider} from 'react-redux'
import { store } from "./redux/store"
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Search from "./component/search.js"
import List from "./component/list.js"
import Service from "./component/service.js"
import React from 'react'
import ReactDOM from 'react-dom'
import  {Router,Route,IndexRoute,IndexRedirect,Link,hashHistory} from 'react-router'
import Index from './component/index'
ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home"></IndexRedirect>
			<Route path="home" component={Home}></Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="search" component={Search}></Route>
			<Route path="user" component={User}></Route>
			<Route path="service" component={Service}></Route>
		</Route>
		<Route path="list" component={List}></Route>
	</Router>
	</Provider>,
	document.getElementById("root")
)


