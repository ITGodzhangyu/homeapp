import React,{ Component } from "react"
import Newaddress from "../usercomponent/newaddress"
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Address extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"新建地址"
		}
	}
	render(){
		return (
			<div className="main">
				<header className="yo-header yo-header-c">
		            <p className="title">{this.props.value}</p>
		            <span className="regret yo-ico" onClick={this.back}>&#xe639;</span>
		            <span className="affirm"><Link to='/newaddress'>新建</Link></span>
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
	    let title = '我的地址'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address)