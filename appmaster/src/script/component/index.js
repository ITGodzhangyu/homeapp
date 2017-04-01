import React,{ Component } from "react"
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../redux/store'
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
class Index extends React.Component{
	constructor(props){
		super(props)
		this.state={
			value:''
		}
	}
	render(){
		return (
			<div className="main"> 
				<header>
				{this.props.value}
					
				</header>
					<section >
							{this.props.children}				
					</section>
					<footer>
						<ul>
							<li>
								<Link to="/home" title="首页" onClick={this.mont.bind(this)} activeClassName="active">
								<i className="yo-ico">&#xe611;</i><span>首页</span>
								</Link>
							</li>
							<li>
								<Link to="/search" title="导航"  onClick={this.mont.bind(this)} activeClassName="active">
								<i className="yo-ico">&#xe502;</i><span>导航</span>
								</Link>
							</li>
							<li>
								<Link to="/user" title="用户中心"  onClick={this.mont.bind(this)} activeClassName="active">
								<i className="yo-ico">&#xe653;</i><span>我的</span>
								</Link>
							</li>
							<li>
								<Link to="/cart"  title="购物车" onClick={this.mont.bind(this)} activeClassName="active">
								<i className="yo-ico">&#xe66a;</i><span>购物车</span>
								</Link>
							</li>
							<li>
								<Link to="/service"  title="客服" onClick={this.mont.bind(this)} activeClassName="active">
								<i className="yo-ico">&#xe76a;</i><span>客服</span>
								</Link>
							</li>
						</ul>
					</footer>
			</div>
		);
	}
	mont(){
//		let title=this.props.routes[1].title
//		console.log(this.props.routes[1]);
//		this.props.onChange({
//			type:'SETTITLE',
//			title:title
//		})
	}
	componentDidMount(){
		let title=this.props.routes[1].title
		console.log(this.props.routes[1]);
		this.props.onChange({
			type:'SETTITLE',
			title:title
		})
	}
	componenWillUpdata(){
		let title=this.props.routes[1].title
		this.props.onChange({
			type:'SETTITLE',
			title:title
		})
		console.log(this.props)
		console.log(this.props.routes[1]);
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index)
