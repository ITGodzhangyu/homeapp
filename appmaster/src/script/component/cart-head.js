import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'
class Carheader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	render(){
		return (
			<header className="yo-header yo-header-cart">
				<Link to="/home">
						<div className="cart_gohome">
							<i className="yo-ico">&#xe611;</i>
						</div>
				</Link>
				<p className="title">购物车</p>
			</header>
		)
	}
}
export default Carheader;