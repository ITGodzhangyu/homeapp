import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'
class Userheader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	render(){
		return (
			<header className="yo-header yo-header-c">
				<p className="title">我的</p>
				<span className="affirm"><Link to='/setup' className='yo-ico'>&#xe62a;</Link></span>
			</header>
		)
	}
}
export default Userheader;