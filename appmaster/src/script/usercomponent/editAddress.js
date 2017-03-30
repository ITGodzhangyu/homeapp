import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

class EditAddress extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				<span className="affirm"><Link to='/address'>保存</Link></span>
				</header>
				<section>
					<div className="newaddress">
						<div className='line'><span>收货人姓名:</span><div><input type="text" placeholder="输入收货人"/></div></div>
						<div className='line'><span>所在地区:</span><div><input type="text" placeholder="所在地区"/></div></div>
						<div className='line'><span>手机号码:</span><div><input type="text" placeholder="输入手机号"/></div></div>
						<div className='line'><span>邮政编码:</span><div><input type="text" placeholder="请输入邮政编码"/></div></div>
					</div>
				</section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title = '编辑地址'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAddress)