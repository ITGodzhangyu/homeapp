import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'
class Searchheader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	render(){
		return (
			<header className="yo-header yo-header-s">
				<p className="regret"><i className="yo-ico">&#xe502;</i><input type="text" placeholder="搜索"/></p>
				<span className="affirm">取消</span>
			</header>
		)
	}
}
export default Searchheader;