<template>
	<div id="allkind">
		<!-- 头部部分 -->
		<!-- 部件开始：header start -->
		<header class="n-header">
			<div class="n-logo"><router-link  to="/index"></router-link></div>
			<span class="header-t">全部分类</span>
			<div class="header-r">
				<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">{{PersonalInfo.shoppingCar}}</span></router-link>
			</div>
		</header>
		<!-- header end -->
		<!-- 搜索部件 -->
		<!-- 产品页搜索 -->
		<div class="n-clearfix clear">
			<div class="search-box">
				<form>
					<div class="search_l">
						<input type="text" name="pageText" class="search_text" value="六味地黄丸" maxlength="38"  @click="searc">
						<span class="relaicon" @click="searc"></span>
					</div>
					<div class="search_r">
						<a href="###">搜药</a>
					</div>
				</form>
			</div>
		</div>
		<!-- 分类 -->
		<div class="n-containall clear">
			<ul class="conainul clear">
				<li class="n_list" v-for="item in allkind">
					<div class="li_to"  @click="show">
						<div class="rgmess">
							<h2>{{item.til}}</h2>
							<p v-if="item.list.length >=3">{{item.list[0].name}}/{{item.list[1].name}}/{{item.list[2].name}}</p>
						</div>
					</div>
					<div class="fenlei clear hide">
						<!-- 部件开始 分组：类目部件 -->
						<router-link to="/shoppingList" v-for="item in item.list">{{item.name}}</router-link>
					</div>
				</li>
			</ul>
		</div>
		<!-- app下载 -->
		<div class="download_app">
			<div class="down_app">
				<div class="download-logo"></div>
				<div class="alogo">
					<p class="client-name">下载APP立送200元券</p>
					<p class="client-logon">一元秒杀  天天抢~</p>
		      	</div>
		      	<div class="open_now"><a href="###"><span>立即下载</span></a></div>
		      	<div class="close-btn-con">
			        <a href="###" class="close-btn-icon" @click="hide">x</a>
		      	</div>
			</div>
		</div>
		<!-- 底部 -->
		<footer class="n-footer clear">
			<div class="padd">
				<p class="padd_top" v-if="!isEnter">
					<span><router-link  to="/enter">登录</router-link></span>
					<span><router-link  to="/register">注册</router-link></span>
				</p>
				<p class="uselogo" v-else>
					<span>
						<a href="###">欢迎，<span class="user_name">k122271573490</span></a>
						<a href="###" class="user_b">退出</a>
					</span>
				</p>				
				<router-link  to="/index" class="backtp">首页</router-link>
			</div>
			<div class="fot clear">
				<ul>
					<li><a href="###">用药问答<span class="grycol">|</span></a></li>
					<li><a href="###">心愿单<span class="grycol">|</span></a></li>
					<li><a href="###">帮助<span class="grycol">|</span></a></li>
					<li><a href="###">反馈<span class="grycol">|</span></a></li>
					<li><a href="###">关于康爱多</a></li>
				</ul>
			</div>
			<div class="app_down">
				<a href="###"><p class="foot foorPHon"><span>400-8808-488</span></p></a>
				<a href="###"><p class="foot footwx"><span>关注康爱多微信立送200元</span></p></a>
			</div>
			<div class="app_down" id="app_dowml"><a href="###">下载iPhone客户端</a></div>
			<ul class="footmess clear">
				<li><span class="radius45">正</span>正品保障</li>
				<li><span class="radius45">隐</span>隐私配送</li>
				<li><span class="radius45">专</span>专业药师</li>
				<li><span class="radius45">付</span>货到付款</li>
			</ul>
			<p class="copyrg">copyright ©2010-2016 康爱多网上药店 版权所有</p>
		</footer>
	</div>
