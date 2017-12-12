<template>
	<div id="y-box">
		<!-- 头部 -->
		<header class="y-header">
			<div class="y-logo"><router-link  to="/index"></router-link></div>
			<span class="header-t">妇科专题</span>
			<div class="header-r">
				<a class="header_ser" href="###"></a>
				<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">{{PersonalInfo.shoppingCar}}</span></router-link>
			</div>
		</header>
		<!-- header end -->
		<!-- nav -->
		<div class="m-nav">
			<ul class="swiper">
				<li class="licur"><span class="redbg"></span>减肥</li>
				<li><span></span>更年期</li>
				<li><span></span>阴道炎</li>
				<li><span></span>月经不调</li>
				<li><span></span>避孕药</li>
				<li><span></span>乳腺增生</li>
				<li><span></span>色斑</li>
				<li><span></span>气血双补</li>
				<li><span></span>白带异常</li>
				<li><span></span>痛经</li>
				<li><span></span>贫血</li>
				<li><span></span>子宫肿瘤</li>
			</ul>
		</div>
		<!-- 内容 -->
		<div class="y-info">
			<!-- 头部宣传 -->
			<div class="tb">
				<img src="http://res3.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img1.jpg" alt="">
				<img src="http://res4.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img2.jpg" alt="">
			</div>
			<!-- 频道宣传 -->
			<div class="pd">
				<div class="pd_one">
					<a href="###"></a>
					<a href="###"></a>
					<a href="###"></a>
					<a href="###"></a>
					<img src="http://res1.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img3.jpg" alt="">
				</div>
				<div class="pd_two">
					<a href="###"></a>
					<a href="###"></a>
					<a href="###"></a>
					<a href="###"></a>
					<img src="http://res4.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img4.jpg" alt="">
				</div>
				<div class="pd_three">
					<a href="###"></a>
					<a href="###"></a>
					<a href="###"></a>
					<a href="###"></a>
					<img src="http://res1.360kad.com/theme/zhuanti/m/promotions/m_fuke/images/img5.jpg" alt="">
				</div>
			</div>
			<!-- 减肥 -->
			<div class="lose-wei" v-for="item in woman">
				<div class="clum"><img v-lazy=item.til></div>
				<div class="drug">
					<ul class="drug_item clear">
						<li v-for="item in item.data">
							<a href="###" class="pro_img"><img class="img" v-lazy=item.pic></a>
							<div class="pro_tet">
								<p class="pro-name text-elli">{{item.name}}</p>
								<p class="pro-adv text-elli">{{item.adv}}</p>
								<p class="price">
									<span class="new-price">￥{{item.price}}</span>起
									<span class="older-price">￥{{item.olderPrice}}</span>
								</p>
							</div>
							<a href="###" class="miao-btn">立即购买</a>
						</li>
					</ul>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<div class="mtp">
			<span class="tt" @click="service"><img src="http://res1.360kad.com/theme/mobile/img/promotion/zttq/ico-mtq.png" ></span>
			<span class="ico-mtq kf"><a href="###"><img src="http://res4.360kad.com/theme/mobile/img/promotion/zttq/ico-mtq-kf.png"></a></span>
			<span class="ico-mtq kf"><a href="###"><img src="http://res2.360kad.com/theme/mobile/img/promotion/zttq/ico-mtq-phone.png"></a></span>
			<span class="ico-mtq kf" @click="close"><a href="###"><img src="http://res2.360kad.com/theme/mobile/img/promotion/zttq/ico-mtq-close.png" alt="" style=""></a></span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'woman',
		data(){
			return {
				woman: [],
				PersonalInfo: {}
			}
		},
		created(){
			$(window).scrollTop(0);
			this.$http.get("../../static/woman.json", {
				params:{}
			}).then((res) =>{
				this.woman = res.data;
				this.PersonalInfo = this.$store.getters.getPersonalInfo;
			})
		},
		methods: {
			sex(e){
				this.$http.get("../../static/woman.json", {
					params:{}
				}).then((res) =>{
					this.woman = res.data
				})
			},
			service(){
				$(".tt img").hide();
				$(".kf").show();
			},
			close(){
				$(".kf").hide();
				$(".tt img").show();
			}
		}
	}
</script>
<style scoped>
	/*-----------------------------------------woman--------------------------*/
	#y-box{
	    background-color: #fff;
	    width: 100%;
	    height: 100%;
	}
	.clear{
	    zoom: 1;
	    clear: both;
	}
	.mtp{
	    width: 14.6%;
	    position: fixed;
	    left: 1%;
	    bottom: 15%;
	    z-index: 99;
	}
	.mtp img{
		width: 100%;
	}
	.mtp .ico-mtq{
		display: none;
	}
	input,textarea{
		outline: none;
		border: none;
	}
	/*-----------------------------header-------------------------*/
	#y-box .y-header{
	    height: 1.34rem;
	    min-width: 6rem;
	    padding: .2rem .1rem .2rem .2rem;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	}
	#y-box .y-logo{
	    float: left;
	}
	#y-box .y-logo a{
	    display: block;
	    width: 1.88rem;
	    height: 1rem;
	    background: url(http://res2.360kad.com/theme/mobile/img/logo2.png) no-repeat;
	    background-size: 1.88rem .9rem;
	}
	#y-box .header-t{
	    padding-top: .25rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #000;
	    margin-right: .1rem;
	    display: inline-block;
	}
	#y-box .header-r{
	    float: right;
	    margin-right: .12rem;
	}
	#y-box .header_ser{
	     background: url(http://res4.360kad.com/theme/mobile/img/promotion/wapjuheye/search.png) no-repeat;
	    display: inline-block;
	    background-size: 21px 21px;
	    width: .56rem;
	    height: .68rem;
	    margin-top: .22rem;
	    margin-right: -0.1rem;
	    vertical-align: middle;
	}
	#y-box .header_shop{
	    background: url(http://res1.360kad.com/theme/mobile/img/gwuche.jpg) no-repeat 0px 0px;
	    display: inline-block;
	    color: #333;
	    background-size: 28px 23px;
	    position: relative;
	    height: 0.5rem;
	    line-height: .36rem;
	    font-size: .28rem;
	    padding-left: .78rem;
	    margin-top: .06rem;
	    vertical-align: middle;
	}
	#y-box .shop-num{
	    color:#fff;
	    background-color: #fc5353;
	    border-radius: 0.9rem;
	    position: absolute;
	    text-align: center;
	    padding: 0 .04rem;
	    max-width: .5rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-left: -0.32rem;
	    margin-top: -0.04rem;
	}
	/*----------------nav----------------------*/
	#y-box .m-nav{
	    width: 100%;
	    height: .92rem;
	    line-height: .92rem;
	    color: #343434;
	    font-size: .28rem;
	    background-color: white;
	    border-bottom: 1px solid #dddbdb;
	    z-index: auto;
	    position: static;
	    left: auto;
	    top: auto;
	    overflow-x: scroll;
	}
	.m-nav::-webkit-scrollbar {display:none}
	#y-box .swiper{
	    width: 207%;
	    height: 100%;
	    z-index: 1;
	}
	#y-box .swiper li{
	    width: auto;
	    float: left;
	    text-align: center;
	    padding: 0 .2rem;
	    height: 100%;
	    position: relative;
	}
	#y-box .licur{
	    color: #823d13;
	}
	#y-box .redbg{
	    width: .24rem;
	    height: .28rem;
	    background: url(http://res.360kad.com/theme/mobile/img/promotion/myangshen/liact.png) no-repeat;
	    background-size: 100%;
	    display: inline-block;
	    margin-right: .08534rem;
	}
	/*-------------------info-----------------*/
	#y-box .y-info{
	    background-color: #ffe8ef;
	    width: 100%;
	}
	#y-box .y-info img{
	    display: block;
	    width: 100%;
	    height: auto;
	    border: none;
	}
	#y-box .pd_one,.pd_two,.pd_three{
	    width: 100%;
	    position: relative;
	}
	#y-box .pd a{
	    display: block;
	    position: absolute;
	}
	/*-----------pd_one----------*/
	.pd_one a:first-of-type{
	    width: .98rem;
	    height: 1.4rem;
	    top: .4rem;
	    left: .47rem;
	}
	.pd_one a:nth-child(2){
	    width: 1.04rem;
	    height: 1.4rem;
	    top: .4rem;
	    left: 2.25rem;
	}
	.pd_one a:nth-child(3){
	    width: 1.04rem;
	    height: 1.40rem;
	    top: .4rem;
	    right: 2.34rem;
	}
	.pd_one a:last-of-type{
	    width: 1.11rem;
	    height: 1.4rem;
	    top: .4rem;
	    right: .4rem;
	}
	/*-----------pd_two---------*/
	.pd_two a:first-of-type{
	    width: .98rem;
	    height: 1.37rem;
	    top: .35rem;
	    left: .47rem;
	}
	.pd_two a:nth-child(2){
	    width: 1.27rem;
	    height: 1.37rem;
	    top: .35rem;
	    left: 2.19rem;
	}
	.pd_two a:nth-child(3){
	    width: .98rem;
	    height: 1.37rem;
	    top: .35rem;
	    right: 2.42rem;
	}
	.pd_two a:last-of-type{
	    width: 1.16rem;
	    height: 1.45rem;
	    top: .35rem;
	    right: .41rem;
	}
	/*-----------pd_three----------*/
	.pd_three a:first-of-type{
	    width: 1.24rem;
	    height: 1.43rem;
	    top: .20rem;
	    left: .30rem;
	}
	.pd_three a:nth-child(2){
	    width: .98rem;
	    height: 1.43rem;
	    top: .20rem;
	    left: 2.25rem;
	}
	.pd_three a:nth-child(3){
	    width: 1.22rem;
	    height: 1.43rem;
	    top: .20rem;
	    right: 2.24rem;
	}
	.pd_three a:last-of-type{
	    width: 1.02rem;
	    height: 1.43rem;
	    top: .20rem;
	    right: .48rem;
	}
	/*-------------图片列表-----------*/
	.drug{
	    width: 100%;
	}
	.drug_item{
	    width: 100%;
	}
	.drug_item li{
	    width: 48%;
	    background-color: #fff;
	    float: left;
	    margin-left: .1rem;
	    margin-top: .1rem;
	}
	.pro_img{
	    padding: 15%;
	    display: block;
	    text-align: center;
	}
	.text-elli{
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.pro-name{
	    font-size: .24rem;
	    margin-left: .2rem;
	    color: #222222;
	    margin-bottom: .04rem;
	}
	.pro-adv{
	    font-size: .22rem;
	    margin-left: .2rem;
	    color: #ababab;
	    margin-bottom: .19rem;
	}
	.price{
	    font-size: .18rem;
	    color: #9b9b9b;
	    margin-left: .2rem;
	    margin-bottom: .19rem;
	}
	.new-price{
	    font-size: .26rem;
	    color: #ff4040;
	}
	.older-price{
	    font-size: .2rem;
	    color: #d2d2d2;
	    margin-left: .26rem;
	    text-decoration: line-through;
	}
	.miao-btn{
	    display: block;
	    width: 3.20rem;
	    height: .56rem;
	    border-radius: .26rem;
	    color: #ffffff;
	    font-size: .26rem;
	    text-align: center;
	    line-height: .56rem;
	    background-color: #ff5c5c;
	    margin-left: .2rem;
	    margin-bottom: .23rem;
	}
</style>