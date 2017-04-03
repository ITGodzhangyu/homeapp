import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

class Account extends React.Component{
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
		            <span className="regret yo-ico" onClick={this.back}>&#xe639;</span>
	       		 </header>
	       		 <section>
	       		 	<div className="accountDetail">
			       		 <Link to="/account/eyuan" activeClassName="clickcolor">e元明细</Link>
			       		 <Link to="/account/yfu"   activeClassName="clickcolor">预付款明细</Link>
	       			</div>
	       			<div className="_account">
	       				{this.props.children}
	       			</div>
	       		</section>
	       	</div>	
		)
	}
	back() {
   		 window.location.href="#/user"
  	}
	componentDidMount() {
	    let title = '我的账户'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)





