import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'

class Yfu extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div className="yfu">
		         <p><span>预付款余额:</span><span>0.00</span>元</p>
		         <div></div>
	       	</div>	
		)
	}
}
export default Yfu