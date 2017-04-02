import React,{ Component } from "react"
var ReactDOM=require("react-dom");
import  {Link,hashHistory} from 'react-router'
import List from '../../component_dev/scroller/src/'
import Scroller from '../../component_dev/scroller/src/'
import Popup from '../../component_dev/popup/src/'
import InputNumber from '../../component_dev/inputnumber/src/'
import fetchData from '../util/fetch'
var ReactDOM=require("react-dom");
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.reduceclk=this.reduceclk.bind(this)
		this.addclick=this.addclick.bind(this)
		this.clickPopup=this.clickPopup.bind(this)
    	this.clickHide=this.clickHide.bind(this)
    	this.likeSave=this.likeSave.bind(this)
    	this.filter=this.filter.bind(this)
		this.state={
			data:'',
			datalist:[],
		    sharePopup:false,
		    like:'',
		    inputnum:1,
		    dataImg:'',
		    filterlist:''
		}
	}
	render(){
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
											<img className="detail_proImg" src={this.state.data.goodsImg}/>
											<span className="detail_share" onClick={this.clickPopup}>&#xe631;
												<Popup show={this.state.sharePopup} duration={1000} height={200}>
												  	<div className="hidecent">
												  		<div className="detailImg"><a href=""><img src="/img/timg.jpg"/></a></div>
												  		<div className="detailImg"><a href=""><img src="/img/timg1.jpg"/></a></div>
												  		<div className="detailImg"><a href=""><img src="/img/timg2.jpg"/></a></div>
												  	</div>
														<input className="qiut" onClick={this.clickHide} type="submit" value="取消" />			  	
												</Popup>
											</span>
									</div>
									<div className="detail_proInfo">
										<p>{this.state.data.Caption}  -小包装</p>
										<p>
											<span>商城价:<i>￥{this.state.data.Price}</i></span>
											<span>货号:164632</span>
										</p>
										<p>每单满70包邮.满300下单后自动九折</p>
										<ul className="detail_kind">
											<h4>包装</h4>
										  	{this.state.filterlist}
										</ul>
									</div>
									<div className="detail_pronum">
										<i>数量:</i>
										<div className="inputNum">
											<span className="minus" onClick={this.reduceclk}>-</span>
											<input className="input" type="text" value={this.state.inputnum}/>
											<span className="plus" onClick={this.addclick}>+</span>
										</div>																										
									</div>
									<div className ="detail_discount">
											<h4>第二件特价</h4>
											<Scroller extraClass ="yo-scroller yo-pro" scrollX={true} scrollY={false}>
												<div className="tepro">
												  	
											  </div>
											</Scroller>
									</div>
									<div className="detail_show"></div>
								</div>
								<div>
									{this.state.dataImg}
								</div>
						</div>	
				</Scroller>
				<footer>
						<ul>
							<li ref="save">
								<Link to={this.state.like} onClick={this.likeSave}>&#xe6a8;</Link>
							</li>
							<li>
								<Link to="" onClick={this.add.bind(this,this.state.data.Sn)}>加入购物车</Link>
								
							</li>
							<li>
								<Link to="/cart">&#xe66a;
									<input className="sumNum" ref="sumnum" type="text" value={this.state.inputnum}/>
								</Link>
							</li>
						</ul>
				</footer>
			</div>
		)
	}
	add(Snn){
		console.log(Snn)
		if(localStorage.getItem("Sn")){
			var Sn=localStorage.getItem("Sn");
			Sn+=Snn+",";
			localStorage.setItem("Sn",Sn)
		}else{
			localStorage.setItem("Sn",Snn+",");
		}
	}
	reduceclk(){
		var reduce=this.state.inputnum;
		if(reduce==0){
			reduce=0;
		}else{
			reduce--
		}
		this.setState({
			inputnum:reduce
		})
	}
	addclick(){
		var addnum=this.state.inputnum;
		addnum++
		this.setState({
			inputnum:addnum
		})
	}
	clickPopup(){
		this.setState({
			sharePopup:true
		})
			
   }
	clickHide(){
		this.setState({
			sharePopup:false
		})	
	}
	shuaxin(Sn){
		fetchData('./json/list.json',function(res){
			var data=eval(res);
			data.map(val=>{
				if(val.Sn===Sn){
					this.setState({
						data:val
					})
					this.filter(val.Caption)
				}
			})
		}.bind(this))
	}
	componentDidMount(){
		this.shuaxin(this.props.params.Sn)
	    fetchData('./json/detail.json',function(res){
			var data=eval(res);
			let dataImg=data.map(val=>{
				return (
					<img src={val.img} />
				)
			})
			
			this.setState({
				dataImg:dataImg
			})
		}.bind(this))
	}
	likeSave(){
   		var userName=localStorage.getItem("userID");
   		if(userName==null){
   			this.setState({
   				like:"/login"
   			})
   			alert("您还未登陆，请先登陆")
   		}else{
   			alert("收藏成功")
   		}
	}
	filter(str){
		var strArry=Array(Object(str))[0];
		var numlist=[];
		fetchData('./json/list.json',function(res){
			var data=eval(res)
   			for(var item of data){
				var itemArry=Array(Object(item.Caption))[0];
				var num=0;
				for(var m=4;m<8;m++){
					for(var dataitem of itemArry){
						if(dataitem==strArry[m]){
							num++;
							break;
						}
					}
				}
				if(num==4){		
					numlist.push(item);
				}
			}
	   		if(numlist.length>0){
	   			let flist=numlist.map(val=>{
		       		return (<li>
			       			<span>{val.Caption}</span>
		       			</li>)
		      	})
		   		this.setState({
		      		filterlist: flist
		    	})
	   		}
		}.bind(this))
	}
	componentDidUpdate(){
	}
}
export default Cart;

