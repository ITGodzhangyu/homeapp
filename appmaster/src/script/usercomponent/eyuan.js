import React,{ Component } from "react"
import { Link, browserHistory } from 'react-router'

class Eyuan extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div className="eyuan">
		         <p><span>e元余额:</span><span>0.00</span>元</p>
		         <div></div>
	       	</div>	
		)
	}
}
export default Eyuan
