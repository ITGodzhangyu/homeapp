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
			<div className="newaddress">
				<div className='line'><span>收货人姓名:</span><div><input type="text" placeholder="输入收货人"/></div></div>
				<div className='line'><span>所在地区:</span><div><input type="text" placeholder="所在地区"/></div></div>
				<div className='line'><span>手机号码:</span><div><input type="text" placeholder="输入手机号"/></div></div>
				<div className='line'><span>邮政编码:</span><div><input type="text" placeholder="请输入邮政编码"/></div></div>
			</div>
		)
	}
}
export default Newaddress