</template>
<script>
	export default {
		name: 'allkind',
		data(){
			return {
				allkind:[],
				PersonalInfo: {},
				isEnter:false
			}
		},
		created(){
			$(window).scrollTop(0);
			this.$http.get("../../static/allkind.json", {
				params:{

				}
			}).then((res) =>{
				this.allkind = res.data;
				this.isEnter = this.$store.getters.getIsEnter;
				this.PersonalInfo = this.$store.getters.getPersonalInfo;
			})
		},
		methods: {
			allkinds(e){
				this.$http.get("../../static/allkind.json", {
					params:{
						list: e.currentTarget.name
					}.then((res) =>{
						this.allkind = res.data;
					})
				})
			},
			show(e){
				var tag;
				tag = e.currentTarget.nextElementSibling;
				$(tag).toggleClass("hide").parent().siblings().find(".fenlei").addClass("hide");
				$(tag).siblings().toggleClass("li_topa").parent().siblings().find(".li_topa").removeClass("li_topa");
			},
			hide(e){
				var app = e.currentTarget;
				$(app).parents(".download_app").hide();
				$(".n-footer").css("paddingBottom", "0")
			},
			searc(){
				$(".search_text").val("");
			}
		}
	}
</script>
<style scoped>
	/*--------------------allkind----------------------*/
	#allkind {
	    background: #fff;
	    width: 100%;
	    color: #808080;
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
	#allkind .n-header{
	    height: 1.34rem;
	    min-width: 6rem;
	    padding: .2rem .1rem .2rem .2rem;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	}
	#allkind .n-logo{
	    float: left;
	}
	#allkind .n-logo a{
	    display: block;
	    width: 1.88rem;
	    height: 1rem;
	    background: url(http://res2.360kad.com/theme/mobile/img/logo2.png) no-repeat;
	    background-size: 1.88rem .9rem;
	}
	#allkind .header-t{
	    display: inline-block;
	    padding-top: .25rem;
	    font-size: .32rem;
	    color: #000000;
	    margin-right: .38rem;
	}
	#allkind .header-r{
	    float: right;
	    margin:.24rem 0.1rem 0 0; 
	}
	#allkind .header_shop{
	    display: block;
	    height: 0.44rem;
	    min-width: 0.26rem;
	    background: url(http://res1.360kad.com/theme/mobile/img/gwuche.jpg) no-repeat;
	    background-size: 0.56rem 0.46rem;
	    line-height: .32rem;
	    font-size: .24rem;
	    padding-left: .66rem;
	    position: relative;
	}
	#allkind .shop-num{
	    color:#fff;
	    background-color: #fc5353;
	    border-radius: 0.9rem;
	    position: absolute;
	    text-align: center;
	    padding: 0 .06rem;
	    max-width: .42rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-left: -0.24rem;
	    margin-top: -0.04rem;
	}
	/*-----------------------搜索框---------------------*/
	.n-clearfix{
	    margin: .3rem auto;
	    min-width: 6.4rem;
	    width: 100%;
	    height: .88rem;
	}
	.search-box{
	    margin: 0 .2rem;
	}
	.search_l{
	    display: inline-block;
	    width: 75%;
	    float: left;
	    z-index: 1;
	    position: relative;
	}
	.search_text{
	    color: #000;
	    width: 100%;
	    display: inline-block;
	    outline: none;
	    line-height: normal;
	    overflow: hidden;
	    text-indent: .2rem;
	    height: .8rem;
	    border: 1px solid #cccccc;
	    border-right: none;
	    border-radius: 0.1rem 0 0 0.1rem;
	    font-size: .28rem;
	}
	.relaicon{
	    display: block;
	    width: .44rem;
	    height: .44rem;
	    position: absolute;
	    right: .18rem;
	    top: .18rem;
	    background: url(http://res.360kad.com/theme/mobile/img/sear_clos.png) no-repeat;
	    background-size: .44rem;
	    cursor: pointer;
	}
	.search_r{
	    width: 25%;
	    float: right;
	    z-index: 1;
	    border-radius: 0 .1rem .1rem 0;
	}
	.search_r a{
	    display: inline-block;
	    width: 100%;
	    color: #FFFFFF;
	    text-align: center;
	    border: none;
	    background: #ff3333;
	    overflow: hidden;
	    height: 0.8rem;
	    line-height: 0.8rem;
	    border-radius: 0 .1rem .1rem 0;
	    font-weight: bold;
	}
	/*--------------------------分类----------------------*/
	.n-conaonul{
	    min-width: 6.4rem;
	    width: 100%;
	    border-top: 1px solid #d3d3d3;
	}
	.conainul{
	    list-style: none outside none;
	}
	.n_list{
	    border-bottom: 1px dashed #dfdfdf;
	}
	.li_to{
	    background: url(http://res2.360kad.com/theme/mobile/img/down_icona.png)no-repeat right center;
	    margin-right: .2rem;
	    background-size: .32rem .2rem;
	    color: #454545;
	}
	.rgmess{
	    margin-right:.4rem;
	    height: 1.18rem;
	    padding:  0.14rem 0.2rem;
	}
	.rgmess h2{
	    font-weight: bold;
	    font-size: 0.28rem;
	    line-height: 160%;
	}
	.rgmess p{
	    font-size: .24rem;
	    line-height: 160%;
	    color: #acacac;
	}
	.fenlei{
	    padding: .16rem 0 0 .14rem;
	    overflow: hidden;
	    border-top: 1px solid #d3d3d3;
	    background: #E3E3E3;
	}
	.hide{
	    display: none;
	}
	.li_topa{
	    background: url(http://res1.360kad.com/theme/mobile/img/up_icona.png)no-repeat right center;
	    margin-right: .2rem;
	    background-size: .32rem .2rem;
	    color: #1264ba!important;
	}
	.fenlei a{
	    width:31.43%;
	    height: 0.7rem;
	    line-height: 0.7rem;
	    display: block;
	    background-color: #fff;
	    margin: 0 .14rem .16rem 0;
	    border-radius: 0.1rem; 
	    text-align: center;
	    color: #454545;
	    font-size: 0.24rem;
	    float: left;
	}
	/*--------------------app---------------------*/
	.download_app{
	    width: 100%;
	    position: fixed;
	    bottom: 0;
	    z-index: 99999;
	   /* display: none;*/
	}
	@media screen and (max-width: 9.58rem) and (min-width: 6.4rem){
	    #down_app {
	        font-size: 0.28rem;
	    }
	    .download-app .down_app {
	        height: 1.4rem;
	        line-height: 1.4rem;
	    }
	}
	.download_app .down_app{
	    width: 100%;
	    margin: 0 auto;
	    min-width: 6.4rem;
	    vertical-align: bottom;
	    background: rgba(77,77,88,0.85);
	    display: block;
	    position: relative;
	    height: 1.4rem;
	    line-height: 1.4rem;
	}
	.download_app .download-logo{
	    width: .77968rem;
	    height: .77968rem;
	    background: url(http://res4.360kad.com/theme/mobile/img/app_icon3.png) no-repeat;
	    background-size: 100% 100%;
	    display: inline-block;
	    vertical-align: middle;
	    margin-left: 0.2996rem;
	}
	.download_app .alogo{
	    display: inline-block;
	    line-height: .336rem;
	    vertical-align: middle;
	    margin-left: .1988rem;
	}
	.download_app .client-name{
	    color: #FFF;
	    font-size: .252rem;
	}
	.download_app .client-logon{
	    color: #FFF;
	    font-size: .2604rem;
	}
	.download_app .open_now{
	    display: inline-block;
	    vertical-align: middle;
	    margin-right: .548rem;
	    float: right;
	}
	.open_now a{
	    color: #7d7d7d;
	}
	.download_app .open_now span{
	    background-color: #FFF;
	    vertical-align: middle;
	    text-align: center;
	    padding: .1148rem;
	    border-radius: .084rem;
	}
	.close-btn-con{
	    position: absolute;
	    right: 0;
	    top: 0;
	    background-color: #1c1c1f;
	    width: .35rem;
	    height: .35rem;
	    display: block;
	    border-bottom-left-radius: .35rem;
	}
	.close-btn-icon{
	    width: .19875rem;
	    height: .19875rem;
	    background: url(http://res4.360kad.com/theme/mobile/img/close-icon.png) no-repeat;
	    background-size: 100% 100%;
	    display: inline-block;
	    position: absolute;
	    right: 3px;
	    top: 3px;
	}
	/*----------------------footer-------------------------*/
	.uselogo a{
		display: inline-block;
    	float: left;
    	color: #1b7ce3;
    	font-size: .28rem;
		padding-right: .1rem;
	}
	#allkind .uselogo .user_b{
		margin-left: .16rem;
    	color: #FF5500;
    	display: inline-block;
	}
	#allkind .n-footer{
	    min-width: 6.4rem;
	    width: 100%;
	    margin: 0 auto;
	    height: auto;
	    text-align: center;
	    padding-bottom: 1.15rem;
	}
	#allkind .padd{
	    padding: .34rem .22rem 0 .22rem;
	    line-height: 195%;
	    height: .88rem;
	}
	#allkind .padd p{
	    float: left;
	    display: inline-block;
	}
	#allkind .padd span{
	    display: inline-block;
	    margin-right: 0.1rem; 
	}
	#allkind .padd span a{
	    display: inline-block;
	    color: #1b7ce3;
	    font-size: .28rem;
	}
	#allkind .backtp{
	    display: inline-block;
	    float: right;
	    color: #7d7d7d;
	    background: url(http://res2.360kad.com/theme/mobile/img/shouye.png) no-repeat left;
	    background-size: .34rem .3rem;
	    text-indent: 0.4rem;
	    font-size: .28rem
	}
	#allkind .fot{
	    margin: 0 auto;
	    width: 100%;
	    line-height: 200%;
	    font-size: .24rem;
	}
	#allkind .fot ul{
	    display: inline-block;
	    margin: 0 auto;
	    text-align: center;
	}
	#allkind .fot li{
	    float: left;
	}
	#allkind .fot li a{
	    display: inline-block;
	    padding: 0 0.08rem;
	    color: #b8b8b8;
	}
	#allkind .grycol{
	    padding-left: .06rem;
	    display: inline-block;
	    margin-left: .08rem;
	}
	#allkind .app_down{
	    max-width: 12.8rem;
	    min-width: 6.4rem;
	    width: 100%;
	    margin: 0 auto;
	}
	#allkind .app_down a{
	    display: block;
	    margin: 0 auto .2rem;
	    padding-bottom: 0;
	}
	#allkind .foot{
	    width: 5rem;
	    height: .6rem;
	    line-height: .6rem;
	    border-radius: .1rem;
	    margin: 0 auto;
	    color: #fff;
	}
	#allkind .foorPHon{
	    font-size: .3rem;
	    background: #97cc74 url(http://res3.360kad.com/theme/mobile/img/phone0910.png)no-repeat 24% center;
	    background-size: .48rem .6rem;
	}
	#allkind .foorPHon span{
	    margin-left: 0.8rem;
	}
	#allkind .footwx{
	    font-size: .24rem;
	    background: #3cb034 url(http://res4.360kad.com/theme/mobile/img/wxlogo.png) no-repeat 8% center;
	    background-size: .56rem .46rem;
	}
	#allkind #allkind .footwx span{
	    margin-left: .7rem;
	}
	#allkind #app_dowml{
	    font-size: .26rem;
	    line-height: 150%;
	}
	#app_dowml a{
	    color: #ff5500;
	}
	#allkind .app_down a{
	    width: 93.75%;
	}
	#allkind .footmess{
	    display: inline-block;
	    margin: 0 auto;
	    font-size: .24rem;
	    line-height: 170%;
	}
	#allkind .footmess li{
	    display: inline-block;
	    float: left;
	    margin-right: .1rem;
	}
	#allkind .radius45{
	    display: inline-block;
	    background: #1b7ce3;
	    border-radius: 50%;
	    color: #fff;
	    margin-right: .08rem;
	    padding: 0 .06rem;
	}
	#allkind .copyrg{
	    margin-bottom: .4rem;
	    font-size: .24rem;
	    line-height: 190%;
	}
</style>