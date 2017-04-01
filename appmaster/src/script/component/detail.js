import React from 'react'
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
import List from '../../component_dev/scroller/src/'
import Scroller from '../../component_dev/scroller/src/'
import Popup from '../../component_dev/popup/src/'

import InputNumber from '../../component_dev/inputnumber/src/'
import fetchData from '../util/fetch'
//import { connect } from 'react-redux'
//import { mapStateToProps, mapDispatchToProps } from '../redux/store'
var ReactDOM=require("react-dom");
class Detail extends React.Component {
  constructor(props){
    super(props)
    this.clickPopup=this.clickPopup.bind(this)
    this.clickHide=this.clickHide.bind(this)
    this.reduceclk=this.reduceclk.bind(this)
    this.addclick=this.addclick.bind(this)
    this.cartSave=this.cartSave.bind(this)
    this.likeSave=this.likeSave.bind(this)
    this.state={
      title: 'abc',
      detailproduct:'',
      sharePopup:false,
      like:'',
      data:'',
      inputnum:0
    }
   	
  }
  clickPopup(){
			this.setState({
				sharePopup:true
			})
			alert(1)
   	}
  
  clickHide(){
  	this.setState({
  		sharePopup:false
  	})
  	alert(2)
  }
  reduceclk(){
  	var reduce=this.refs.innum.value
  	
  	if(reduce==0){
  		reduce=0;
  	}else{
  		reduce--
  	}
  	this.setState({
  		inputnum:reduce
  	})
  	console.log(reduce)
  }
  addclick(){
  	var addnum=this.refs.innum.value
  	addnum++
  	this.setState({
  		inputnum:addnum
  	})
  	console.log(addnum)
  }
  
  likeSave(){
 		var userName=localStorage.getItem("userID");
 		console.log("N"+userName)
 		if(userName==null){
 			this.setState({
 				like:"/login"
 			})
 			alert("您还未登陆，请先登陆")
 		}else{
 			alert("收藏成功")
 		}
  }
  
  cartSave(str){
  	var strArray=Array(Object(str))[0];
  	var sumnumber=this.refs.sumnum.value
  	console.log(strArray)
  	var strlen=strArray.length;
  	console.log(strlen)
  	var cartlist=[];
  	var data=[];
  	 fetchData('./json/list.json',function(res){
  		var Data=eval(res)
  		console.log(Data)
		   		for(var item of Data){
		   			var itemArray=Array(Object(item.Caption))[0];
		   			
		   			var n=0;
		   			for(var stritem of strArray){
		   				for(var dataitem of itemArray){
		   					if(dataitem==stritem){
		   						n++;
		   						break;
		   					}
		   				}
		   			}
		   			if(n==strlen){
		   				
		   				cartlist=item;
		   				
		   			}
		   			
		   		}
		   		console.log(cartlist)
		   		data=cartlist.Sn;
					
 			}.bind(this))
  	localStorage.setItem("cart",data+"#");
//		var cart=localStorage.getItem("cart");
//		console.log("111"+cart)
//		cart+=data+"#";
//		localStorage.setItem("cart",cart+'{"shu":'+sumnumber+'}');
//		var cart=localStorage.getItem("cart");
//		var m=cart.split('#')
//		console.log(JSON.parse(m[0]));

  	
} 
  
  
  render() {
    return (
      <div className="detail">
				<Scroller extraClass ="yo-scroller yo-scroller-fullscreen">
				<div className="detail_scroll">
						<header>	
		      		<h2>消费账户(E元)充值1000送60</h2>
		      	</header>
						<div className="detail_pro">
							<div className="detail_proTop">
								<span className="detail_back"><Link to=" ">&#xe6a7;</Link></span>
								<div className="detail_proImg">{this.state.filterlist}</div>
								<span className="detail_share" ref="clickShow" onClick={this.clickPopup}>
									&#xe631;
									<Popup show={this.state.sharePopup} duration={1000} height={200}>
									  	<div className="hidecent">
									  		<div className="detailImg"><a href=""><img src="/image/timg.jpg"/></a></div>
									  		<div className="detailImg"><a href=""><img src="/image/timg1.jpg"/></a></div>
									  		<div className="detailImg"><a href=""><img src="/image/timg2.jpg"/></a></div>
									  	</div>
											<input className="qiut" onClick={this.clickHide} type="submit" value="取消" />			  	
									</Popup>
								</span>	
							</div>
							<div className="detail_proInfo">
									{this.state.proname}
									<ul className="detail_kind">
										<h4>包装</h4>
									  {this.state.wordkey}
									</ul>
									<p>全国包邮,产地直发;含本品的订单不支持货到付款</p>
							</div>
							<div className="detail_pronum" >
									<i>数量:</i>
									<div className="inputNum">
										<span className="minus" ref="reduce" onClick={this.reduceclk}>-</span>
										<input className="input" ref="innum"  type="text" value={this.state.inputnum}/>
										<span className="plus" ref="add" onClick={this.addclick}>+</span>
									</div>
									
									
								
							</div>
							<div className ="detail_discount">
								<h4>第二件特价</h4>
								<Scroller extraClass ="yo-scroller yo-pro" scrollX={true} scrollY={false}>
									<div className="tepro">
									  {this.state.dispro}
								  </div>
								</Scroller>
							</div>
							<div className="detail_show">{this.state.proshow}</div>
						</div>
					</div>
				</Scroller>
				<footer>
						<ul>
							<li ref="save">
								<Link to={this.state.like} onClick={this.likeSave}>&#xe6a8;</Link>
							</li>
							<li>
								<Link to="" onClick={this.cartSave}>加入购物车</Link>
								
							</li>
							<li>
								<Link to="/cart ">&#xe66a;
									<input className="sumNum" ref="sumnum" type="text" value={this.state.inputnum}/>
									
								</Link>
							</li>
						</ul>
					</footer>
      </div>
    )
  }


