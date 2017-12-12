<template>
	<div id="w-box">
		<!-- 头部 -->
		<header class="w-header">
			<div class="w-logo"><router-link  to="/index"></router-link></div>
			<span class="header-t">自助找药</span>
			<div class="header-r">
				<a class="header_ser" href="###"></a>
				<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">{{PersonalInfo.shoppingCar}}</span></router-link>
			</div>
		</header>
		<!-- header end -->
		<!-- 导航菜单 -->
		<div class="w-nav clear">
			<ul>
				<li class="fir_nav"><a href="###">按人群<span>|</span></a></li>
				<li><a href="###">按科室<span>|</span></a></li>
				<li><a href="###">按品牌</a></li>
			</ul>
		</div>
		<div id="a_box">
			<!-- 男人 -->
			<div class="w-info clear" id="coman">
				<div class="coning">
					<img src="http://res3.360kad.com/theme/mobile/img//back_man.png">
				</div>
				<div class="w-contain_nav">
					<div>
						<a href="###" class="contain_fir">男人</a>
						<a href="###" @click="wom">女人</a>
						<a href="###" @click="all">综合</a>
					</div>
				</div>
				<div class="conmass">
			        <span class="select0" @click="cik">头部</span>
			        <span class="select1" @click="cik">脸部</span>
			        <span class="select2" @click="cik">肚子</span>
			        <span class="select3" @click="cik">肝</span>
			        <span class="select4" @click="cik">生殖器</span>
			        <span class="select5" @click="cik"> <i>生殖性病</i></span>
			        <span class="select6" @click="cik">性生活</span>
			        <span class="select7" @click="cik">脚</span>
			        <span class="select8" @click="cik">肾</span>
			        <span class="select9" @click="cik"> <i>泌尿系统</i></span>
			        <span class="select10" @click="cik">前列腺</span>
			        <span class="select11" @click="cik">腋下</span>
			        <span class="select12" @click="cik">鼻子</span>
			    </div>
			</div>
			<!-- 女人 -->
			<div class="w-info clear" id="noman">
				<div class="coning">
					<img src="http://res1.360kad.com/theme/mobile/img//back_woman.png">
				</div>
				<div class="w-contain_nav">
					<div>
						<a href="###" @click="mans">男人</a>
						<a href="###"  class="contain_fir">女人</a>
						<a href="###" @click="all">综合</a>
					</div>
				</div>
				<div class="woman">
			        <span class="select0" @click="cik">头部</span>
			        <span class="select1" @click="cik">脸部</span>
			        <span class="select2" @click="cik">子宫</span>
			        <span class="select3" @click="cik">生殖器</span>
			        <span class="select4" @click="cik"><i>生殖性病</i></span>
			        <span class="select5" @click="cik">性生活</span>
			        <span class="select6" @click="cik">肾</span>
			        <span class="select7" @click="cik">肚子</span>
			        <span class="select8" @click="cik">手</span>
			        <span class="select9" @click="cik">胸部</span>
			    </div>
			</div>
			<!-- 综合 -->
			<div class="w-info clear" id="conall">
				<div class="coning">
					<img src="http://res1.360kad.com/theme/mobile/img//back_znhe.png">
				</div>
				<div class="w-contain_nav">
					<div>
						<a href="###" @click="mans">男人</a>
						<a href="###" @click="wom">女人</a>
						<a href="###" class="contain_fir">综合</a>
					</div>
				</div>
				<div class="mconmass">
				    <span class="select0" @click="cik">眼睛</span>
				    <span class="select1" @click="cik">口</span>
				    <span class="select2" @click="cik">鼻子</span>
				    <span class="select3" @click="cik">耳朵</span>
				    <span class="select4" @click="cik"><i>呼吸系统</i></span>
				    <span class="select5" @click="cik">肠胃道</span>
				    <span class="select6" @click="cik">脚</span>
				    <span class="select7" @click="cik">头部</span>
				    <span class="select8" @click="cik">颈部</span>
				    <span class="select9" @click="cik">皮肤</span>
				    <span class="select10" @click="cik">心</span>
				    <span class="select11" @click="cik">血液</span>
				    <span class="select12" @click="cik">腰</span>
				    <span class="select13" @click="cik">腿</span>
				</div>
			</div>
		</div>
		<!-- 筛选条件 -->
		<!-- 头部 -->
		<div class="condition0 clear hd">
			<ul class="conainul">
				<li class="fatherli" v-for="item in seek">
					<span class="fonblue">{{item.til}}</span>
					<div class="fen">
						<div><a href="###" v-for="item in item.all">{{item.name}}</a></div>								
					</div>
					<div class="father" v-for="item in item.list"><span><a href="###">{{item.name}}</a></span></div>	
				</li>
			</ul>
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
				<a href="###"><p class="foot footwx"><span>微信下单专享50元限时特惠</span></p></a>
			</div>
			<ul class="footmess clear">
				<li><span class="radius45">正</span>正品保障</li>
				<li><span class="radius45">隐</span>隐私配送</li>
				<li><span class="radius45">专</span>专业药师</li>
				<li><span class="radius45">付</span>货到付款</li>
			</ul>
			<p class="copyrg">copyright ©2010-2016 康爱多网上药店 版权所有</p>
		</footer>
		<div class="black" @click="hide"></div>
	</div>
