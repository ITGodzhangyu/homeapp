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
				<p className="title">购物车</p>
				<span className="affirm">删除</span>
			</header>
		)
	}
}
export default Carheader;