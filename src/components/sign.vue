<template>
	<div id="s-box">
		<!-- 头部 -->
		<header class="s-header">
			<div class="s-logo"><router-link  to="/index"></router-link></div>
			<span class="header-t">每日签到</span>
			<div class="header-r">
				<a class="header_ser" href="###"></a>
				<router-link  to="/shoppingCar" class="header_shop"><span class="shop-num">{{PersonalInfo.shoppingCar}}</span></router-link>
			</div>
		</header>
		<!-- header end -->
		<div class="s-nav">
			<div class="s_img">
				<img src="../assets/img/mrqdIimg.jpg">
			</div>
			<div class="sign_box">
				<p>今天是<span id="serdate"><i id="ServeYear">&nbsp;{{date.y}}年</i><i id="ServeMonth">&nbsp;{{date.m}}月</i><i id="ServeDate">&nbsp;{{date.d}}日&nbsp;</i></span>，我要签到：</p>
				<a href="###" @click="shop">立即签到</a>
			</div>
			<div class="rule_box">
				<p>活动规则：</p>
				<p>1.登录才能签到</p>
				<p>2.每次登录后点击签到按钮才能送积分</p>
				<p>3.每天只送一次，积分为5分</p>
				<p>4.积分自领取之日起1年内有效</p>
			</div>
		</div>
		<!-- 底部 -->
		<footer class="n-footer clear">
			<div class="padd clear">
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
		<div class="black"></div>
		<div class="poput">
			<a href="###" class="poput_clik"  @click="shut">x</a>
			<p class="remove"><span></span>请先登录</p>
			<p class="btn"><router-link  to="/enter" class="ok">确定</router-link></p>		
		</div>
		<div class="poput2">
			<a href="###" class="poput_clik" @click="cut">x</a>
			<p class="remove"><span></span>签到成功</p>
			<p class="btn"><a class="yes" @click="cut">确定</a><a class="cencel">查看积分</a></p>
		</div>
		<!-- <div class="poput3">
			<a href="###" class="poput_clik" @click="cut">x</a>
			<p class="remove"><span></span>签到成功s</p>
			<p class="btn"><a class="yes" @click="cut">确定</a><a class="cencel">查看积分</a></p>
		</div> -->
	</div>
</template>
<script>
	export default {
		name: 'sign',
		data(){
			return {
				date: {},
				isEnter:false,
				PersonalInfo: {}

			}
		},
		created(){
			$(window).scrollTop(0);
			this.isEnter = JSON.parse(sessionStorage.user).isEnter;
			this.PersonalInfo = this.$store.getters.getPersonalInfo;
			this.date = this.getDate();
		},
		methods: {
			shop(){
				if(this.isEnter == false){
					$(".black, .poput").show();
				}else{
					
					$(".black, .poput2").show();
				}
			},
			shut(){
				$(".black, .poput").hide();
			},
			cut(){
				$(".black, .poput2").hide();
			},
			toDouble(n){
				if(n<10){
					return "0" + n;
				}else{
					return n;
				}
			},
			getDate(){
				var d = new Date();				
				return {
					'y':d.getFullYear(),
					'm':this.toDouble(d.getMonth()+1),
					'd':this.toDouble(d.getDate())
				}
			}
		}
	}
