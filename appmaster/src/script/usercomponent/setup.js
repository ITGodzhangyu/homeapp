import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
import Toast from "../../component_dev/toast/src"

class Setup extends React.Component{
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
	       		 <section className="setup">
	       		 	<ul className="user-setup">
						<li><Link to="/suggestion"><img src="/img/yijian.png"/>意见反馈<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link onClick={this.genxin}><img src="/img/genxin.png"/>检测更新<span className="yo-ico">&#xe608;</span><span className="genxin">当前已是最新版本</span></Link></li>
						<li><Link ><img src="/img/pingfen.png"/>给我评分<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link ><img src="/img/huancun.png"/>清除缓存<span className="yo-ico">&#xe608;</span></Link></li>
						<li><Link ><img src="/img/kefu.png"/>客服热线<span className="yo-ico">&#xe608;</span><span className="genxin">400-867-6688</span></Link></li>
					</ul>
	       		 	<button id="quit" onClick={this.quit}>退出登录</button>
	       		 </section>
			</div>
		)
	}
	back() {
   		 window.location.href="#/user"
  	}
	quit(){
		localStorage.removeItem("userID")
		window.location.href="#/user"
	}
	genxin(){
		setTimeout(function(){Toast.show("已是最新版本")},2000)
	}
	componentDidMount() {
	    let title="设置"
	    this.props.onChange({
	      type: 'SETTITLE',
	      title:title
	    })
	}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)