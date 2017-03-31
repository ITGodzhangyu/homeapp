import React,{ Component } from "react"
var ReactDOM=require("react-dom");
import  {Link,hashHistory} from 'react-router'
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车",
			have:true,
			num:0.00
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
					<span>删除</span>
					<p>每单满300就95折,您还差230.1元就可以享受啦</p>
				</div>
				<ul className="cart_main">
					{this.state.datalist}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		var clist=[];
		var cart=localStorage.getItem("cart");
	//	cart+=JSON.stringify(this.state.data)+"#";
	//	localStorage.setItem("cart",cart);
	//	var cart=localStorage.getItem("cart");
		var data=cart.split('#')
		for(var i=0,len=data.length;i<len-1;i++){
			var val=JSON.parse(data[i]);
			clist.push(
				<li>
					<div className="list_header"></div>
					<div className="cart_list">
						<div className="cart_gou">
							<div onClick={this.change.bind(this)}></div>
						</div>
						
						<img src={val.goodsImg}/>
						<div className="cart_menu">
							<p>{val.Caption}</p>
							<g>价格 : ￥{val.Price}</g>
							<div className="cart_num">
								<span>数量 : </span>
								<input type="number" min="1" onChange={this.numadd.bind(this,val.Price)}/>
							</div>
							<i>小计:<span>￥{val.Price}</span></i>
						</div>
					</div>
					
				</li>
			)
		}
		this.setState({
			datalist:clist
		})
	}
	numadd(price,evt){
		var n=evt.target.value;
		var price=parseInt(price)*n;
		console.log(price)
		this.setState({
			num:price
		})
	}
	change(evt){
		var have=this.state.have;
		if(have){
			evt.target.style.backgroundImage="url('http://m.6688.com/shop/MobileUI/img/Chosen.png')";
			evt.target.style.backgroundSize="100% 100%";
		}else{
			evt.target.style.backgroundImage="none";
		}
		this.setState({
			have:!have
		})
		console.log(this.state.have)
	}
}
export default Cart;