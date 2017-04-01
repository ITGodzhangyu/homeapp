import React from 'react'
import  {Router,Route,IndexRoute,Link,hashHistory} from 'react-router'
import List from '../../component_dev/scroller/src/'
import Scroller from '../../component_dev/scroller/src/'
import fetchData from '../util/fetch'
//import { connect } from 'react-redux'
//import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Listkind extends React.Component {
	
  constructor(props){
    super(props)
    this.cartSave=this.cartSave.bind(this)
    this.state={
      title: 'abc',
      data:''
    }
  }
  
  
  cartSave(str){
  	var strArray=Array(Object(str))[0];
  	console.log(strArray)
  	var strlen=strArray.length;
  	console.log(strlen)
  	var cartlist=[];
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
		   				
		   				cartlist.push(item);
		   				
		   			}
		   			
		   		}
		   		if(cartlist.length>0){
		   		
		   			let	data=cartlist;
		   			
		   			this.setState({
			   			data:data
			   		})
		   			
		   		}
		   		
 			}.bind(this))
  	 localStorage.setItem("cart",JSON.stringify(this.state.data)+"#");
		var cart=localStorage.getItem("cart");
		console.log("111"+cart)
		cart+=JSON.stringify(this.state.data)+"#";
		localStorage.setItem("cart",cart);
		var cart=localStorage.getItem("cart");
		var m=cart.split('#')
		console.log(JSON.parse(m[0]));

  	
} 
  
  
  
  
  
  render() {
    return (
      <div className="list">
        <Scroller extraClass ="yo-scroller yo-scroller-fullscreen">
					<div className="list_scroll">
						<header>
		      		<div className="yo-header yo-header-a">
		            <h2 className="title">商品列表</h2>
		            <span className="regret yo-ico list_font" ><Link to="/home" className="regret yo-ico list_font">&#xe6a7;</Link></span>
		          </div>
		      	</header>
						<div className="list_main">
							<ul>
								{this.state.filterlist}
							</ul>
						</div>
					</div>
				</Scroller>
	    </div>
	  )
	}


    filter(str){
		var strArry=Array(Object(str))[0];
		console.log(strArry)
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
						console.log(numlist);
					}
				}
		   		if(numlist.length>0){
		   			let flist=numlist.map(val=>{
			       		return (<li>
				       			<a href={'#/detail/?s='+str+'&m='+val.Caption}>
					       			<List.LazyImage  className="goodsImg" src={val.goodsImg}/>
					       			<p>{val.Caption}</p>
					       			
					       		</a>
					       		<div className="goodsPrice">
					       				
					       				<span>{'￥'+val.Price}</span>
					       				<img onClick={this.cartSave} className="list_cart" src="http://m.6688.com/img/search/shopcar.jpg"/>
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
	   				console.log(data)
		      	let flist=data.map(val=>{
		      		
		       		return (<li>
		       			<a href={'#/detail/?s='+str+'&m='+val.Caption}>
			       			<List.LazyImage  className="goodsImg" src={val.goodsImg}/>
			       			<p>{val.Caption}</p>
			       			<div className="goodsPrice">
			       				
			       				
			       				<span>{'￥'+val.Price}</span>
			       				<List.LazyImage onClick={this.cartSave} className="list_cart" src="http://m.6688.com/img/search/shopcar.jpg"/>
			       			</div>
			       		</a>
		       		</li>)
		       	})
		      	this.setState({
			      		filterlist: flist
			    	})
		      }
		}.bind(this))
	}
  componentDidMount() {
  	var str=this.props.location.query.n;
  	console.log(str)
  	this.filter(str)
  	this.cartSave(str)
  }
}

module.exports=Listkind;