  filter(str,keyword){
			var strArry=Array(Object(str))[0];
			var word=Array(Object(keyword))[0];
			var sprice=Array(Object("特价"))[0];
			var strlen=strArry.length;
			var wordlen=word.length;
			var tejialen=sprice.length;
			var numlist=[];
			var wordlist=[];
			var tejia=[];
			fetchData('./json/list.json',function(res){
				var data=eval(res)
		   		
		   		for(var item of data){
					var itemArry=Array(Object(item.Caption))[0];
					
					var num=0;
					var numkind=0;
					var price=0;
					
					for(var spriceItem of word){
						
						for(var dataitem of itemArry){
							if(dataitem==spriceItem){
								price++;
								break;
							}
							
						}
					}
					if(price==tejialen){	
						tejia.push(item);
					//	console.log(tejia)
					}
					
					
					
					
					for(var keyItem of word){
						
						for(var dataitem of itemArry){
							if(dataitem==keyItem){
								numkind++;
								break;
							}
							
						}
					}
					if(numkind==wordlen){	
						wordlist.push(item);
						// console.log(wordlist)
					}
					
					
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
			       		return (<img src={val.goodsImg}/>)
		        })
		   			let proname=numlist.map(val=>{
			       		return (
			       			<div className="">
				       			<h4>{val.Caption}</h4>
				       			<div className="detail_price">{'商城价  ￥'+val.Price}</div>
			       			</div>
			       		)
		        })
			   		this.setState({
			      		filterlist: flist,
			      		proname:proname
			    		})
		   		}
		   		
		   		if(wordlist.length>0){
		   			let wordkey=wordlist.map(val=>{
		   			//	console.log(val)
		   				return (
										<li><a href={'#/detail/?s='+keyword+'&m='+val.Caption}>{val.Caption}</a></li>
									)
		   			})
		   			let proshow=wordlist.map(val=>{
		   			//	console.log(val)
		   				return (
									 <List.LazyImage className="proImg" height="50" src={val.goodsImg}/>
									)
		   			})
		   			this.setState({
			      	
			      		wordkey:wordkey,
			      		proshow:proshow
			    		})
		   		}
		   		
		   		if(tejia.length>0){
		   			let dispro=tejia.map(val=>{
		   			//	console.log(val)
		   				return (
										<div className="disinfo">
											<a href={'#/detail/?s='+keyword+'&m='+val.Caption}>
												<img src={val.goodsImg}/>
												<p>{val.Caption}</p>
											</a>
										</div>
									)
		   			})
		   			this.setState({
			      	
			      		dispro:dispro
			    		})
		   		}
		   		
			}.bind(this))
		}
	componentDidUpdata(){
		localStorage.setItem("cart",JSON.stringify(this.state.data)+sumnumber);
		var cart=localStorage.getItem("cart");
		console.log("111"+cart)
	}

  componentDidMount() {
  	var str=this.props.location.query.m;
  	var keyword=this.props.location.query.s;
  		
  	this.filter(str,keyword);
  	this.cartSave(str);
  } 
}

module.exports=Detail;
