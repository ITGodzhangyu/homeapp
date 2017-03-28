import React,{ Component } from "react"

class Account extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">账户</div>
			</div>
		)
	}
}
export default Account;