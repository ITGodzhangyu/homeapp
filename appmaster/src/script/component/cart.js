import React,{ Component } from "react"
var ReactDOM=require("react-dom");
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">购物车</div>
			</div>
		)
	}
}
export default Cart;