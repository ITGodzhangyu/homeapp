import React,{ Component } from "react"
var ReactDOM=require("react-dom");
class User extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"用户"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">我的</div>
			</div>
		)
	}
}
export default User;