import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'

class Help extends React.Component{
	constructor(props){
		super(props)
		this.state={
			title:"帮助中心"
		}
	}
	render(){
		return (
			<div className="main">
		          <header className="yo-header yo-header-c">
		            <p className="title">{this.props.value}</p>
		            <span className="regret yo-ico">&#xe639;</span>
	       		 </header>
	       		 <section>
	       		 	<div className="user-help">
						<ul>
							<li>
								<span>问：有货吗？</span>
								<p>答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。</p>
							</li>
							<li>
								<span>问：有货吗？</span>
								<p>答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。</p>
							</li>
							<li>
								<span>问：有货吗？</span>
								<p>答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。</p>
							</li>
							<li>
								<span>问：有货吗？</span>
								<p>答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。</p>
							</li>
						</ul>
					</div>
	       		 </section>
			</div>
			
		)
	}
	componentDidMount() {
	    let title = '我的收藏'
	    this.props.onChange({
	      type: 'SETTITLE',
	      title: title
	    })
	 }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Help)