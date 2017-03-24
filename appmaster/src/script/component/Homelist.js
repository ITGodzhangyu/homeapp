//var React=require("react");
//var ReactDOM=require("react-dom");
//var Homelist=React.createClass({
//	getInitialState:function(){
//		var homelist=this.props.homelist;
//		return {
//			homelist:homelist	
//		}
//	},
//	render:function(){
//		console.log(this.state.homelist)
//		var arr=[];
//		this.state.homelist.map(function(item,index){
//			arr.push(<li>{item.info}---{item.username}</li>)
//		})
//		return (
//			<ul>
//				{arr}
//				
//			</ul>
//		)
//	}
//})
//module.exports=Homelist;