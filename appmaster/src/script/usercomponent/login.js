import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'

class Login extends React.Component{
	constructor(props){
		super(props)
		this.login = this.login.bind(this);
	}
	login(){
		const userID=this.refs.username.value
		const password=this.refs.password.value	
		if(userID=='' || password==''){
			alert("用户名或密码错误")
		}
		let url='http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID='+userID+'&password='+password
		fetch(url).then(response=>response.json()).
		then(res=>{
			if(res instanceof Object){
				window.location.href='#/user';
				localStorage.setItem("userID",userID)
			}else{
				alert("用户名或密码错误")
			}
		})
	}
	render(){
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				</header>
				<section>
					<div className='user-login'>
						<div className='login-username'><span className='user yo-ico'>&#xe61b;</span><input 	ref="username" type="text" placeholder='请输入手机号/邮箱'/></div>
						<div className='login-password'><span className="yo-ico">&#xe615;</span><input ref="password" type="password" placeholder='请输入密码'/></div>
						<div className='tab'><span className="toRegister"><a href='#/register'>立即注册</a></span><button onClick={this.login}>登陆</button></div>
						<p><a href="#/forget">忘记密码</a></p>
						<h5>第三方登陆账号快速登陆</h5>
						<div className="weibo">
							<a href="#"><img src="/img/sina_1.jpg"/></a>
						</div>
					</div>
				</section>
			</div>
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title = '登陆'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


