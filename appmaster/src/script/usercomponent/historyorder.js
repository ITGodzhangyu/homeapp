import React,{ Component } from "react"

class Historyorder extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">历史订单</div>
			</div>
		)
	}
}
export default Historyorder;