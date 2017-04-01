import React,{ Component } from "react"
import ReactDOM from "react-dom"
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
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
					<img className="index-logo" src="http://m.6688.com/img/newIndex/201607/logo.png"/>
					<div className="index-search">
						<i className="yo-ico">&#xe502;</i>						
					</div>
					<i className="yo-ico">&#xe82e;</i>
				</header>
					<section >
							{this.props.children}				
					</section>
					<footer>
						<ul>
							<li>
								<Link to="/home" title="首页" onClick={this.addtitle.bind(this,"首页")} activeClassName="active">
								<i className="yo-ico">&#xe611;</i><span>首页</span>
								</Link>
							</li>
							<li>
								<Link to="/search" title="导航" onClick={this.addtitle.bind(this,"导航")} activeClassName="active">
								<i className="yo-ico">&#xe502;</i><span>导航</span>
								</Link>
							</li>
							<li>
								<Link to="/user" title="用户中心" onClick={this.addtitle.bind(this,"用户中心")} activeClassName="active">
								<i className="yo-ico">&#xe653;</i><span>我的</span>
								</Link>
							</li>
							<li>
								<Link to="/cart"  title="购物车" onClick={this.addtitle.bind(this,"购物车")} activeClassName="active">
								<i className="yo-ico">&#xe66a;</i><span>购物车</span>
								</Link>
							</li>
							<li>
								<Link to="/service"  title="客服" onClick={this.addtitle.bind(this,"客服")} activeClassName="active">
								<i className="yo-ico">&#xe76a;</i><span>客服</span>
								</Link>
							</li>
						</ul>
					</footer>
			</div>
		);
	}
}
export default Footer;