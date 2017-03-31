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
			_arr:[]
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
		       			{this.state._arr}
		       		</ul>
		       </section>
	       	</div>	
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentWillMount(){
		if(window.localStorage){
	    	var address=localStorage.getItem("address");
			var list=[]
			if(address!=null){
				address.split("#").map(function(item){
					if(item!="null"&&item!=""){
						list.push(JSON.parse(item))
					}
				})
			}
				
			this.setState({
				arr:list
			})
	 	}
	}
	componentDidMount() {
	    let title = '我的地址'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	    var _list=[]
	    this.state.arr.map(function(item,index){
	    	_list.push(<li className='Saveaddress' data={index}>
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
								<a href={'#/editaddress/'+index}><img src='/img/edit.png'/></a>
							</div>
						</li>)
	    })
	    this.setState({
	    	_arr:_list
	    })
	}    
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address)









