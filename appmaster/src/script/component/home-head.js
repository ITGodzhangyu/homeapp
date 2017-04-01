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
			<header className="yo-header yo-header-h">
				<h2 className="title" onClick={this.click}><img src="/img/search.png"/></h2>
				<span className="regret"><img className="img-left" src="/img/logo.png"/></span>
				<span className="affirm"><a href="#/search"><img src="/img/Catalog.png"/></a></span>
			</header>
		)
	}
}
export default Homeheader;