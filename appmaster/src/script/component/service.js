import React,{ Component } from "react"
<<<<<<< HEAD
import  {Link,hashHistory} from 'react-router'
import Modal from '../../component_dev/modal/src/'
=======
>>>>>>> master
var ReactDOM=require("react-dom");
class Service extends React.Component{
	constructor(props){
		super(props)
		this.state={
<<<<<<< HEAD
			title:"客服",
			show1:false,
			show2:false,
			name:'',
			phone:'',
			main:''
=======
			title:"客服"
>>>>>>> master
		}
	}
	render(){
		return (
<<<<<<< HEAD
			<div className="service">
				<div className="service_header">
					请留言,我们会尽快给您回复!
				</div>
				<div className="service_main">
					<form>
						<label>姓名</label>
						<input type="text" onChange={this.valChange.bind(this,"name")} placeholder="(必填)"/>
						<label>手机号码</label>
						<input type="tel" onChange={this.valChange.bind(this,"phone")} placeholder="(必填)"/>
						<label>电子邮件</label>
						<input type="email" autocomplete="off"/>
						<label>订单号</label>
						<input type="text"/>
						<label>留言主题:</label>
						<input type="text"/>
						<label className="textarea" >留言内容:</label>
						<textarea rows="3" onChange={this.valChange.bind(this,"main")} placeholder="(必填)"> 
						
						</textarea>
						<div className="submit">
							<button className="inputSure" onClick={this.isshow.bind(this,true)}>确定</button>
							<button className="inputFalse">取消</button>
						</div>
					</form>
				</div>
				<Modal show={this.state.show1} >
					<div >
						<img onClick={this.isshow.bind(this,false)} src="http://st16.live800.com/live800/chatClient/v5mobile/skin/common/closebtn.png"/>
						<p>您的留言我们已收到,正在处理中...</p>
					</div>
 				</Modal>
 				<Modal show={this.state.show2} >
					<div >
						<img onClick={this.isshowk.bind(this)} src="http://st16.live800.com/live800/chatClient/v5mobile/skin/common/closebtn.png"/>
						<p>必填项不能为空</p>
					</div>
 				</Modal>
			</div>
		)
	}
	valChange(type,evt){
		var val=evt.target.value
		if(type==="name"){
			this.setState({
				name:val
			})
		}else if(type==="phone"){
			this.setState({
				name:val
			})
		}else if(type==="main"){
			this.setState({
				main:val
			})
		}
	}
	isshow(show){
		var name=this.state.name;
		var main=this.state.main;
		var phone=this.state.phone;
		if(name!==''||main!==''||phone!==''){
			this.setState({
				show1:show
			})
		}else{
			if(show==true){
				this.setState({
					show2:true
				})
			}
		}
		if(show===false){
			this.setState({
				name:'',
				main:'',
				phone:''
			})
		}
	}
	isshowk(){
		this.setState({
			show2:false
		})
	}
=======
			<div>
				<div className="hh">客服</div>
			</div>
		)
	}
	
>>>>>>> master
}
export default Service;