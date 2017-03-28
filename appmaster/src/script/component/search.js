import React,{ Component } from "react"
import Scroller from '../../component_dev/scroller/src/'
var ReactDOM=require("react-dom");
class Kind extends React.Component{
	constructor(props){
			super(props)
			this.state={
				title:"分类",
				searchlist:''
			}
	}
	render(){
		return (
			<div className="search">
				<Scroller extraClass ="yo-scroller yo-scroller-fullscreen">
				<ul className="k">
					{this.state.searchlist}
				</ul>
				</Scroller>
			</div>
		)
	}
	componentDidMount(){
		fetch('/api/shop/PageData/Product.ashx?t=0.7169888249561978&actType=GetCatalogNavigation')
			    .then(response=>response.text())
			   	.then(res=>{
					var data=eval(res)
			   		console.log(data)
			       let slist=data.map(val=>{
			       			return (<li className="search_list">{val.catalogName}</li>)
			       })
			       this.setState({     
			          searchlist: slist
			        })
		})
	}
}
module.exports=Kind;