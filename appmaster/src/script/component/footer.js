import React,{ Component } from "react"
import ReactDOM from "react-dom"
import Home from "./home.js"
import User from "./user.js"
import Cart from "./cart.js"
import Kind from "./kind.js"
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
//class Index extends React.Component({})
class Footer extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:'首页'
		}
	}
	addtitle(type){
		this.setState({
			title:type
		})
	}
	render(){
		return (
			<div className="main"> 
				<header>
					{this.state.title}
				</header>
					<section>
						{this.props.children}
					</section>
					<footer>
						<ul>
							<li>
								<Link to="/home" title="首页" onClick={this.addtitle.bind(this,"首页")} activeClassName="active">
								<i className="yo-ico">&#xe6e4;</i><span>首页</span>
								</Link>
							</li>
							<li>
								<Link to="/kind" title="分类" onClick={this.addtitle.bind(this,"分类")} activeClassName="active">
								<i className="yo-ico">&#xe610;</i><span>分类</span>
								</Link>
							</li>
							<li>
								<Link to="/cart"  title="购物车" onClick={this.addtitle.bind(this,"购物车")} activeClassName="active">
								<i className="yo-ico">&#xe613;</i><span>购物车</span>
								</Link>
							</li>
							<li>
								<Link to="/user" title="用户中心" onClick={this.addtitle.bind(this,"用户中心")} activeClassName="active">
								<i className="yo-ico">&#xe605;</i><span>我的</span>
								</Link>
							</li>
						</ul>
					</footer>
			</div>
		);
	}
}
export default Footer;