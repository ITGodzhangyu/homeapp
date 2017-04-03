import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
import Toast from "../../component_dev/toast/src"


class Suggestion extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单"
		}
	}
	render(){
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				<span className="affirm"><a className="tijiao" onClick={this.sub}>提交</a></span>
				</header>
				<section>
	       		 	<div className="suggestion">
	       		 		<div className="left">
	       		 			<span>反馈意见:</span>
	       		 		</div>
	       		 		<div className="right">
	       		 			<textarea placeholder="您的宝贵意见和建议是我们不断进步的动力" className="text"></textarea>
	       		 		</div>
	       		 	</div>
	       		 	<div className="lianxi"><b>联系方式:</b><input className="xinxi" placeholder="您的姓名、手机号、邮箱等"/></div>
	       			<p className="wenxin">温馨提示:如果出现订票、商品、售货等方面的问题请拨打客服电话400456987。我们的客服会在第一时间为您服务,感谢您对6688网的支持</p>
	       		</section>
			</div>
		)
	}
	back() {
   		 window.location.href="#/setup"
  	}
	sub(){
		setTimeout(function(){Toast.show("反馈成功",2000)},2000)
		setTimeout(function(){window.location.href="#/setup"},4000)
	}
	componentDidMount() {
	    let title = '我的订单'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestion)