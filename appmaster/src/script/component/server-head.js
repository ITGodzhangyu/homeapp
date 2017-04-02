import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'
class Serverheader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	back() {
   		 browserHistory.goBack()
  	}
	render(){
		return (
			<header className="yo-header yo-header-c">
				<p className="title">在线客服</p>
				<span className="regret yo-ico" onClick={this.back}>&#xe639;</span>
			</header>
		)
	}
}
export default Serverheader;