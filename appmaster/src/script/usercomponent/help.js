import React,{ Component } from "react"
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/store'
import { Link, browserHistory } from 'react-router'


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
		            <span className="regret yo-ico" onClick={this.back}>&#xe639;</span>
	       		 </header>
	       		 <section>
	       		 	<div className="user-help">
						<ul>
							<li>
								<span>问：有货吗？</span>
								<p>答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。</p>
							</li>
							<li>
								<span>问：如何购买6688商城产品？</span>
								<p>答：登录www.6688.com搜索到您要订购的产品，点击“立即购买→继续购物 或 下一步→ 填写收货信息 → 选择 配送方式和支付方式 → 确认订单 → 去支付，即可，不用事先注册。</p>
							</li>
							<li>
								<span>问：6688商城所售商品都是正品行货吗？ </span>
								<p>答：6688商城所售商品全部是正牌商品，与亲临商场选购的商品享受同样的质量保证。详见售后服务说明</p>
							</li>
							<li>
								<span>问：下单后何时可以收到货？</span>
								<p>答：将根据您的收货地址及所选择的配送方式而不同，一般到货时间在3-7天，偏远地区配送时间可能会更长一些。</p>
							</li>
							<li>
								<span>问：快递费是多少？</span>
								<p>答：6688运费按产品来收取，不同产品运费收取不同，每个产品详细页都有“配送说明”请参考，谢谢！</p>
							</li>
							<li>
								<span>问：下单时可以指定送货时间吗？</span>
								<p>答：可以，您可以在订单留言里填写具体的送货需求，我们会尽量满足您的要求。</p>
							</li>
							<li>
								<span>问：哪些地区支持货到付款？</span>
								<p>答：6688商城已在多个省市开通了货到付款(其它城市正陆续开通)，不过，各个商户和产品略有差异，详细您可以查看该产品页下方的“配送说明”。</p>
							</li>
							<li>
								<span>问：收货时发现问题可以拒收吗？</span>
								<p>答：在签收货物时如发现货物有损坏，请直接拒收退回，相关人员将为您重新安排发货。</p>
							</li>
							<li>
								<span>问：下单后，我能做什么？</span>
								<p>答：如果是在线支付方式，请您尽快完成付款，待付款被确认后我们会立即为您发货。如果选择货到付款，您可以进入“我的帐户”，在“我的订单”中找到您的订单，然后可随时查看订单处理状态，做好收货准备。</p>
							</li>
							<li>
								<span>问：如何办理退款？多久退回？</span>
								<p>答：请在线或使用电话（4008676688）与客服联系，告诉要退款的相关信息。从受理到退回帐户一般需要2-4个工作日。</p>
							</li>
							<li>
								<span>问：如何办理退换货？</span>
								<p>答：关于退货：1、自客户签收商品之日起7日内，商品如有质量问题，可以退货，非质量问题只能调换。 2、套装商品不可部分退货。关于换货：1、自客户签收商品之日起15日内，商品如未经使用、损坏、拆装，可以换货。 2、非套装商品只能更换同一商户商品，不提供不同商户不同类商品的换货服务。套装商品可以部分或全部换货，但只能更换与原商品同样的商品。 详细信息请联系在线客服或者：4008676688或邮箱：service@6688.com </p>
							</li>
						</ul>
					</div>
	       		 </section>
			</div>
			
		)
	}
	
	back() {
   		 browserHistory.goBack()
  	}
	componentDidMount() {
	    let title = '帮助中心'
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