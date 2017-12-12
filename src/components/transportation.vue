<template>
	<div id="t-box">
		<!-- 头部 -->
		<header class="t-header">
			<span class="header_l"><router-link  to="/index">首页</router-link></span>
			<span class="header_t">物流查询</span>
		</header>
		<!-- 内容 -->
		<div class="gird">
			<p class="title">通过输入订单的收货人手机号码进行查询</p>
			<div class="search clear">
				<input type="text" placeholder="输入收货人手机号码" class="se_input se-tet" maxlength="11">
				<div class="se_btn"></div>
			</div>
			<div class="code">
				<input type="text" maxlength="4" class="co_input se-tet" placeholder="输入验证码">
				<div class="co_img"><img id="imgVerify" src="../assets/img/w1.jpg"></div>
			</div>
			<div class="btn-submit disabled">查询</div>
		</div>
		<div class="grid-empty">
            <p>该手机号码没有在送货中的订单 !</p>
        </div>
		<div class="grid-info"></div>
		<footer class="t-foo">
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
		name: 'transportation',
		methods: {
			
		},
		created(){
			$(window).scrollTop(0);
		}
	}
</script>
<style scoped>
	/*----------------------------------------transportation-------------------------------------------*/
	#t-box{
		background-color: #eee;
	    width: 100%;
	    color: #808080;
	    height: 100vh;
	}
	.clear{
	    zoom: 1;
	    clear: both;
	}
	/*---------------header-------------------*/
	#t-box .t-header{
	    min-width: 6rem;
	    height: .8rem;
	    line-height: .8rem;
	    padding:0 .2rem;
	    text-align: center; 
	    background-color: #fff;
	}
	#t-box .header_l{
	    position: absolute;
	    left: .2rem;
	    top: 0;
	    height: .8rem;
	    background: url(http://res.360kad.com/theme/mobile/img/backIcon.png) left center no-repeat;
	    background-size: .2rem .34rem;
	    margin:0; 
	}
	#t-box .header_l a{
	    display: inline-block;
	    line-height: .8rem;
	    color: #808080;
	    text-align: left;
	    text-indent: .28rem;
	    overflow: hidden;
	    font-size: .24rem;
	}
	#t-box .header_t{
	    font-size: .3rem;
	    color: #000;
	}
	/*-----------------------内容-------------*/
	#t-box .gird{
	    background: #f5f5f5;
	    border-bottom: 1px solid #d5d5d5;
	    padding: 0.06rem 0.24rem 3rem;
	}
	.title{
	    font-size: .24rem;
	    color: #252525;
	    margin-bottom: .1rem;
	}
	#t-box .search{
	    height: .88rem;
	    position:relative;
	    margin-bottom: .2rem;
	}
	.se-tet{
	    font-size: 0.28rem;
	    color: #252525;
	    border-radius: .08rem;
	    padding-left: 0.2rem;
	    border: 1px solid #d5d5d5;
	}
	.se_input{
	    height: 0.88rem;
	    width: 100%;
	}
	.se_btn{
	    display: none;
	    position: absolute;
	    top: 50%;
	    margin-top: -0.3rem;
	    width: 0.6rem;
	    height: 0.6rem;
	    right: .2rem;
	    background: url(http://res.360kad.com/theme/v/img/search_07.png) 50% 83.33333333% no-repeat;
	    background-size: 0.6rem;
	}
	.code{
	    height: 0.92rem;
	    position: relative;
	    margin-bottom: .16rem;
	}
	.co_input{
	    width: 4.81rem;
	    height: 0.92rem;
	}
	.co_img{
	    background: #fff;
	    border: 0;
	    width: 2.1rem;
	    display: inline-block;
	    font-size: 0;
	    vertical-align: top;
	}
	#imgVerify{
	    vertical-align: middle;
	    text-align: center;
	    cursor: pointer;
	    width: 100%;
	}
	.disabled{
	    background: #d1d1d1;
	}
	.btn-submit{
	    width: 100%;
	    height: 0.88rem;
	    border-radius: 4px;
	    text-align: center;
	    line-height: 0.88rem;
	    color: #fff;
	    font-size: 0.28rem;
	}
	.grid-empty{
	    padding: .5rem 0;
	    display: none;
	    background: #fff;
	}
	.grid-empty p{
	    font-size: .28rem;
	    color: #b08430;
	    text-align: center;
	    line-height: .7rem;
	    display: block;
	}
	.grid-info{
	    padding-bottom: 1rem;
	}
	/*---------------------footer------------*/
	#t-box .t-foo{
	    min-width: 320px;
	    width: 100%;
	    padding: .2rem 0;
	    margin: 0 auto;
	    height: auto;
	    text-align: center;
	    background: #fff;
	}
	#t-box .footmess{
	    display: inline-block;
	    margin: 0 auto;
	    margin-top: 0.1rem;
	    font-size: 12px;
	    line-height: 170%;
	    color: #999999;
	}
	#t-box .footmess li{
	    display: inline-block;
	    float: left;
	    margin-right: .1rem;
	}
	#t-box .radius45{
	    display: inline-block;
	    background: #1b7ce3;
	    border-radius: 50%;
	    color: #fff;
	    margin-right: .08rem;
	    padding: 0 .06rem;
	}
	#t-box .copyrg{
	    display: block;
	    width: 100%;
	    font-size: 12px;
	    line-height: 190%;
	    text-align: center;
	    color: #999;
	    /*margin-top:.06rem; */
	}
</style>