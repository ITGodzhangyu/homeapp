import '../style/app.scss'
import {Provider} from 'react-redux'
import { store } from "./redux/store"
import Home from "./component/home.js"
import User from "./component/user.js"
import Cart from "./component/cart.js"
import Search from "./component/search.js"
import List from "./component/list.js"
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
import Userheader from "./component/user-head"
import Setup from "./usercomponent/setup.js"
import Suggestion from "./usercomponent/suggestion.js"
import Homeheader from './component/home-head' 
import Searchheader from './component/search-head' 
import Cartheader from './component/cart-head' 
import Serverheader from './component/server-head'


import React from 'react'
import ReactDOM from 'react-dom'
import  {Router,Route,IndexRoute,IndexRedirect,Link,hashHistory} from 'react-router'
import Index from './component/index'
ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home"></IndexRedirect>
			<Route path="home" com={<Homeheader/>} component={Home}></Route>
			<Route path="cart" com={<Cartheader/>} component={Cart}></Route>
			<Route path="search" com={<Searchheader/>} component={Search}></Route>
			<Route path="user" com={<Userheader/>} component={User}></Route>
			<Route path="service" com={<Serverheader/>} component={Service}></Route>
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
		<Route path="/editaddress/:type" component={EditAddress}/>
		<Route path="/list" component={List}></Route>
		<Route path="/setup" component={Setup}></Route>
		<Route path="/suggestion" component={Suggestion}></Route>
	</Router>
	</Provider>,
	document.getElementById("root")
)


