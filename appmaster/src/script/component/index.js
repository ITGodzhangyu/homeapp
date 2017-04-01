import React,{ Component } from "react"
import ReactDOM from "react-dom"
import {connect} from 'react-redux'
<<<<<<< HEAD
import {mapStateToProps, mapDispatchToProps} from '../redux/store'
=======
import {mapStateToProps,mapDispatchToProps} from '../redux/store'
>>>>>>> master
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
class Index extends React.Component{
	constructor(props){
		super(props)
		this.state={
<<<<<<< HEAD
			value:''
		}
	}
=======
			title:'首页'
		}
	}
	addtitle(type){
		this.setState({
			title:type
		})
	}
>>>>>>> master
	render(){
		return (
			<div className="main"> 
				<header>
				{this.props.value}
<<<<<<< HEAD
					
=======
					<div className="header">
						<img className="index-logo" src="http://m.6688.com/img/newIndex/201607/logo.png"/>
						<div className="index-search">
							<i className="yo-ico">&#xe502;</i>						
						</div>
						<i className="yo-ico">&#xe82e;</i>
					</div>
>>>>>>> master
				</header>
					<section >
							{this.props.children}				
					</section>
					<footer>
						<ul>
							<li>
<<<<<<< HEAD
								<Link to="/home" title="首页" onClick={this.mont.bind(this)} activeClassName="active">
=======
								<Link to="/home" title="首页" onClick={this.addtitle.bind(this,"首页")} activeClassName="active">
>>>>>>> master
								<i className="yo-ico">&#xe611;</i><span>首页</span>
								</Link>
							</li>
							<li>
<<<<<<< HEAD
								<Link to="/search" title="导航"  onClick={this.mont.bind(this)} activeClassName="active">
=======
								<Link to="/search" title="导航" onClick={this.addtitle.bind(this,"导航")} activeClassName="active">
>>>>>>> master
								<i className="yo-ico">&#xe502;</i><span>导航</span>
								</Link>
							</li>
							<li>
<<<<<<< HEAD
								<Link to="/user" title="用户中心"  onClick={this.mont.bind(this)} activeClassName="active">
=======
								<Link to="/user" title="用户中心" onClick={this.addtitle.bind(this,"用户中心")} activeClassName="active">
>>>>>>> master
								<i className="yo-ico">&#xe653;</i><span>我的</span>
								</Link>
							</li>
							<li>
<<<<<<< HEAD
								<Link to="/cart"  title="购物车" onClick={this.mont.bind(this)} activeClassName="active">
=======
								<Link to="/cart"  title="购物车" onClick={this.addtitle.bind(this,"购物车")} activeClassName="active">
>>>>>>> master
								<i className="yo-ico">&#xe66a;</i><span>购物车</span>
								</Link>
							</li>
							<li>
<<<<<<< HEAD
								<Link to="/service"  title="客服" onClick={this.mont.bind(this)} activeClassName="active">
=======
								<Link to="/service"  title="客服" onClick={this.addtitle.bind(this,"客服")} activeClassName="active">
>>>>>>> master
								<i className="yo-ico">&#xe76a;</i><span>客服</span>
								</Link>
							</li>
						</ul>
					</footer>
			</div>
		);
	}
<<<<<<< HEAD
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
=======
	componentDidMount(){
		
	}
	componentDidUpdata(){
		let title=this.props.routes[2].title
>>>>>>> master
		this.props.onChange({
			type:'SETTITLE',
			title:title
		})
<<<<<<< HEAD
		console.log(this.props)
		console.log(this.props.routes[1]);
=======
>>>>>>> master
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Index)
<<<<<<< HEAD
=======

//export default Index;
>>>>>>> master
