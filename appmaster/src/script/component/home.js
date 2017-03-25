import React,{ Component } from "react"
var ReactDOM=require("react-dom");
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"首页"
		}
	}
	render(){
		return (
			<div className="home">
				<div className="swiper"></div>
				<ul>
					<li>
						<div className="homelist">
							home 1
						</div>
					</li>
					<li>
						<div className="homelist">
							home 2
						</div>
					</li>
					<li>
						<div className="homelist">
							home 3
						</div>
					</li>
				</ul>
			</div>
		)
	}
}
export default Home;