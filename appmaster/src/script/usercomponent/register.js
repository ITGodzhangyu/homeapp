import React,{ Component } from "react"

class Register extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车"
		}
	}
	render(){
		return (
			<div className="user-register">
				<div><span className="ifont">&#xe61b;</span><input type="text" placeholder="请输入手机号"/><button>获取验证码</button></div>
				<div><span className="ifont">&#xe621;</span><input type="text" placeholder="请输入您收到的验证码"/></div>
				<div><span className="ifont">&#xe615;</span><input type="password" placeholder="请设置密码"/></div>
				<div><span className="ifont">&#xe615;</span><input type="password" placeholder="重复密码"/></div>
				<div><input type="text" placeholder="如有礼券请在此输入"/></div>
				<p>以活动奖励等方式获得的电子礼券的代码</p>
				<p className="tip">如果在120秒内未能收到系统发送的短信,请继续点击获取验证码</p>
				<button>注册</button>
				<h4><span>已阅读并同意</span><a href="#">6688交易条款</a></h4>
			</div>
		)
	}
}
export default Register