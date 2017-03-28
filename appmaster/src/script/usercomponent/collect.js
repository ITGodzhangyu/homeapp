import React,{ Component } from "react"

class Collect extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div>
				<div className="hh">收藏</div>
			</div>
		)
	}
}
export default Collect