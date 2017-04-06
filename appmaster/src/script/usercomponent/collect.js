import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'
import fetchData from '../util/fetch'

class Collect extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"我的订单",
			goods:[]
		}
		
	}
	render(){
		let _list=[]
		var that=this
		this.state.goods.map(function(item){
			_list.push((<ul className='my-concern'>
	       		 		<li className="concern-list"  >
	       		 			<div className='goodsimg'>
	       		 				<img src={item.goodsImg} title={item.Sn} onClick={that.click}/>
	       		 			</div>
	       		 			<div className="goodsdetail">
	       		 				<span className='goodsname'>{item.Caption}</span>
	       		 				<span className="goodsprice">¥{item.Price}</span>
	       		 			</div>
	       		 		</li>
	       		 	</ul>))
		})
		return (
			<div className='main'>
				<header className="yo-header yo-header-c">
				<p className="title">{this.props.value}</p>
				<a className="regret yo-ico" onClick={this.back}>&#xe639;</a>
				</header>
				<section>
	       		 	{_list}
	       		 </section>
			</div>
		)
	}
	click(e){
		let title=e.target.title
		fetchData('./json/list.json',function(res){
			res.map((item)=>{
				if(item.Sn==title){
					window.location.href="#/detail/"+title
				}
			})
		})
		
	}
	back() {
   		 window.location.href="#/user"
  	}
	componentDidMount() {
	    let title = '我的收藏'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	    if(localStorage.getItem("Sn")){
	    	var list=[]
	    	var arr=localStorage.getItem("Sn").split(",")
	    	arr.map(function(item){
	    		if(item!=""){
	    			list.push(item)
	    		}
	    	})
	    	fetchData('./json/list.json',function(res){
	    		var _arr=[]
	    		res.map(function(item){
	    			list.map(function(key){
	    				if(item.Sn==key){
	    					_arr.push(item)
	    				}
	    			})
	    		})
	    		this.setState({
	    			goods:_arr
	    		})
	    		console.log(this.state.goods)
	    	}.bind(this))
	    }
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collect)