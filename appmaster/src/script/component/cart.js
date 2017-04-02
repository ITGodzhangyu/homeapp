import React,{ Component } from "react"
var ReactDOM=require("react-dom");
import  {Link,hashHistory} from 'react-router'
import fetchData from '../util/fetch'
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车",
			have:true,
			num:0.00,
			shalist:[],
			datalist:[],
			data:"",
			value:1,
			ani:"ani nni"
		}
	}
	render(){
		return ( 
			<div className="cart">
				<div className="cart_header">
					
					<button onClick={this.delate.bind(this)}>删除</button>
					<p>每单满300就95折,您还差230.1元就可以享受啦</p>
				</div>
				<ul className="cart_main">
					{this.state.datalist}
				</ul>
				<div className="cart_add">
					<div className="cart_gou">
						<div></div>
					</div>
					<span>总计 :<i>￥100.00</i> </span>
					<button>结算(1)</button>
				</div>
				<div className="cart_ani" >
					<div className={this.state.ani}>
						<div className="aniup">
							<span>修改数量 : </span>
							<img onClick={this.guabi.bind(this,false)} src="http://st16.live800.com/live800/chatClient/v5mobile/skin/common/closebtn.png"/>
						</div>
						<div className="anicenter">
							<span onClick={this.addvalue.bind(this,false)}>-</span>
							<input type="text" value={this.state.value}/>
							<span onClick={this.addvalue.bind(this,true)}>+</span>
						</div>
						<div className="anidown">
							<span>取消</span>
							<span>完成</span>
						</div>
					</div>
				</div>
				
			</div>
		)
	}
	comeon(){
		var clist=[];
		if(localStorage.getItem("Sn")&&localStorage.getItem("Sn")!==''){
			var Sn=localStorage.getItem("Sn");
			var dataSn=Sn.split(',');
			var data=this.state.data;
			clist=data.map(val=>{
				for(var i=0,len=dataSn.length;i<len-1;i++){	
					if(val.Sn==dataSn[i]){
						return(
							<li key={i}>
								<div className="list_header"></div>
								<div className="cart_list">
									<div className="cart_gou">
										<div onClick={this.change.bind(this,val.Sn)}></div>
									</div>
									<img src={val.goodsImg}/>
									<div className="cart_menu">
										<p>{val.Caption}</p>
										<g>价格 : ￥{val.Price}</g>
										<div className="cart_num">
											<span>数量 : </span>
											<input type="number" min="1" onClick={this.guabi.bind(this,true)} onChange={this.numadd.bind(this,val.Price)}/>
										</div>
										<i>小计:<span>￥{this.state.num}</span></i>
									</div>
								</div>
								
							</li>
						)
					}
				}
			})
		}else{
			clist.push(
				<li className="pacecart">
					<img src="http://m.6688.com/shop/MobileUI/img/mine/order/cart.png"/>
					<p>购物车还是空的,去购物吧!</p>
					<div className="pacebtn">
						<Link to="/home"><button>随便逛逛</button></Link>
						<Link to=""><button className="last">我的收藏</button></Link>
					</div>
				</li>
			)
		}
		this.setState({
			datalist:clist
		})
	}
	componentDidMount(){
	    fetchData('./json/list.json',function(res){
			var data=eval(res);
			this.setState({
				data:data
			})
			this.comeon()
		}.bind(this))
	    
  	}
	guabi(type){
		var ani='';
		if(type){
			ani='ani elastic-in-up'
		}else{
			ani='ani elastic-out-down'
		}
		this.setState({
			ani:ani
		})
	}
	addvalue(type){
		var value=this.state.value;
		if(type){
			value++;
		}else{
			if(value>1){
				value--;
			}
		}
		this.setState({
			value:value
		})
	}
	delate(){
		var slist=this.state.shalist;
		var Sn=localStorage.getItem("Sn");
		if(Sn){
			var dataSn=Sn.split(',');
			for(var i=0,len=dataSn.length;i<len-1;i++){	
				for(var n=0,lok=slist.length;n<lok;n++){
					if(dataSn[i]===slist[n]){
						dataSn.splice(i,1);
					}
				}
			}
			Sn=dataSn.toString();
			localStorage.removeItem("Sn");
			localStorage.setItem("Sn",Sn);
			this.comeon();
		}
		
	}
	numadd(price,evt){
		var n=evt.target.value;
		var price=parseInt(price)*n;
		this.setState({
			num:price
		})
		this.comeon();
	}
	change(Sn,evt){
		var have=this.state.have;
		var slist=this.state.shalist;
		if(have){
			evt.target.style.backgroundImage="url('http://m.6688.com/shop/MobileUI/img/Chosen.png')";
			evt.target.style.backgroundSize="100% 100%";
			slist.push(Sn)
		}else{
			evt.target.style.backgroundImage="none";
			slist.map((item,index)=>{
				if(item===Sn){
					slist.splice(index,1);
				}
			})
		}
		this.setState({
			have:!have,
			shalist:slist
		})
	}
}
export default Cart;