import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

class Setup extends React.Component{
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
	       		 	<ul>
						<li><Link >意见反馈<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link >历史订单<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link >我的收藏<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link >我的地址<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link >我的账户<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link >帮助中心<span className="yo-ico">&#xe608;</span></Link></li>
					</ul>
	       		 </section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title="设置"
	    this.props.onChange({
	      type: 'SETTITLE',
	      title:title
	    })
	}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)