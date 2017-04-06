import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

class EditAddress extends React.Component{
	constructor(props){
		super(props)
		this.save=this.save.bind(this)
		this.state={
			arr:[],
			_arr:[]
		}
	}
	render(){
		var rr=[]
		this.state.arr.map(function(item){
			rr.push(<div className="newaddress"><div className='line'><span>收货人姓名:</span><div><input ref="name" type="text" defaultValue={item.name} placeholder="输入收货人"/></div></div>
					<div className='line'><span>所在地区:</span><div><input type="text" ref="_area" defaultValue={item._area} placeholder="所在地区"/></div></div>
					<div className='line'><span>手机号码:</span><div><input type="text" ref="phone" defaultValue={item.phone} placeholder="输入手机号"/></div></div>
					<div className='line'><span>邮政编码:</span><div><input type="text" ref="code" defaultValue={item.code} placeholder="请输入邮政编码"/></div></div></div>)
		})
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				<span className="affirm"><Link onClick={this.save}>保存</Link></span>
				</header>
				<section>
					{rr}
				</section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	save(){
		var name=this.refs.name.value
		var _area=this.refs._area.value
		var phone=this.refs.phone.value
		var code=this.refs.code.value
		if(name!="" && _area!="" && phone!="" && code!=""){
			var obj={name:name,_area:_area,phone:phone,code:code}
			this.state._arr[this.props.params.type]
			var address=localStorage.getItem("address").split("#");
			var ar=[]
			address.map(function(item){
				if(item!=""){
					ar.push(item)
				}
			})
			ar[this.props.params.type]=JSON.stringify(obj)
			var str=""
			ar.map(function(item){
				str+=item+"#"
			})
			localStorage.setItem("address",str)
			window.location.href="#/address"
		}else{
			Toast.show("请输入完整信息")
		}
	}
	componentWillMount(){
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
			arr:[list[this.props.params.type]],
			_arr:list
		})
	}
	componentDidMount() {
	    let title = '编辑地址'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	    console.log(11,this.state.arr)
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAddress)