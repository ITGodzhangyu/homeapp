import React,{ Component } from "react"
import Carousel from '../../component_dev/carousel/src/'
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
				<div className="swiper">
					 <Carousel autoplay={false}>
					<img className="item" src="http://m.6688.com/img/newIndex/201607/promotion/promotion_01.png"/>
					<img className="item" src="http://m.6688.com/img/newIndex/201607/promotion/promotion_01.png"/>
					</Carousel>
				</div>
				<div className="home_promotion">
					<a href="#">
						<img src="http://m.6688.com/img/newIndex/201607/promotion/promotion_01.png"/>
					</a>
					<a href="#">
						<img src="http://m.6688.com/img/newIndex/201607/promotion/promotion_02.png"/>
					</a>
					<a href="#">
						<img src="http://m.6688.com/img/newIndex/201607/promotion/promotion_03.png"/>
					</a>
				</div>
				<div className="home_nav">
					<ul>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
					</ul>
					<ul>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
						<li>
							<img src="http://m.6688.com/img/newIndex/201607/catalogNavigation/鲜果.jpg"/>
						</li>
					
					</ul>
				</div>
				<div className="home_main">
					<ul>
						<li>
							<div className="home_list">
								home 1
							</div>
						</li>
						<li>
							<div className="home_list">
								home 2
							</div>
						</li>
						<li>
							<div className="home_list">
								home 3
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default Home;