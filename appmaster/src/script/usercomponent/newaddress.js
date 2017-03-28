import React,{ Component } from "react"

class Newaddress extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">地址</div>
			</div>
		)
	}
}
export default Newaddress