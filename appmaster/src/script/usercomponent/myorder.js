import React,{ Component } from "react"

class Myorder extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">我的订单</div>
			</div>
		)
	}
}
export default Myorder;