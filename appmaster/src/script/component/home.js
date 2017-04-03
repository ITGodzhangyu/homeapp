import React,{ Component } from "react"
import Carousel from '../../component_dev/carousel/src/'
import List from '../../component_dev/scroller/src/'
import  {Link,hashHistory} from 'react-router'
import fetchData from '../util/fetch'
var ReactDOM=require("react-dom");
class Home extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"首页",
			navlist1:'',
			navlist2:'',
			homelist:[],
			updown:"home_up",
			zlen:50

		}
	}
	goup(){
		this.refs.scroller.scrollTo(0, 0, 300);
	}
	upshow(evt){
        var _h=evt.contentOffset.y
        if(_h>=-160){
        	document.getElementById("p").style.display="none";
        }else{
        	document.getElementById("p").style.display="block";
        }
	}
	render(){
		return (
			<div className="home">
					<div className={this.state.updown} id="p" onClick={this.goup.bind(this)}>
						<img src="http://m.6688.com/img/newIndex/201607/scroll-to-top-icon.png"/>
					</div>
				<List 
					extraClass ="yo-scroller yo-scroller-fullscreen" 
					onScroll={this.upshow} 
					ref="scroller"
				    usePullRefresh={true}
				    onRefresh={() => {
				    	this.setState({
				    		navlist1:'',
							navlist2:'',
							zlen:30,
							homelist:[]
				    	});	
				        this.fetchRefresh('./json/nav.json');
				        this.fetchLoad('./json/list.json',this.state.zlen);
				    	this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
    				}}
				    useLoadMore={true}
				    onLoad={() => {
				        this.fetchLoad('./json/list.json',this.state.zlen)
				        this.refs.scroller.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
				    }}
				    
				>
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
						{this.state.homelistf}
					</ul>
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
				</List>
			</div>
		)
	}
	fetchRefresh(url){
		fetchData(url,function(res){
	    	 var data=eval(res)
	        var list1=[],list2=[];
	        for(var i=0;i<16;i++){
	        	if(i<8){
	        		list1.push({img:'http://m.6688.com/img/newIndex/201607/catalogNavigation/'+data[i].catalogName+'.jpg',catalogName:data[i].catalogName});
	        	}else{
	        		list2.push({img:'http://m.6688.com/img/newIndex/201607/catalogNavigation/'+data[i].catalogName+'.jpg',catalogName:data[i].catalogName});
	        	}
	        }
	        let nlist1=list1.map(val=>{
	          return (<li className="item"><img  src={val.img}/></li>)
	        })
	        let nlist2=list2.map(val=>{
	          return (<li className="item"><img src={val.img}/></li>)
	        })
	        this.setState({
	          navlist1: nlist1,
	          navlist2: nlist2
	        })
    	}.bind(this))
	}
	fetchLoad(url,zle){
		fetchData(url,function(res){
		var data=eval(res)
			var klen=this.state.homelist.length;
			var len=data.length;
			var hlist=[];
			if(zle<=len){
				for(var i=klen;i<zle;i++){
	       			hlist.push(<Link to={`/detail/${data[i].Sn}`}><li className="home_list"><List.LazyImage src={data[i].goodsImg}/></li></Link>);
	       		}
			}else if(zle>=len&&(zle-50)<=len){
				for(var i=klen;i<len;i++){
	       			hlist.push(<Link to={`/detail/${data[i].Sn}`}><li className="home_list"><List.LazyImage src={data[i].goodsImg}/></li></Link>);
	       		}
			}
	       zle+=30;
	       var ulist=[];
	       this.state.homelist.map(val=>{
	       		ulist.push(val)
	       })
	       hlist.map(val=>{
	       		ulist.push(val)
	       })
       		this.setState({
          		homelist: ulist,
          		zlen:zle
        	})
		}.bind(this))
	}
	componentDidMount(){
    this.fetchLoad('./json/list.json',this.state.zlen)
   	this.fetchRefresh('./json/nav.json')
   
  }
}
export default Home;