import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'
class Homeheader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	click(){
		window.location.href="#/search"
	}
	render(){
		return (
			<div className="header">
				<img className="index-logo" src="http://m.6688.com/img/newIndex/201607/logo.png"/>
				<Link className="index-search" to="/search">
			
					<i className="yo-ico">&#xe502;</i>						
				
				</Link>
				<i className="yo-ico">&#xe82e;</i>
			</div>
		)
	}
}
export default Homeheader;