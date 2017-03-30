import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

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
		            <span className="regret yo-ico" onClick={this.back}>&#xe639;</span>
	       		 </header>
	       		 <section>
	       		 	<ul className='my-concern'>
	       		 		<li className="concern-list">
	       		 			<div className='goodsimg'>
	       		 				<img />
	       		 			</div>
	       		 			<div className="goodsdetail">
	       		 				<span className='goodsname'>121313</span>
	       		 				<span className="goodsprice">13131</span>
	       		 			</div>
	       		 		</li>
	       		 	</ul>
	       		 </section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
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