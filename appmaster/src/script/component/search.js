import React,{ Component } from "react"
import List from '../../component_dev/scroller/src/'
import  {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../redux/store'
import fetchData from '../util/fetch'
var ReactDOM=require("react-dom");
class Kind extends React.Component{
	constructor(props){
			super(props)
			this.state={
				title:"分类",
				searchlist:'',
				str:''
			}
	}
	render(){
		return (
			<div className="search">
				<List 
					extraClass ="yo-scroller yo-scroller-fullscreen"
				>
					<ul className="k">
						{this.state.searchlist}
					</ul>
				</List>
			</div>
		)
	}
	data(st){
<<<<<<< HEAD
=======
		console.log(st);
>>>>>>> master
		this.setState({
			str:st
		})
		console.log(this.props)
//		let title=str;
//		this.props.onChange({
//			type:'SETTITLE',
//			title:title
//		})
	}
	componentDidMount(){
		fetchData('./json/nav.json',function(res){
			var data=eval(res)
			   	console.log(data)
			     let slist=data.map(val=>{
			       	return (
			       		<li className="search_list" onClick={this.data.bind(this,val.catalogName) }>
<<<<<<< HEAD
			       			<Link to={`/list/${val.catalogName}`} title={val.catalogName}>
=======
			       			<Link to="/list" title={val.catalogName}>
>>>>>>> master
			       				{val.catalogName}
			       			</Link>
			       		</li>
			       		)
			    })
			    this.setState({     
			          searchlist: slist
			  	})
		}.bind(this))	
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Kind)
//module.exports=Kind;