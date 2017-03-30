import React,{ Component } from "react"
import {Link} from "react-router"

import Address from "../usercomponent/address"
import Help from "../usercomponent/help"
import Historyorder from "../usercomponent/historyorder"
import Account from "../usercomponent/myaccount"
import Myorder from "../usercomponent/myorder"
import Collect from "../usercomponent/collect"
import Login from "../usercomponent/login"
import Register from "../usercomponent/register"


var ReactDOM=require("react-dom");
class User extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	render(){
		return(
			<div className="user-content">
				<div className="user-banner">
					<div className="user-box">
						{this.state.arr}
					</div>
				</div>
				<div className="user-list">
					<ul>
						<li><Link to="/myorder"><img src="/img/myOrder.png"/>我的订单<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link to="/history"><img src="/img/myHistoryOrder.png"/>历史订单<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link to="/collect"><img src="/img/myConcern.png"/>我的收藏<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link to="/address"><img src="/img/myAddress.png"/>我的地址<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link to="/account"><img src="/img/myAccount.png"/>我的账户<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link to="/help"><img src="/img/helpCenter.png"/>帮助中心<span className="yo-ico">&#xe608;</span></Link></li>
					</ul>
				</div>
				
			</div>
		)
	}
	componentDidMount(){
		var _arr=[];
		if(localStorage.getItem("userID")){
			var username=localStorage.getItem("userID");
			_arr.push(<div><p>{username}</p></div>)
		}else{
			_arr.push(<div><p>欢迎来到6688</p><div className="box"><Link to="/login">登陆 / 注册</Link></div></div>)
		}
		this.setState({
			arr:_arr
		})
	}
}
export default User;