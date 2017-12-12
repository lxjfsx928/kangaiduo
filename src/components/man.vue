<template>
	<div id="m-box">
		<!-- 头部 -->
		<header class="m-header">
			<div class="m-logo"><router-link  to="/index"></router-link></div>
			<span class="header-t">男科专题</span>
			<div class="header-r">
				<a class="header_ser" href="###"></a>
				<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">{{PersonalInfo.shoppingCar}}</span></router-link>
			</div>
		</header>
		<!-- header end -->
		<!-- nav -->
		<div class="m-nav">
			<ul class="swiper">
				<li class="licur"><span class="redbg"></span>肾虚肾亏</li>
				<li><span></span>阳痿早泄</li>
				<li><span></span>男性不育</li>
				<li><span></span>前列腺疾病</li>
				<li><span></span>泌尿疾病</li>
				<li><span></span>防脱发生发</li>
				<li><span></span>男性保健</li>
				<li><span></span>兴趣生活</li>
			</ul>
		</div>
		<!-- 内容 -->
		<div class="m-info">
			<div class="m-img">
				<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_01.jpg">
				<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_02.jpg">
				<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_03.jpg">
				<div class="rel">
					<ul class="clear">
						<li><a href="###"></a></li>
						<li><a href="###"></a></li>
						<li><a href="###"></a></li>
						<li><a href="###"></a></li>
					</ul>
					<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_04.jpg">
				</div>
				<div class="rel">
					<ul class="clear">
						<li><a href="###"></a></li>
						<li><a href="###"></a></li>
						<li><a href="###"></a></li>
						<li><a href="###"></a></li>
					</ul>
					<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_05.jpg">
				</div>
				<div class="clum" v-for="item in man">
					<!-- 肾虚 -->
					<img v-lazy=item.til>
					<div class="pro">
						<ul>
							<li v-for="item in item.data">
								<a href="###" class="pro_img"><img v-lazy=item.pic></a>
								<div class="pro_tet">
									<p class="name"><a href="###">{{item.name}}</a></p>
									<p class="price">
										<span class="new-price">￥{{item.price}}</span>
										<span class="older-price">￥{{item.olderPrice}}</span>
									</p>
								</div>
								<a href="###" class="miao-btn">立即购买</a>
							</li>							
						</ul>
						<div class="clear"></div>
					</div>
				</div>
				<router-link  to="/index"><img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_22.jpg"></router-link>
				<img src="http://res.360kad.com/theme/mobile/img/promotion/nanke/nanke_23.jpg">
			</div>
			<footer class="m-foot">
				<ul>
					<li><router-link  to="/enter">登录</router-link></li>
					<li><router-link  to="/register">注册</router-link></li>
					<li><router-link  to="/index">首页</router-link></li>
					<li><a href="###">下载客户端</a></li>
				</ul>
			</footer>
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
		name: 'man',
		data(){
			return {
				man: [],
				PersonalInfo: {},
			}
		},
		created(){
			$(window).scrollTop(0);
			this.$http.get("../../static/man.json", {
				params:{

				}
			}).then((res) =>{
				this.man = res.data;
				this.PersonalInfo = this.$store.getters.getPersonalInfo;
			})
		},
		methods:{
			imges(e){
				this.$http.get("../../static/man.json", {
					params:{
						 
					}
				}).then((res) =>{
					this.man = res.data
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
	/*--------------------------------------man-----------------------------------*/
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
	#m-box{
	    background-color: #fff;
	    width: 100%;
	    height: 100%;
	}
	.clear{
	    zoom: 1;
	    clear: both;
	}
	input,textarea{
		outline: none;
		border: none;
	}
	/*-----------------------------header-------------------------*/
	#m-box .m-header{
	    height: 1.34rem;
	    min-width: 6rem;
	    padding: .2rem .1rem .2rem .2rem;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	}
	#m-box .m-logo{
	    float: left;
	}
	#m-box .m-logo a{
	    display: block;
	    width: 1.88rem;
	    height: 1rem;
	    background: url(http://res2.360kad.com/theme/mobile/img/logo2.png) no-repeat;
	    background-size: 1.88rem .9rem;
	}
	#m-box .header-t{
	    padding-top: .25rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #000;
	    margin-right: .1rem;
	    display: inline-block;
	}
	#m-box .header-r{
	    float: right;
	    margin-right: .12rem;
	}
	#m-box .header_ser{
	     background: url(http://res4.360kad.com/theme/mobile/img/promotion/wapjuheye/search.png) no-repeat;
	    display: inline-block;
	    background-size: 21px 21px;
	    width: .56rem;
	    height: .68rem;
	    margin-top: .2rem;
	    margin-right: -0.1rem;
	    vertical-align: middle;
	}
	#m-box .header_shop{
	    background: url(http://res1.360kad.com/theme/mobile/img/gwuche.jpg) no-repeat 0px 0px;
	    display: inline-block;
	    color: #333;
	    background-size: 28px 23px;
	    position: relative;
	    height: 0.5rem;
	    line-height: .36rem;
	    font-size: .28rem;
	    padding-left: .78rem;
	    margin-bottom:0.02rem; 
	    vertical-align: middle;
	}
	#m-box .shop-num{
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
	#m-box .m-nav{
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
	#m-box .swiper{
	    width: 174%;
	    height: 100%;
	    z-index: 1;
	}
	#m-box .swiper li{
	    width: auto;
	    float: left;
	    text-align: center;
	    padding: 0 .2rem;
	    height: 100%;
	    position: relative;
	}
	#m-box .licur{
	    color: #823d13;
	}
	#m-box .redbg{
	    width: .24rem;
	    height: .28rem;
	    background: url(http://res.360kad.com/theme/mobile/img/promotion/myangshen/liact.png) no-repeat;
	    background-size: 100%;
	    display: inline-block;
	    margin-right: .08534rem;
	}
	/*-------------------------info----------------*/
	#m-box .m-info{
	    background-color: #92b8ff;
	}
	#m-box .m-img img{
	    display: block;
	    width: 100%;
	}
	#m-box .rel{
	    position:relative;
	}
	#m-box .rel ul{
	    height: 1.79rem;
	    width: 100%;
	    position: absolute;
	    left: 0;
	    top: 0;
	    z-index: 4;
	}
	#m-box .rel li{
	    height: 1.79rem;
	    float: left;
	    width: 24.5%;
	}
	#m-box .rel a{
	    display: block;
	    height: 1.79rem;
	    width: 100%;
	}
	#m-box .pro{
	    width: 97%;
	    margin: 0 auto;
	    padding-top: 0.15rem;
	}
	#m-box .pro li{
	    width: 49%;
	    float: left;
	    background-color: #ffffff;
	    margin-bottom: 0.15rem;
	}
	#m-box .pro li:nth-child(odd){
	    margin-right: 2%;
	}
	#m-box .pro_img{
	    padding: .2rem;
	    display: block;
	}
	#m-box .pro_tet{
	    width: 90%;
	    margin: 0 auto;
	}
	#m-box .name{
	    text-align: left;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	#m-box .name a{
	    font-size: 0.24rem;
	    color: #222;
	    line-height: 120%;
	}
	#m-box .price{
	    padding: 0.07rem 0;
	}
	#m-box .new-price{
	    color: #ff4040;
	    font-size: 0.24rem;
	}
	#m-box .older-price{
	    font-size: 0.2rem;
	    color: #888888;
	    text-decoration: line-through;
	    padding-left: 0.3rem;
	}
	#m-box .miao-btn{
	    display: block;
	    width: 95%;
	    height: 0.56rem;
	    background-color: #ff5c5c;
	    text-align: center;
	    line-height: 0.56rem;
	    color: #ffffff;
	    font-size: 0.26rem;
	    margin: 0 auto;
	    border-radius: 0.4rem;
	    margin-bottom: 0.15rem;
	}
	/*--------------footer------------------*/
	#m-box .m-foot{
	    height: 1.06rem;
	}
	#m-box .m-foot ul{
	    height: .44rem;
	    width: 3.4rem;
	    margin: 22px auto 0 auto;
	}
	#m-box .m-foot li{
	    float: left;
	    height: .44rem;
	    line-height: .44rem;
	    border-left: 1px solid #ffffff;
	    padding-left: .1rem;
	    padding-right: .1rem;

	}
	#m-box .m-foot li:first-of-type{
	    border-left:none;
	    padding-left:0; 
	}
	#m-box .m-foot li a{
	    display: block;
	    color: #fff;
	    font-size: .24rem;
	    height: .44rem;
	    line-height: .44rem;
	}
	#m-box .m-foot li:last-of-type{
	    padding-left:0.1rem; 
	}
</style>