</script>
<style scoped>
	/*----------------------------------------sign------------------------------------------*/
	#s-box{
	    background: #fff;
	    width: 100%;
	    color: #808080;
	    height: 100%;
	}
	.clear{
	    zoom: 1;
	    clear: both;
	}
	/*-----------------------------header-------------------------*/
	#s-box .s-header{
	    height: 1.34rem;
	    min-width: 6rem;
	    padding: .2rem .1rem .2rem .2rem;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	}
	#s-box .s-logo{
	    float: left;
	}
	#s-box .s-logo a{
	    display: block;
	    width: 1.88rem;
	    height: 1rem;
	    background: url(../assets/img/logo.png) no-repeat;
	    background-size: 1.88rem .9rem;
	}
	#s-box .header-t{
	    padding-top: .25rem;
	    text-align: center;
	    font-size: .32rem;
	    color: #000;
	    margin-right: .38rem;
	    display: inline-block;
	}
	#s-box .header-r{
	    float: right;
	    margin: .26rem .14rem 0 0;
	    height: .44rem;
	}
	#s-box .header_ser{
	    display: inline-block;
	    width: .44rem;
	    height: .44rem;
	    margin-right: -0.02rem;
	    background: url(http://res1.360kad.com/theme/mobile/img/search.png) no-repeat;
	    background-size: .42rem .42rem;
	}
	#s-box .header_shop{
	    display: inline-block;
	    height: 0.44rem;
	    min-width: 0.26rem;
	    background: url(http://res1.360kad.com/theme/mobile/img/gwuche.jpg) no-repeat;
	    background-size: 0.56rem 0.46rem;
	    line-height: .32rem;
	    font-size: .24rem;
	    padding-left: .66rem;
	    position: relative;
	}
	#s-box .shop-num{
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
	/*---------------------弹出框-----------------*/
	.black{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		display: none;
		z-index: 10;
	}
	.poput,.poput2{
	    position: fixed;
	    left: 50%;
	    top:50%;
	    transform: translate(-50%, -50%);
	    background-color: rgba(0,0,0,.9);
	    text-align: center;
	    border-radius: .1rem;
	    box-shadow: .1rem .1rem 1rem #000;
	    z-index: 11;
	    display: none;
	}
	.poput_clik{
	    width: .44rem;
	    height: .44rem;
	    font-size: .32rem;
	    line-height: .44rem;
	    font-weight: bold;
	    color: #000000;
	    background-color: #FFFFFF;
	    position: absolute;
	    top: .04rem;
	    right: .04rem;
	}
	.remove{
	    padding: .4rem .2rem .16rem .32rem;
	    border-bottom: 1px #939393 solid;
	    color: #FFF;
	    font-size: .32rem;
	    line-height: .56rem;
	    text-indent: .68rem;
	    text-align: left;
	}
	.remove span{
	    display: block;
	    width: .56rem;
	    height: .56rem;
	    margin: 0px;
	    background-image: url(http://res4.360kad.com/theme/mobile/img/qd_ico1.png);
	    background-repeat: no-repeat;
	    background-position: 0px 0px;
	    position: absolute;
	    left: .32rem;
	    top: .4rem;
	    background-position: 0px -0.56rem;
	}
	.btn{
	    padding: 0.2rem;
	    height: 1rem;
	    width: 4.4rem;
	}
	#s-box .poput .ok{
	    display: block;
	    margin: 0 auto;
	    background: #FFF;
	    width: 1.8rem;
	    height: .6rem;
	    line-height: .6rem;
	    text-align: center;
	    color: #000;
	    -webkit-border-radius: .06rem;
	}
	.cencel, .yes{
	    display: block;
	    background: #FFF;
	    width: 1.8rem;
	    height: .6rem;
	    line-height: .6rem;
	    text-align: center;
	    color: #000;
	    -webkit-border-radius: .06rem;
	}
	.cencel{
		float: right;
	}
	.yes{
		float: left;
	}
	/*-----------------nav----------------------*/
	.s-nav{
	    min-width: 6rem;
	    padding: 0 .2rem;
	    margin: 0 auto;
	    overflow: hidden;
	}
	.s_img{
	    display: block;
	    width: 100%;
	    margin: 0 auto;
	    vertical-align: middle;
	}
	.s_img img{
	    width: 100%;
	}
	.sign_box{
	    margin: .18rem auto 0 auto;
	}
	.sign_box p{
	    text-align: left;
	    color: #000;
	    font-size: .28rem;
	    height: .42rem;
	}
	.sign_box a{
	    border-radius: 0.1rem;
	    height: .88rem;
	    line-height: 0.9rem;
	    font-size: .32rem;
	    display: block;
	    font-weight: bold;
	    text-align: center;
	    margin: .2rem 0;
	    background-color: #cd1212; 
	    color:#fff;
	}
	.sign_box span{
	    color: #1b7cc1;
	}
	.sign_box i{
	    font-style: normal;
	}
	.rule_box{
	    padding: .16rem .1rem;
	    margin: .2rem 0;
	    background-color: #ebebeb;
	    border-radius: .1rem;
	    font-size: .28rem;
	}
	.rule_box p{
	    color: #8f8d8d;
	    line-height: .44rem;
	}
	/*----------------------footer-------------------------*/
	/*.uselogo{
		display: none;
	}*/
	.uselogo a{
		display: inline-block;
    	float: left;
    	color: #1b7ce3;
    	font-size: .28rem;
		padding-right: .1rem;
	}
	#s-box .uselogo .user_b{
		margin-left: .16rem;
    	color: #FF5500;
    	display: inline-block;
	}
	#s-box .n-footer{
	    min-width: 6.4rem;
	    width: 100%;
	    margin: 0 auto;
	    height: auto;
	    text-align: center;
	}
	#s-box .padd{
	    padding: .14rem .22rem 0 .22rem;
	    line-height: 195%;
	    font-size: .28rem;
	    height: .68rem;
	    display: block;
	}
	/*.padd_top{
		display: block;
	}*/
	#s-box .padd span{
	    margin-right: 0;
	}
	#s-box .padd span a{
	    display: inline-block;
	    float: left;
	    color: #1b7ce3;
	    font-size: .28rem;
	    padding-right: .1rem;
	}
	#s-box .backtp{
	    display: inline-block;
	    float: right;
	    color: #7d7d7d;
	    background: url(http://res2.360kad.com/theme/mobile/img/shouye.png) no-repeat left;
	    background-size: .34rem .3rem;
	    text-indent: 0.4rem;
	    font-size: .28rem;
	}
	#s-box .fot{
	    /*margin: 0 auto;
	    width: 100%;*/
	    line-height: 200%;
	    font-size: .24rem;
	}
	#s-box .fot ul{
	    display: inline-block;
	    margin: 0 auto;
	    text-align: center;
	}
	#s-box .fot li{
	    display: inline-block;
	    float: left;
	}
	#s-box .fot li a{
	    display: inline-block;
	    padding: 0 0.04rem;
	    color: #b8b8b8;
	}
	#s-box .grycol{
	    padding-left: .06rem;
	    display: inline-block;
	}
	#s-box .app_down{
	    max-width: 12.8rem;
	    min-width: 6.4rem;
	    width: 100%;
	    margin: 0 auto;
	}
	#s-box .app_down a{
	    display: block;
	    margin: 0 auto .2rem;
	    padding-bottom: 0;
	    width: 93.75%;
	}
	#s-box .foot{
	    width: 5rem;
	    height: .6rem;
	    line-height: .6rem;
	    border-radius: .1rem;
	    margin: 0 auto;
	    color: #fff;
	}
	#s-box .foorPHon{
	    font-size: .3rem;
	    background: #97cc74 url(http://res3.360kad.com/theme/mobile/img/phone0910.png)no-repeat 24% center;
	    background-size: .48rem .6rem;
	}
	#s-box .foorPHon span{
	    margin-left: 0.8rem;
	}
	#s-box .footwx{
	    font-size: .24rem;
	    background: #3cb034 url(http://res4.360kad.com/theme/mobile/img/wxlogo.png) no-repeat 8% center;
	    background-size: .56rem .46rem;
	}
	#s-box .footwx span{
	    margin-left: .7rem;
	}
	#s-box #app_dowml{
	    font-size: .28rem;
	    line-height: 150%;
	}
	#s-box #app_dowml a{
	    color: #ff5500;
	}
	#s-box .footmess{
	    padding-top: .1rem;
	    display: inline-block;
	    margin: 0 auto;
	    font-size: .24rem;
	    line-height: 170%;
	    color: #999;
	}
	#s-box .footmess li{
	    display: inline-block;
	    float: left;
	    margin-right: .1rem;
	}
	#s-box .radius45{
	    display: inline-block;
	    background: #1b7ce3;
	    border-radius: 50%;
	    color: #fff;
	    margin-right: .08rem;
	    padding: 0 .06rem;
	}
	#s-box .copyrg{
	    font-size: .24rem;
	    line-height: 175%;
	    color: #999;
	    width: 100%;
	    text-align: center;
	   	padding-bottom: 1px;
	}
</style>