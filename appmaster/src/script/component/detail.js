import React,{ Component } from "react"
var ReactDOM=require("react-dom");
import  {Link,hashHistory} from 'react-router'
import fetchData from '../util/fetch'
class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"购物车",
			data:[],
			datalist:''
		}
	}
	render(){
		return (
			<div>
				<button onClick={this.add.bind(this)}>
					加入购物车
				</button>
			</div>
		)
	}
	componentDidMount(){
	    fetchData('./json/list.json',function(res){
			var data=eval(res);
			var Sn=this.props.params.Sn;
			let datalist=data.map(val=>{
				if(val.Sn===Sn){
					this.setState({
						data:val
					})
					return (
						<li></li>
					)
				}
			})
			this.setState({
				datalist:datalist
			})
		}.bind(this))
  	}
	add(){
		if(localStorage.getItem("Sn")){
			var Sn=localStorage.getItem("Sn");
			Sn+=this.state.data.Sn+",";
			localStorage.setItem("Sn",Sn)
		}else{
			localStorage.setItem("Sn",this.state.data.Sn+",");
		}
	}
}
export default Cart;