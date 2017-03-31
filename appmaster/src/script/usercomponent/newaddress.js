import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

class Newaddress extends React.Component{
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
					
				</section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title = '新建地址'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newaddress)