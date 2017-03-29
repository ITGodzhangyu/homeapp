import React,{ Component } from "react"
import Newaddress from "../usercomponent/newaddress"
import { connect } from 'react-redux'
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
			<div >
				<header>
		          <div className="yo-header yo-header-c">
		            <h2 className="title">{this.props.value}</h2>
		            <span className="regret"><a href="#/newaddress">新建</a></span>
		          </div>
	       		 </header>
			</div>
		)
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