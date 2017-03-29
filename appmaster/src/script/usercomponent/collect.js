import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Collect extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div className="main">
		          <header className="yo-header yo-header-c">
		            <p className="title">{this.props.value}</p>
		            <span className="regret yo-ico">&#xe639;</span>
	       		 </header>
	       		 <section></section>
			</div>
		)
	}
	componentDidMount() {
	    let title = '我的收藏'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collect)