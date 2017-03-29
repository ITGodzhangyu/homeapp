import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Myorder extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	render(){
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">我的订单</p>
				<a className="regret yo-ico">&#xe639;</a>
				</header>
				<section>
					123
				</section>
			</div>
		)
	}
	
	componentDidMount() {
	    let title = '我的订单'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Myorder)