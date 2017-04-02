import React,{ Component } from "react"
import ReactDOM from "react-dom"
import List from '../../component_dev/scroller/src/'
import Scroller from '../../component_dev/scroller/src/'
import fetchData from '../util/fetch'
import {Provider} from 'react-redux'
import  {Link,hashHistory} from 'react-router'
import { store } from "../redux/store"
class kindList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"列表",
			filterlist:'',
			str:''
		}
	}
	filter(str){
		var strArry=Array(Object(str))[0];
		var strlen=strArry.length;
		var numlist=[];
		fetchData('./json/list.json',function(res){
			var data=eval(res)
	   		console.log(data)
	   		if(str!==''){
	   			for(var item of data){
					var itemArry=Array(Object(item.Caption))[0];
					var num=0;
					for(var strItem of strArry){
						for(var dataitem of itemArry){
							if(dataitem==strItem){
								num++;
								break;
							}
						}
					}
					if(num==strlen){		
						numlist.push(item);
					}
				}
		   		if(numlist.length>0){
		   			let flist=numlist.map(val=>{
			       		return (<li>
				       			<Link to={`/detail/${val.Sn}`}><List.LazyImage  className="goodsImg" src={val.goodsImg}/></Link>
				       			<p>{val.Caption}</p>
				       			<div className="goodsPrice">
				       				<span>￥{val.Price}</span>
				       				<Link to="cart"  title="购物车" activeClassName="active">
		       							<List.LazyImage onClick={this.add.bind(this,val.Sn)} src="http://m.6688.com/img/search/shopcar.jpg"/>
		       						</Link>
				       			</div>
			       			</li>)
			      	})
			   		this.setState({
			      		filterlist: flist
			    	})
		   		}else{
			      	alert("搜索结果为空")
			    }
	   		}else{
		      	let flist=data.map(val=>{
		       		return (
		       		<li>
		       			<Link to={`/detail/${val.Sn}`}><List.LazyImage  className="goodsImg" src={val.goodsImg}/></Link>
		       			<p>{val.Caption}</p>
		       			<div className="goodsPrice">
		       				<span>{val.Price}</span>
		       				<Link to="cart"  title="购物车"  activeClassName="active">
		       					<List.LazyImage onClick={this.add.bind(this,val.Sn)} src="http://m.6688.com/img/search/shopcar.jpg"/>
		       				</Link>
		       			</div>
		       		</li>)
		       	})
		      	this.setState({
			      		filterlist: flist
			    })
		      }
		}.bind(this))
	}
	render(){
		return (
			<div className="list">
				<div className="list_header">
					<Link to="/home"><img className="gohome" src="http://m.6688.com/img/search/home.png"/></Link>
					<div className="list_search">
							<input type="text" onChange={this.valChange.bind(this)}/>
							<i className="yo-ico" onClick={this.newFilter.bind(this)}>&#xe502;</i>						
					</div>
					<span onClick={this.newFilter.bind(this)}>确定</span>
				</div>
				<div className="filter_list">
					<List extraClass ="yo-scroller yo-scroller-fullscreen">
						<ul>{this.state.filterlist}</ul>
					</List>
				</div>
			</div>
		)
	}
	valChange(e){
		this.setState({
			str:e.target.value
		})
	}
	add(Snn){
		alert(Snn)
		if(localStorage.getItem("Sn")){
			var Sn=localStorage.getItem("Sn");
			Sn+=Snn+",";
			localStorage.setItem("Sn",Sn)
		}else{
			localStorage.setItem("Sn",Snn+",");
		}
	}
	newFilter(){
		this.filter(this.state.str)
	}
	componentDidMount(){
		this.filter(this.props.params.id);
	}
}
export default kindList;