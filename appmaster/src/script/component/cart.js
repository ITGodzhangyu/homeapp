import React,{ Component } from "react"
var ReactDOM=require("react-dom");
import  {Link,hashHistory} from 'react-router'
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车",
			have:true,
			num:0.00,
			shalist:[],
			datalist:[]
		}
	}
	render(){
		return (
			<div className="cart">
				<div className="cart_header">
					<Link to="/home">
						<div className="cart_gohome">
							<i className="yo-ico">&#xe611;</i>
						</div>
					</Link>
					<h2>购物车</h2>
					<span onClick={this.delate.bind(this)}>删除</span>
					<p>每单满300就95折,您还差230.1元就可以享受啦</p>
				</div>
				<ul className="cart_main">
					{this.state.datalist}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		this.comeon()
	}
	comeon(){
		var clist=[];
		var cart=localStorage.getItem("cart");
		var data=cart.split('#')
		for(var i=0,len=data.length;i<len-1;i++){
			var val=JSON.parse(data[i]);
			clist.push(
				<li>
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
								<input type="number" min="1" onChange={this.numadd.bind(this,val.Price)}/>
							</div>
							<i>小计:<span>￥{this.state.num}</span></i>
						</div>
					</div>
					
				</li>
			)
		}
		this.setState({
			datalist:clist
		})
	}
	componentWillUnmount(){
	}
	delate(){
		var slist=this.state.shalist;
		var cart=localStorage.getItem("cart");
		console.log(cart);
		var data=cart.split('#');
		var newlist=[];
		for(var i=0,len=data.length;i<len-1;i++){	
			var val=JSON.parse(data[i]);
			for(var n=0,lok=slist.length;n<lok;n++){
				if(val.Sn!==slist[n]){
					newlist.push(data[i]+"#");
				}
				
			}
		}
		newlist.push("");
		for(var i=0,len=cart.length;i<len;i++){
			cart=String(newlist).replace("#,","#")
		}
		localStorage.setItem("cart",cart);
		console.log(cart)
		this.comeon();
	}
	numadd(price,evt){
		var n=evt.target.value;
		var price=parseInt(price)*n;
		console.log(price)
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