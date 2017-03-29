import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
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
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				</header>
				<section>
					123
				</section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
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