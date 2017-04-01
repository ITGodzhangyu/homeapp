import React,{ Component } from "react"
var ReactDOM=require("react-dom");
class Service extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"客服"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">客服</div>
			</div>
		)
	}
}
export default Service;