</template>
<script>
	export default {
		name: 'seek',
		data(){
			return {
				seek: [],
				PersonalInfo: {},
				isEnter:false,
			}
		},
		created(){
			$(window).scrollTop(0);
			this.$http.get("../../static/seek.json",{
				params:{
					
				}
			}).then((res) =>{
				this.seek = res.data;
				this.isEnter = this.$store.getters.getIsEnter;
				this.PersonalInfo = this.$store.getters.getPersonalInfo;
			})
		},
		methods:{
			medicine(e){
				this.$http.get("../../static/seek.json",{
					params:{
						list: e.currentTarget.name,
						all: e.currentTarget.name
					}.then((res)=>{
						this.seek = res.data
				
					})					
				})
			},
			cik(){
				$(".condition0, .black").show();
			},
			hide(){
				$(".condition0, .black").hide()
			},
			mans(){
				$("#coman").show().siblings().hide();
			},
			wom(){
				$("#noman").show().siblings().hide();
			},
			all(){
				$("#conall").show().siblings().hide();
			}
		}
	}
</script>
<style scoped>
	/*-----------------------------------seek--------------------------------------*/
	#w-box{
	    background-color: #fff;
	    width: 100%;
	    height: 100%;
	}
	#w-box a{
	    color: #7d7d7d;
	}
	.clear{
	    zoom: 1;
	    clear: both;
	}
	input,textarea{
		outline: none;
		border: none;
	}
	/*-----------------遮幕--------------*/
	.black{
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    left: 0;
	    top: 0;
	    z-index: 10;
	    background-color: rgba(0,0,0,.3);
	    display: none;
	}
	/*-----------------------------header-------------------------*/
	#w-box .w-header{
	    height: 1.34rem;
	    min-width: 6rem;
	    padding: .2rem .1rem .2rem .2rem;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	}
	#w-box .w-logo{
	    float: left;
	}
	#w-box .w-logo a{
	    display: block;
	    width: 1.88rem;
	    height: 1rem;
	    background: url(http://res2.360kad.com/theme/mobile/img/logo2.png) no-repeat;
	    background-size: 1.88rem .9rem;
	}
	#w-box .header-t{
	    padding-top: .25rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #000;
	    margin-right: .1rem;
	    display: inline-block;
	}
	#w-box .header-r{
	    float: right;
	    margin-right: .12rem;
	}
	#w-box .header_ser{
	    background: url(http://res4.360kad.com/theme/mobile/img/search0918.png)no-repeat left center;
	    display: inline-block;
	    background-size: .64rem .5rem !important;
	    width: .64rem;
	    height: .68rem;
	    margin-top: .16rem;
	    margin-right: -0.1rem;
	}
	#w-box .header_shop{
	    background: url(http://res1.360kad.com/theme/mobile/img/gwuche.jpg) no-repeat 0px 0px;
	    display: inline-block;
	    color: #333;
	    background-size: 0.76rem 0.5rem;
	    position: relative;
	    height: 0.5rem;
	    line-height: .36rem;
	    font-size: .28rem;
	    padding-left: .78rem;
	    margin-bottom:0.02rem; 
	}
	#w-box .shop-num{
	    color:#fff;
	    background-color: #fc5353;
	    border-radius: 0.9rem;
	    position: absolute;
	    text-align: center;
	    padding: 0 .04rem;
	    max-width: .5rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-left: -0.22rem;
	    margin-top: -0.04rem;
	}
	/*----------------------nav---------------------*/
	.w-nav{
	    min-width: 6.4rem;
	    max-width: 12.8rem;
	    width: 100%;
	    margin: 0 auto;
	}
	.w-nav ul{
	    display: -webkit-box;
	}
	.w-nav li{
	    -webkit-box-flex: 1;
	    display: block;
	    width: 0;
	    text-align: center;
	    color: #454545;
	}
	#w-box .w-nav .fir_nav a{
	    color: #1264ba;
	}
	.w-nav li a{
	    display: block !important;
	    padding: 0.34rem 0 0.06rem 0;
	    height: .88rem;
	    font-size: .36rem;
	}
	.w-nav li span{
	    float: right;
	    color: #d1d1d1;
	}
	/*-------------------info---------------------*/
	.w-info{
	    margin-top: .02rem;
	    min-width: 6.4rem;
	    max-width: 612.8rem;
	    width: 100%;
	    margin: 0 auto;
	    position: relative;
	}
	.coning img{
	    display: block;
	    width: 100%;
	}
	.w-contain_nav{
	    width: 54%;
	    margin: 0 auto;
	    height: 9.8%;
	    position: absolute;
	    top: 3%;
	    left: 21.3281%;
	}
	.w-contain_nav div{
	    display: -webkit-box;
	    height: 98%;
	}
	.w-contain_nav  a{
	    font-size: .3rem;
	    line-height: 350%;
	    display: block;
	    -webkit-box-flex: 1;
	    width: 0;
	    text-align: center;
	    border-radius: 50%;
	    margin-left: 8%;
	    background: #f8f8f8;
	}
	#w-box .w-contain_nav div .contain_fir{
	    color: #fff;
	    background-color: #dbdbdb;
	}
	.conmass span,.woman span,.mconmass span{
	    display: block;
	    position: absolute;
	    border-radius: 50%;
	    width: 1.0826rem;
	    height: 1.0828rem;
	    border: 1px solid #fff;
	    background: #bfe1e4;
	    text-align: center;
	    color: #808080;
	    font-size: .28rem;
	    line-height: 1.0828rem;
	}
	/*-------------男人-----------------------*/
	#coman{
	    /*display: none;*/
	}
	.select5 i,.select9 i,.woman .select4 i,.mconmass .select4 i{
	    display: block;
	    width: 70%;
	    margin: 0 auto;
	    margin-top: .288rem;
	    line-height: .32rem;
	    font-style: normal;
	}
	.select0,.select1,.select2,.select3,.select4,.conmass .select5{
	    left: 4.6875%;
	}
	.conmass .select0{
	    top: 12.7682%;
	}
	.conmass .select1{
	    top: 25%;
	}
	.conmass .select2{
	    top: 37.8752%;
	}
	.conmass .select3{
	    top: 50.31%;
	}
	.conmass .select4{
	    top: 62.872%;
	}
	.conmass .select5{
	    top: 75.214%;
	}
	.conmass .select6{
	    top: 87.23167%;
	    left: 16.875%;
	}
	.conmass .select7{
	    top: 86.802575%;
	    left: 68.59375%;
	}
	.select8,.select9,.select10,.select11,.select12{
	    right: 4.6875%;
	}
	.conmass .select8{
	    top: 75.536481%;
	}
	.conmass .select9{
	    top: 59.65665%;
	}
	.conmass .select10{
	    top: 44.0987%;
	}
	.conmass .select11{
	    top: 28.9699%;
	}
	.conmass .select12{
	    top: 13.5193%;
	}
	/*----------------女人-----------------*/
	#noman{
	    display: none;
	}
	.woman .select0,.woman .select1,.woman .select2,.woman .select3,.woman .select4{
	    left: 5.3215%;
	}
	.woman .select0{
	    top: 12.23176%;
	}
	.woman .select1{
	    top: 28.387%;
	}
	.woman .select2{
	    top: 43.7768%;
	}
	.woman .select3{
	    top: 59.65665%;
	}
	.woman .select4{
	    top: 75%;
	}
	.woman .select5,.woman .select6{
	    right: 4.6875%;
	}
	.woman .select5{
	    top: 84.12%;
	}
	.woman .select6{
	    top: 70.1717%;
	}
	.woman .select7{
	    top: 56.33%;
	    right: 3.2875%;
	}
	.woman .select8{
	    top: 43.512%;
	}
	.woman .select9{
	    top: 28.73%;
	}
	/*-----------综合-----------*/
	#conall{
	    display: none;
	}
	.mconmass .select0{
	    top: 12.875534%;
	}
	.mconmass .select1{
	    top: 25.429%;
	}
	.mconmass .select2{
	    top: 37.8755%;
	}
	.mconmass .select3{
	    top: 50.32188%;
	}
	.mconmass .select4{
	    top: 62.66%;
	}
	.mconmass .select5{
	    top: 75.53648%;
	    left: 4.6875%;
	}
	.mconmass .select6{
	    top: 87.661%;
	    left: 4.6875%;
	}
	.mconmass .select7{
	    top: 13.09%;
	    right: 4.6875%;
	}
	.mconmass .select8{
	    top: 25.107%;
	}
	.mconmass .select9{
	    top: 37.9828%;
	    right: 4.1%;
	}
	.mconmass .select10{
	    top: 50.42918%;
	    right: 4.1%;
	}
	.mconmass .select11{
	    top: 62.768%;
	}
	.mconmass .select12{
	    top: 75.3218%;
	}
	.mconmass .select13{
	    top: 87.9828%;
	    right: 4.6875%;
	}
	/*-----------------筛选条件-----------------------*/
	.condition0,.condition12,.condition1{
	    width: 86%;
	    padding: 0;
	    position: absolute;
	    right: 0;
	    top: 0;
	    z-index: 99999;
	    background: #fff;
	    height: 132%;
	}
	.hd{
	    display: none;
	}
	.fonblue{
	    color: #1264ba !important;
	    display: block;
	    font-size: .32rem;
	    font-weight: bold;
	    line-height: .8rem;
	    padding-left: .32rem;
	    padding-right: .4rem;
	    height: .8rem;
	    color: #454545;
	}
	.fen{
	    padding: 0.3rem 0 0 0.16rem;
	    overflow: hidden;
	    border-top: 1px solid #e5e5e5;
	    border-bottom: 1px solid #e5e5e5;
	}
	#w-box .fen div a{
	    float: left;
	    display: block;
	    width: 2.985rem;
	    background-color: #fff;
	    height: .74rem;
	    font-size: .28rem;
	    line-height: .7rem;
	    color: #000;
	    text-align: center;
	    margin: 0 .16rem .16rem 0;
	    border: 1px solid #d1d1d1;
	    border-radius: .1rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    padding: 0 .04rem;
	}
	.father{
	    border-bottom: 1px solid #e5e5e5;
	}
	.father span{
	    display: block;
	    font-size: .32rem;
	    font-weight: bold;
	    line-height: .8rem;
	    padding-left: .32rem;
	    padding-right: .4rem;
	    height: .8rem;
	    color: #454545;
	}
	/*----------------------footer-------------------------*/
	.uselogo a{
		display: inline-block;
    	float: left;
    	color: #1b7ce3;
    	font-size: .28rem;
		padding-right: .1rem;
	}
	#w-box .uselogo .user_b{
		margin-left: .16rem;
    	color: #FF5500;
    	display: inline-block;
	}
	#w-box .n-footer{
	    min-width: 6.4rem;
	    width: 100%;
	    margin: 0 auto;
	    height: auto;
	    text-align: center;
	}
	#w-box .padd{
	    padding: .34rem .22rem 0 .22rem;
	    line-height: 195%;
	    height: .88rem;
	    font-size: .28rem;
	}
	#w-box .padd p{
	    float: left;
	    display: inline-block;
	}
	#w-box .padd span{
	    display: inline-block;
	    margin-right: 0.1rem; 
	}
	#w-box .padd span a{
	    display: inline-block;
	    color: #1b7ce3;
	}
	.backtp{
	    display: inline-block;
	    float: right;
	}
	#w-box .fot{
	    margin: 0 auto;
	    width: 100%;
	    line-height: 200%;
	    font-size: .24rem;
	}
	#w-box .fot ul{
	    display: inline-block;
	    margin: 0 auto;
	    text-align: center;
	}
	#w-box .fot li{
	    float: left;
	}
	#w-box .fot li a{
	    display: inline-block;
	    padding: 0 0.08rem;
	    color: #b8b8b8;
	}
	#w-box .grycol{
	    padding-left: .06rem;
	    display: inline-block;
	    margin-left: .08rem;
	}
	#w-box .app_down{
	    max-width: 12.8rem;
	    min-width: 6.4rem;
	    width: 100%;
	    margin: 0 auto;
	}
	#w-box .app_down a{
	    display: block;
	    margin: 0 auto .2rem;
	    padding-bottom: 0;
	}
	#w-box .foot{
	    width: 5rem;
	    height: .6rem;
	    line-height: .6rem;
	    border-radius: .1rem;
	    margin: 0 auto;
	    color: #fff;
	}
	#w-box .foorPHon{
	    font-size: .3rem;
	    background: #97cc74 url(http://res3.360kad.com/theme/mobile/img/phone0910.png)no-repeat 24% center;
	    background-size: .48rem .6rem;
	}
	#w-box .foorPHon span{
	    margin-left: 0.8rem;
	}
	#w-box .footwx{
	    font-size: .24rem;
	    background: #3cb034 url(http://res4.360kad.com/theme/mobile/img/wxlogo.png) no-repeat 8% center;
	    background-size: .56rem .46rem;
	}
	#w-box .app_down a{
	    width: 93.75%;
	}
	#w-box .footmess{
	    display: inline-block;
	    margin: 0 auto;
	    font-size: .24rem;
	    line-height: 170%;
	}
	#w-box .footmess li{
	    display: inline-block;
	    float: left;
	    margin-right: .1rem;
	    color: #808080;
	}
	#w-box .radius45{
	    display: inline-block;
	    background: #1b7ce3;
	    border-radius: 50%;
	    color: #fff;
	    margin-right: .12rem;
	    padding: 0 .06rem;
	}
	#w-box .copyrg{
	    margin-bottom: .4rem;
	    font-size: .24rem;
	    line-height: 190%;
	    color: #808080;
	}
</style>