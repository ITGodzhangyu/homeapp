import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
import Toast from "../../component_dev/toast/src"
class Newaddress extends React.Component{
	constructor(props){
		super(props)
		this.save=this.save.bind(this)
		this.state={
			data:null
		}
	}
	render(){
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				<span className="affirm"><a onClick={this.save}>保存</a></span>
				</header>
				<section>
					<div className="newaddress">
						<div className='line'><span>收货人姓名:</span><div><input ref="name" type="text" placeholder="输入收货人"/></div></div>
						<div className='line'><span>所在地区:</span><div><input ref="area" type="text" placeholder="所在地区"/></div></div>
						<div className='line'><span>手机号码:</span><div><input ref="phone" type="text" placeholder="输入手机号"/></div></div>
						<div className='line'><span>邮政编码:</span><div><input ref="code" type="text" placeholder="请输入邮政编码"/></div></div>
					</div>
				</section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	save(){
		var name=this.refs.name.value
		var _area=this.refs.area.value
		var phone=this.refs.phone.value
		var code=this.refs.code.value
		if(name!="" && _area!="" && phone!="" && code!=""){
			var obj={name:name,_area:_area,phone:phone,code:code}
			this.setState({
				data:obj
			})
			window.location.href="#/address"
		}else{
			Toast.show("请填写完整")
		}
	}
	componentDidMount() {
	    let title = '新建地址'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    }) 
	 }
	componentDidUpdate(){
		if(localStorage.getItem("address")){
			var address=localStorage.getItem("address");
			if(this.state.data!=null){
				address+=JSON.stringify(this.state.data)+"#";
				localStorage.setItem("address",address);
			}	
		}else{
			var address=localStorage.getItem("address");
			if(this.state.data!=null){
				address=JSON.stringify(this.state.data)+"#";
				localStorage.setItem("address",address);
			}	
		}
	}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newaddress)