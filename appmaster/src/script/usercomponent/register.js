import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
class Register extends React.Component{
	constructor(props){
		super(props)
		this.register=this.register.bind(this)
		this.state={
			
		}
	}
	register(){
		if(this.refs.check.checked){
			const userID=this.refs.username.value
			const password=this.refs.password.value	
			const repassword=this.refs.repassword.value	
			if(userID=='' || password==''){
				alert("请输入完整")
			}else if (password !==repassword){
				alert("两次密码输入不一致")
			}else{
				let url='http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID='+userID+'&password='+password
				fetch(url).then(response=>response.json()).
				then(res=>{
					if(res==1){
						alert("注册成功")
						window.location.href='#/user';
					}else if(res==0){
						alert("用户名重名")
					}else{
						alert("注册失败")
					}
				})
			}
		}else{
			alert("请阅读交易条款")
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
						<div className="user-register">
						<div><span className="yo-ico">&#xe61b;</span><input ref="username" type="text" placeholder="请输入手机号"/><button>获取验证码</button></div>
						<div><span className="yo-ico">&#xe621;</span><input type="text" placeholder="请输入您收到的验证码"/></div>
						<div><span className="yo-ico">&#xe615;</span><input ref="password" type="password" placeholder="请设置密码"/></div>
						<div><span className="yo-ico">&#xe615;</span><input ref="repassword" type="password" placeholder="重复密码"/></div>
						<div><input className='gift' type="text" placeholder="如有礼券请在此输入"/></div>
						<p>以活动奖励等方式获得的电子礼券的代码</p>
						<p className="tip">如果在120秒内未能收到系统发送的短信,请继续点击获取验证码</p>
						<button onClick={this.register}>注册</button>
						<h4><span><input ref="check" type="checkbox"/>已阅读并同意</span><a href="#">6688交易条款</a></h4>
					</div>
				</section>
			</div>	
		)
	}
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title = '注册'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)