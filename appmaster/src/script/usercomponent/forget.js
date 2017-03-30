import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
class Forget extends React.Component{
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
					<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				</header>
				<section>
						<div className="user-register user-forget">
							<div><span className="yo-ico">&#xe61b;</span><input type="text" placeholder="请输入手机号"/><button>获取验证码</button></div>
							<div><span className="yo-ico">&#xe621;</span><input type="text" placeholder="请输入您收到的验证码"/></div>
							<h2 className="blank"></h2>
							<div><span className="yo-ico">&#xe615;</span><input type="password" placeholder="请设置密码"/></div>
							<div><span className="yo-ico">&#xe615;</span><input type="password" placeholder="重复密码"/></div>
							<p className="tip">如果在120秒内未能收到系统发送的短信,请继续点击获取验证码</p>
							<button>注册</button>
						</div>
				</section>
			</div>	
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title = '找回密码'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forget)