import React,{ Component } from "react"
import Carousel from '../../component_dev/carousel/src/'
import Scroller from '../../component_dev/scroller/src/'
import fetchData from '../util/fetch'
var ReactDOM=require("react-dom");
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"首页",
			navlist1:'',
			navlist2:'',
			homelist:'',

		}
	}
	render(){
		return (
			<div className="home">
				<Scroller extraClass ="yo-scroller yo-scroller-fullscreen">
				<div className="home_scroll">
				<div className="home_swiper">
					<div>
						<Carousel autoplay={true}>	
							<a className="item">
								<img className="img" src="http://m.6688.com/img/newIndex/banner/banner-mmzlxiao.jpg"/>
							</a>
							<a className="item">
								<img className="img" src="http://m.6688.com/img/newIndex/banner/banner-nyryss.jpg"/>
							</a>
							<a className="item">
								<img className="img" src="http://m.6688.com/img/newIndex/banner/banner-gypyqm.jpg"/>
							</a>
							<a className="item">
								<img className="img" src="http://m.6688.com/img/newIndex/banner/banner-slxgxiao.jpg"/>
							</a>
						</Carousel>
					</div>
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
						{this.state.navlist1}
					</ul>
				</div>
				<div className="home_main">
					<div className="home_menu">
						<hr/><span>进店必败</span><hr/>
					</div>
					<ul>
						{this.state.homelist}
					</ul>
				</div>
				<div className="home_nav">
					<ul>
						{this.state.navlist2}
					</ul>
				</div>
				</div>
				</Scroller>
			</div>
		)
	}
	componentDidMount() {
    let url = '/api/shop/PageData/Product.ashx?t=0.7169888249561978&actType=GetCatalogNavigation'
    let url2= '/api/shop/PageData/Product.ashx?t=0.7169888249561978&actType=GetBiBaiGoodsListTop80'
    fetchData(url,function(res){
    	 var data=eval(res)
   		console.log(data)
        var list1=[],list2=[];
        for(var i=0;i<16;i++){
        	if(i<8){
        		list1.push({img:'http://m.6688.com/img/newIndex/201607/catalogNavigation/'+data[i].catalogName+'.jpg',catalogName:data[i].catalogName});
        	}else{
        		list2.push({img:'http://m.6688.com/img/newIndex/201607/catalogNavigation/'+data[i].catalogName+'.jpg',catalogName:data[i].catalogName});
        	}
        }
        let nlist1=list1.map(val=>{
          return (<li className="item"><img  src={val.img} /></li>)
        })
        let nlist2=list2.map(val=>{
          return (<li className="item"><img src={val.img} /></li>)
        })
        this.setState({
          navlist1: nlist1,
          navlist2: nlist2
        })
    }.bind(this))
	fetchData(url2,function(res){
		var data=eval(res)
   		console.log(data)
       let hlist=data.map(val=>{
       		return (<li className="home_list"><img src={val.goodsImg}/></li>)
       })
       this.setState({     
          homelist: hlist
        })
	}.bind(this))
  }
}
export default Home;