import React,{ Component } from "react"
var ReactDOM=require("react-dom");
class Kind extends React.Component{
	constructor(props){
			super(props)
			this.state={
				title:"分类"
			}
	}
	render(){
		return (
			<div>
				<div className="hh">分类</div>
			</div>
		)
	}
}
module.exports=Kind;