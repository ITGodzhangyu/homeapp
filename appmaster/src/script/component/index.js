import React,{ Component } from "react"
import ReactDOM from "react-dom"
import Home from "./home.js"
import User from "./user.js"
import Cart from "./cart.js"
import Search from "./search.js"
import Service from "./service.js"

import Userheader from "./user-head"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
//class Index extends React.Component({})


class Index extends React.Component{
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
						{this.props.key1}
					</header>
					<section>
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
								<Link to="/search" title="" onClick={this.addtitle.bind(this,"搜索")} activeClassName="active">
								<i className="yo-ico">&#xe502;</i><span>导航</span>
								</Link>
							</li>
							<li>
								<Link to="/user" title="用户中心" onClick={this.addtitle.bind(this,"我的")} activeClassName="active">
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
	componentDidUpdate() {
	    let com = this.props.routes[1].com
	    this.props.onChange({
	      type: 'SETCOM',
	      com: com
	    })
	 }
	componentDidMount() {
	    let com = this.props.routes[1].com
	    this.props.onChange({
	      type: 'SETCOM',
	      com: com
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)





