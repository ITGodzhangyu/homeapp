import React,{ Component } from "react"
import Newaddress from "../usercomponent/newaddress"
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Address extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[],
			list:[]
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
		       		<ul className='user-address'>
		       			{this.state.list}
		       		</ul>
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
	    if(window.localStorage){
	    	var obj=JSON.parse(localStorage.getItem("address"))
	    	this.setState({
	    		arr:this.state.arr.push(obj)
	    	})
	    	var list=[]
			this.state.arr.map(function(item){
			list.push(<li className='Saveaddress'>
		       				<div className='addressinfo'>
		       					<div className='addressDetail'>
		       						<span className='address_name'>{item.name}</span>
		       						<span className='phonenumber'>{item.phone}</span>
		       						<div className="local">{item._area}</div>
		       					</div>
		       					<div className='choosen'>
		       						<span className="ischoosen">
		       							<img src="/img/Chosen.png"/>
		       						</span>
		       					</div>
		       				</div>
		       				<div className='reviseAddress'>
		       					<a href="#/editaddress"><img src='/img/edit.png'/></a>
		       				</div>
		       			</li>)
			})
	    }
		this.setState({
	    		list:list
	    	})
	    
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address)