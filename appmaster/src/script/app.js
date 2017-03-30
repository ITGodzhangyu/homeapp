require('../style/app.scss')
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Search from "./component/search.js"
import Service from "./component/service.js"
import Address from "./usercomponent/address.js"
import Help from "./usercomponent/help.js"
import Historyorder from "./usercomponent/historyorder.js"
import Account from "./usercomponent/myaccount.js"
import Myorder from "./usercomponent/myorder.js"
import Collect from "./usercomponent/collect.js"
import Login from "./usercomponent/login.js"
import Register from "./usercomponent/register.js"
import Newaddress from "./usercomponent/newaddress.js"
import Forget from "./usercomponent/forget.js"
import EditAddress from "./usercomponent/editAddress.js"

import { store } from './redux/store'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
import Index from './component/index'
import '../style/app.scss'
ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="home" component={Home}></Route>
			<Route path="cart" component={Cart}></Route>
			<Route path="search" component={Search}></Route>
			<Route path="user" component={User}></Route>
			<Route path="service" component={Service}></Route>
		</Route>
		<Route path="/myorder" component={Myorder}/>
		<Route path="/collect" component={Collect}/>
		<Route path="/account" component={Account}/>
		<Route path="/history" component={Historyorder}/>
		<Route path="/help" component={Help}/>
		<Route path="/address" component={Address}/>
		<Route path="/login" component={Login}/>
		<Route path="/register" component={Register}/>
		<Route path="/newaddress" component={Newaddress}/>
		<Route path="/forget" component={Forget}/>
		<Route path="/editaddress" component={EditAddress}/>
	</Router>
	</Provider>,
	document.getElementById("root")
)


