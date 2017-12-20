<template>
	<div class="index">
		<header class="index-search" id="search">
			<div class="opc-change"></div>
			<div class="search-inner clearfixed">
				<router-link to="/search">
					<div class="search-l">
						<input id="search_value" type="text" placeholder="满58元包邮  请输入药品名称">
					</div>
				</router-link>
				<template v-if="user.isEnter==true">
					<router-link to="/mine"><div class="search-r">我的</div></router-link>
				</template>
				<template v-else>
					 <router-link to="/enter"><div class="search-r">登录</div></router-link>
				</template>
									
			</div>
		</header>
		<div class="index-banner">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide">
			        	<a href="#"><img src="http://image.360kad.com/group2/M00/13/1A/CgAgFVn3zruAXXbCAAGOcyuMxcQ717.jpg"></a>
			        </div>
			        <div class="swiper-slide">
			        	<a href="#"><img src="http://image.360kad.com/group2/M00/15/30/CgAgFFn_sZuABNQuAAI_C59mzfk657.jpg"></a>
			        </div>
			        <div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/14/46/CgAgFFn74WWAWMnBAAFn5cZKOIQ038.jpg"></a>
			       	</div>
			       	 <div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/14/64/CgAgFVn8LqGAG4u_AAI2YvxQwH4750.jpg"></a>
			       	</div>
			       	<div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/14/5A/CgAgFVn8GAKAPIxsAADpXxLCgbo805.jpg"></a>
			       	</div>
			       	<div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/15/30/CgAgFVn_sfuAJg-wAAFCGFnjxSQ107.jpg"></a>
			       	</div>
			       	<div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/13/7A/CgAgFFn5JreAIj5NAAI3HT141Yk801.jpg"></a>
			       	</div>
			       	<div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/13/25/CgAgFFn32xKAfukMAAEFj-otQHo574.jpg"></a>
			       	</div>
			       	<div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/13/1A/CgAgFVn3zruAXXbCAAGOcyuMxcQ717.jpg"></a>
			       	</div>
			       	<div class="swiper-slide">
			       		<a href="#"><img src="http://image.360kad.com/group2/M00/15/30/CgAgFFn_sZuABNQuAAI_C59mzfk657.jpg"></a>
			       	</div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
		</div>		
		<nav class="navlist">
			<ul class="clearfix">
				<li class="nav-item"><router-link to="/allkind">
					<p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFFn8KsSAMkg1AAAM1UHLKkQ187.png" alt="全部分类"></p>
					<p>全部分类</p>
				</router-link></li>
				<li class="nav-item"><router-link to="/seek">
					<p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFFn8Kw-ABjPqAAAMMx7VPjU331.png" alt="自助找药"></p>
					<p>自助找药</p>
				</router-link></li>
				<li class="nav-item"><router-link to="/sign">
					<p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFFn8Kz-Ac8sIAAAMpTHQrPc757.png" alt="每日签到"></p>
					<p>每日签到</p>
				</router-link></li>
				<li class="nav-item"><router-link to="/transportation">
					<p class="nav-item-img"><img src="http://image.360kad.com/group2/M00/14/62/CgAgFVn8K2GAVIsAAAAKsRwt1n0652.png" alt="查看物流"></p>
					<p class="nav-item-txt">查看物流</p>
				</router-link></li>
				<li class="nav-item"><router-link to="/man">
					<p><img src="http://image.360kad.com/group2/M00/14/62/CgAgFVn8K3yAR1utAAAMAncGfHA538.png" alt="男科频道"></p>
					<p>男科频道</p>
				</router-link></li>
				<li class="nav-item"><router-link to="/woman">
					<p><img src="http://image.360kad.com/group2/M00/14/63/CgAgFFn8K5CAY5HdAAALX7YhN1I375.png" alt="女性频道"></p>
					<p>女性频道</p>
				</router-link></li>
				<li class="nav-item"><a href="#">
					<p><img src="http://image.360kad.com/group2/M00/14/63/CgAgFFn8K62AK5qhAAAL9Cc3hug946.png" alt="养生超市"></p>
					<p>养生超市</p>
				</a></li>
				<li class="nav-item"><a href="#">
					<p><img src="http://image.360kad.com/group2/M00/14/63/CgAgFFn8K8SAHEiTAAAMtptmya4325.png" alt="健康头条"></p>
					<p>健康头条</p>
				</a></li>
			</ul>
		</nav>
		<div style="width: 100%">
			<a href="#">
				<img style="width: 100%;vertical-align: top;" src="http://image.360kad.com/group2/M00/15/30/CgAgFFn_sbqAapLNAAETDpbSq78257.png">
			</a>
		</div>
		<section class="seclist">
			<section class="health_h">
				<div class="health_c clearfix">
					<div class="health_logo">
						<img src="http://res1.360kad.com/theme/default/img/promotions/lifeng/20170726/m/health.jpg" alt="">
					</div>
					<div class="health_lunbo clearfix">
						<ul class="clearfix">
							<li>
								<img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEFmUFcGAfFZDAAALa9Y4Sds309.jpg">
								<a href="http://m.360kad.com/jknews/jksc/fejk/3689005.shtml?kzone=souye_jiankangtoutiao">能不能生，查查生育力就知道了
								</a>
							</li>
							<li><img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEVmUFiGAElaXAAALa9Y4Sds472.jpg"><a href="http://m.360kad.com/jknews/jksc/ysbj/3689006.shtml?kzone=souye_jiankangtoutiao" adid="m_index_toutiao_03">饭菜放凉多久才能放进冰箱，你又被骗了好多年</a></li>
							<li><img src="http://image.360kad.com/group1/M00/BB/1E/CgAgEFmUFUGAACg6AAALa9Y4Sds981.jpg"><a href="http://m.360kad.com/jknews/jksc/tj/3675435.shtml?kzone=souye_jiankangtoutiao" adid="m_index_toutiao_01">医生都常吃的铁皮石斛，吃它原来有这5种作用</a></li>
						</ul>
					</div>
				</div>
			</section>
			<router-link to="/seckill">
				<div class="skill mt30" id="skill_sec">
					<div class="skill-top clearfix">
						<div class="skillt-l fl fl">
							<img src="http://res.360kad.com/theme/mobile/img/m_index/skill-logo1.png" alt="">
						</div>
						<div class="skillt-m fl" id="skill_timeout">9点场<span>06</span>:<span>07</span>:<span>15</span>
						</div>
						<a href="#" class="skillt-r fr"></a>
					</div>
					<div class="skill-list" id="skill_list">
						<div class="swiper-container-nav">
							<ul class="clearfix swiper-wrapper">
								<li class="swiper-slide" v-for="item in seckillImg">
									<a href="#">
									<span class="skill-promotion">{{((item.Price-item.PrmPrice)/item.Price).toFixed(1)}}折</span>  
									<p class="skill-img"><img v-lazy="item.wareInfo.Pic"></p>        
									<p class="skill-vipprice">￥<span>{{item.PrmPrice}}</span></p>     
									<p class="skill-marprice">￥{{item.Price}}</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</router-link>
			<div class="some-room mt30 clearfix">
				<a href="#">
					<img src="http://image.360kad.com/group2/M00/13/29/CgAgFVn34PaAVBLPAADN9TulWdg980.jpg">
				</a>
				<a href="#">
					<img src="http://image.360kad.com/group2/M00/14/5A/CgAgFFn8GB-AM3kqAABweiiy_Oo506.jpg">
				</a>
				<a href="#">
					<img src="http://image.360kad.com/group1/M00/BC/A6/CgAgEFmaukOAYoXpAAB--pMKjqo400.jpg">
				</a>
				<a href="#">
					<img src="http://image.360kad.com/group1/M00/7E/97/CgAgEVhssa6AVKKeAAB8bZXNouc315.png">
				</a>
				<a href="#">
					<img src="http://image.360kad.com/group1/M00/7E/97/CgAgEFhssaCAEH4VAABscXeimWc878.png">
				</a>
			</div>
			<div class="xklj-list mt30">
				<div class="floor-title">小康推荐 <span>GOOD</span></div>
				<div class="floor-content">
					<div class="swiper-container-floor">
						<ul class="swiper-wrapper clearfix">
							<li class="swiper-slide">
								<a href="#">
									<img src="http://image.360kad.com/group2/M00/13/23/CgAgFFn31tKAcl4XAAB72Yy19Go754.jpg">
								</a>
							</li>
							<li class="swiper-slide">
								<a href="#">
									<img src="http://image.360kad.com/group2/M00/13/23/CgAgFFn31ueACJzqAACZq1DGv8A322.jpg">
								</a>
							</li>
							<li class="swiper-slide">
								<a href="#">
									<img src="http://image.360kad.com/group2/M00/13/23/CgAgFVn31wCAQcv8AACcKCxZZIw517.png">
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="banner2">
				<div class="swiper-container mt30">
					<ul class="swiper-wrapper">
						<li class="swiper-slide swiper-slide-prev">
							<a href="#">
								<img src="http://image.360kad.com/group2/M00/0F/26/CgAgFFnoa5eALqMDAADLIt6rn38483.jpg">
							</a>
						</li>
						<li class="swiper-slide swiper-slide-prev">
							<a href="#">
								<img src="http://image.360kad.com/group2/M00/11/48/CgAgFFnwb0mAUzitAAH9SPCt_2s557.jpg">
							</a>
						</li>
					</ul>
					<div class="swiper-pagination"></div>
				</div>
			</div>
			<div id="cateBox">
				<section class="category mt30" v-for="item in diseaseCategory">
					<div class="category-head">
						<img v-lazy="item.FloorImg">
					</div>
					<div class="category-nav category-navss clearfix">
						<div class="swiper-container-category">
							<div class="swiper-wrapper clearfix">
								<div class="swiper-slide" v-for="item in item.LunBoList">
									<a href="#">
										<img v-lazy="item.Pic">
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="category-videos clearfix">
						<a href="#" v-for="item in item.VideoList">
							<img v-lazy="item.Pic">
						</a>
					</div>
					<div class="category-txt clearfix">
						<ul>
							<li v-for="item in item.TextList">
								<i>
									<img v-lazy="item.Logo">
								</i>
								<a href="#">{{item.Title}}</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div class="guid mt30">
				<a href="#">
					<img src="http://image.360kad.com/group2/M00/14/46/CgAgFVn74beAPWirAAEoTzev0n0332.jpg">
				</a>
			</div>
			<div class="user-like">
				<div class="like-top">
					<p class="liketop-name">猜你喜欢.</p>
					<p class="liketop-line"></p>
				</div>
				<div class="like-list" id="like-list">
					<ul class="clearfix">
						<router-link to="/shoppingContent" >
							<li v-for="item in caiYouLike" @click="goods(item.code)">
								<a href="#">
									<p class="likepro-img">
										<img v-lazy="item.pic180">
									</p>
									<p class="likepro-name plr26 text-elli">{{item.name}}</p>
									<p class="likepro-price clearfix plr26">
										<span class="fl">￥<span>{{item.sale_price}}</span></span>
										<span class="fr">￥{{item.market_price}}</span>
									</p>
								</a>
							</li>
						</router-link>
					</ul>
				</div>
			</div>
		</section>
		<!-- 咨询 -->
		<section>
			<div class="kf-bg"></div>
			<div class="index-kf-wrap" @tap="wrap">
				<div id="moreW" class="kf-cont">咨询</div>
				<div class="more-wrap">
					<i class="bt-bg"></i>
					<ul class="nav-ul2">
						<li><a href="#">电话咨询</a></li>
						<li class="zx2"><a href="javascript:void(0)">在线咨询</a></li>
					</ul>
				</div>
			</div>
		</section>
		<!-- 回到顶部 -->
		<section>
			<div class="top-bg" style="display: none;"></div>
			<div class="index-top-wrap" style="display: block;">
			    <div class="top-cont">顶部</div>
			</div>
		</section>
		<!-- 下载注册 -->
		<section>
			<div class="index-footer-nav" id="lonw_warp">
				<img src="http://image.360kad.com/group2/M00/11/1A/CgAgFFnv-s6AH96mAACDvcHvU5g049.jpg">
			</div>
		</section>
		<!-- 底部 -->
		<footer class="index-footer-wrap">
			<div class="footer-size1 clearfix">
				<a href="#" class="pifa_shop">批发商洽<span></span></a>
				<a href="#">用药问答</a>
				<a href="#">药品库</a>
				<a href="#">健康咨讯</a>
			</div>
			<div id="IsLogin" class="footer-size1 clearfix">
			    	<a href="#">登录</a>
			    	<a href="#">注册</a>
			    	<a href="#">点赞吐槽</a>
			    	<a href="#">关于康爱多</a>
			</div>
			<div class="footer-size2">
				<span>正品保证</span>
				<span>隐私配送</span>
				<span>专业药师</span>
				<span>货到付款</span>
			</div>
			<div class="footer-size3">copyright&nbsp;&nbsp;©2010-2016 康爱多网上药店 版权所有</div>
		</footer>
	</div>
</template>	
<script>
export default {
  name: 'index',
  data () {
    return {
    user:{},
	seckillImg:{},
	diseaseCategory:{},
    caiYouLike:{},
    }
  },
  created:function() {
      if(sessionStorage.user){
          this.user=JSON.parse(sessionStorage.user);
      }
      
      $(window).scrollTop(0);
		//批量请求数据
		this.$http.all([this.seckill(), this.cateBox(),this.youLike()]).then(this.$http.spread((res1, res2,res3)=>{
				this.seckillImg = res1.data.Data;
				this.diseaseCategory = res2.data;
                this.caiYouLike = res3.data;
				this.$nextTick(function(){
				//图片轮播
				var mySwiper = new Swiper ('.swiper-container', {
					//自动播放
					autoplay: 3000,
				   	//循环加载 start->end->start
				   	loop : true,
					//恢复自动切换效果 默认是true
					autoplayDisableOnInteraction : false,
					//分页
				   	pagination: '.swiper-pagination',
				   	//鼠标点击哪个切换哪个
				   	paginationClickable:true,
				});  
				//秒杀
				var navSwiper = new Swiper ('.swiper-container-nav', {
					slidesPerView:3.4,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
			        observeParents:true,//修改swiper的父元素时，自动初始化swiper
				});
				//小康推荐
				var tuijianSwiper = new Swiper ('.swiper-container-floor', {
					slidesPerView:1.875
				});
				//病科类
				var cateBoxSwiper = new Swiper ('.swiper-container-category', {
					slidesPerView:3.25,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
			        observeParents:true,//修改swiper的父元素时，自动初始化swiper
				});
			});
		}));
	},
	mounted(){
            
            
		},
	methods:{
        goods(code){
            sessionStorage.code=code;
            console.log(sessionStorage)
        },
		seckill(){
			return this.$http.get("./static/json/GetSecKillList.json", {
				params:{
					page:1,
	   				pageSize:10,
	                type:1,
	                channelCode:100021,
	                sort:4
	           }	
			});
		},
		cateBox(){
			return this.$http.get("./static/json/GetHomeFloorAdView.json");
		},
		youLike(){
			return this.$http.get("http://10.0.154.212:8888/getGoodList", {
			});
		},
		//咨询
		wrap(){
			$(".more-wrap").toggleClass("curindex");
		}

	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*-----------------------首页-----------------------*/
  .index{
  	background: #eee;
  }
  .index img {
      width: 100%;
      margin: 0;
      padding: 0;
      vertical-align: top;
      display: block;
  }
  .fl{
      float: left;
  }
  .fr{
      float: right;
  }
  /*----------头部---------------*/
  .index-search {
      width: 100%;
      height: .92rem;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9;
  }
  .opc-change {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: .92rem;
      opacity: 0.85;
      background: -webkit-linear-gradient(top, #4b0a18, #fb2250);
  }
  .search-inner{
      position: absolute;
      top: .14rem;
      left: 4%;
      width: 92%;
      height: .64rem;
      overflow: hidden;
  }
  .search-l {
      float: left;
      width: 88%;
      height: .64rem;
      background-color: #f8f8f8;
      border-radius: .4rem;
  }
  .search-r {
      float: right;
      width: 9%;
      font-size: .3rem;
      color: white;
      height: .64rem;
      line-height: .64rem;
  }
  .search-l input {
      background: #f8f8f8 url(../assets/img/search_logo.png) no-repeat .25rem .18rem;
      background-size: .3rem .3rem;
      text-indent: .65rem;
      color: #898989;
      width: 100%;
      height: .64rem;
      line-height: .64rem;
      border-radius: .4rem;
      font-family: "微软雅黑";
      font-size: .28rem;
      margin: 0;
      padding: 0;
  }
  /*-----------图片轮播-----------------*/
  .index-banner{
      width: 100%;
      height: 3.3rem;
  }
  .index-banner img{
      width: 100%;
      height: 3.3rem;
  }
  /*------------导航栏----------------*/
  .navlist {
      width: 100%;
      background: white url(http://image.360kad.com/group2/M00/15/30/CgAgFFn_samABoX9AAEX3-Dep9c687.png) no-repeat;
      background-size: 100% 3.5rem;
  }
  .navlist ul{
      padding: .3rem .5rem;
  }
  .navlist ul li {
      width: 15.4%;
      float: left;
      margin-right: 12.6%;
      margin-bottom: .12rem;
      text-align: center;
      line-height: .3rem;
  }
  .navlist ul li a {
      font-size: .24rem;
      color: #222;
      display: block;
  }
  .navlist ul li p:first-child {
      margin-bottom: .08rem;
  }
  .navlist ul li p:nth-child(2) {
      height: .3rem;
      line-height: .3rem;
      overflow: hidden;
      color: #fff;
  }
  .navlist li p:first-child img {
      width: 1rem;
      height: 1rem;
      vertical-align: top;
      display: block;
  }
  .navlist ul li:nth-child(n+5) {
      margin-bottom: 0;
  }
  .navlist ul li:nth-child(4n) {
      margin-right: 0;
  }
  /*--------健康头条---------*/
  .health_h {
      width: 7.5rem;
      background: #fff;
      position: relative;
  }
  .health_h .health_c {
      height: 1.01rem;
      padding: 0.31rem 0.15rem 0.31rem 0.28rem;
      background: #fff;
  }
  .health_logo{
      float: left;
      display: block;
      width: 1.28rem;
      margin-right: 0.12rem;
  }
  .health_logo img{
      float: left;
      display: block;
      width: 1.28rem;
      vertical-align: top;
  } 
  .health_lunbo {
      float: left;
      width: 5.5rem;
      height: 0.39rem;
      position: relative;
      overflow: hidden;
  }
  .health_lunbo ul {
      position: absolute;
      left: 0;
      top: 0;
  }
  .health_lunbo li{
      /*display: flex;
      align-items: center;*/
      width: 5.5rem;
      font-size: 0.28rem;
      height: 0.4rem;
      padding: 0 0.08rem 0.1rem;
      /*overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;*/
  }
  .health_lunbo li img{
      float: left;
      display: block;
      width: 0.6rem;
      height: 0.31rem;
      margin-right: 0.08rem;
      vertical-align: middle;
  }
  .health_lunbo li a{
      clear: both;
      font-size: 0.28rem;
      color: #020202;
      position: relative;
      top: -0.04rem;
      
  }
  /*---------秒杀--------------*/
  .mt30 {
      margin-top: .3rem;
  }
  .skill {
      background: white;
      overflow-x: hidden;
  }
  .skill-top {
      padding: .3rem;
      border-bottom: 1px solid #f7f7f7;
      font-size: .28rem;
  }
  .skill-top{
      line-height: 0.4rem;
  }
  .skillt-l, .skillt-l img {
      width: 1.26rem;
      height: .4rem;
  }
  .skillt-m {
      font-size: .28rem;
      margin-left: .24rem;
      color: #222;
  }
  .skillt-m span{
      font-size: .24rem;
      border:1px solid #dfdfdf;
      border-radius: .05rem;
      text-align: center;
      height: .4rem;
      line-height: .4rem;
      padding-left: .06rem;
      padding-right: .06rem;
      margin-left: .1rem;
      margin-right: .1rem;
  }
  .skillt-r {
      display: block;
      padding: 0;
      margin: 0;
      width: 1.5rem;
      line-height: 0.4rem;
      height: 0.4rem;
      background: url(http://res1.360kad.com/theme/mobile/img/m_index/go1.jpg) right 0.1rem / 0.14rem 0.24rem no-repeat;
      color: #ff3b59;
      font-size: .28rem;
      position: relative;
  }
  .skill-list {
      padding: 0.35rem 0 0.3rem 0;
  }
  .skill-list ul li {
      float: left;
      width: 25%;
      position: relative;
      text-align: center;
  }
  .skill-img img {
      height: 1.8rem;
      text-align: center;
      vertical-align: top;
  }
  .skill-vipprice {
      color: #ff4e49;
      font-size: .22rem;
      line-height: .32rem;
      margin-top: .16rem;
  }
  .skill-vipprice span {
      font-size: .28rem;
      font-weight: bold;
  }
  .skill-marprice {
      font-size: .22rem;
      line-height: .3rem;
      color: #b5b5b5;
      text-decoration: line-through;
      margin-top: .04rem;
  }
  .skill-promotion{
      background: -webkit-linear-gradient(left, #fe5d3a 0%,#ff2b67 100%);
  }
  .skill-promotion {
      background-color: #ff970f;
      color: white;
      font-size: .24rem;
      width: 1rem;
      height: .4rem;
      line-height: .4rem;
      text-align: center;
      position: absolute;
      top: 1.35rem;
      right: 0.2rem;
      border-top-left-radius: .2rem;
      border-bottom-left-radius: .2rem;
  }
  /*----------------------------*/
  .some-room {
      height: 5.32rem;
      background-color: white;
  }
  .some-room a {
      display: block;
      float: left;
      width: 50%;
  }
  .some-room a:first-child {
      height: 3.6rem;
      border-right: 1px solid #f9f9f9;
      border-bottom: 1px solid #f9f9f9;
  }
  .some-room a:first-child img {
      height: 3.59rem;
  }
  .some-room a:nth-child(2), .some-room a:nth-child(3) {
      height: 1.8rem;
      border-bottom: 1px solid #f9f9f9;
  }
  .some-room a:nth-child(2) img, .some-room a:nth-child(3) img {
      height: 1.79rem;
  }
  .some-room a:nth-child(4), .some-room a:nth-child(5) {
      height: 1.7rem;
      float: right;
  }
  .some-room a:nth-child(5) {
      border-right: 1px solid #f9f9f9;
  }
  .some-room a:nth-child(4) img, .some-room a:nth-child(5) img {
      height: 1.7rem;
  }
  /*------------小康推荐--------------*/
  .xklj-list {
      background-color: white;
      overflow-x: hidden;
  }
  .floor-title {
      height: .96rem;
      line-height: .96rem;
      text-align: center;
      color: #222;
      font-size: .34rem;
      font-weight: bold;
      position: relative;
      background-color: white;
  }
  .xklj-list .floor-title {
      border-bottom: 1px solid #f7f7f7;
  }
  .floor-title span {
      color: #b9e1f0;
      font-size: .3rem;
      padding-right: .14rem;
  }
  .xklj-list ul li {
      width: 53.33%;
      height: 3rem;
      margin-left: 4%;
      padding-top: .3rem;
      padding-bottom: .3rem;
  }
  .xklj-list ul li img{
      width: 100%;
      height: 100%;
  }
  /*-------------图片轮播---------------*/
  .banner2{
      width: 100%;
      height: 2rem;
  }
  .banner2 img{
      height: 100%;
      overflow: hidden;
  }
  /*----------病科类------------*/
  #cateBox .category {
      width: 100%;
      background: #fff;
      overflow-x: hidden;
  }
  #cateBox .category-head {
      width: 100%;
      height: 0.8rem;
  }
  #cateBox .swiper-slide {
      float: left !important;
      width: 2.3rem !important;
      height: 3.4rem !important;
      border-right: 1px solid #f0f0f0;
      box-sizing: border-box;
      margin: 0 0;
  }
  #cateBox .category-head img{
      width: 100%;
      height: 0.8rem;
  }
  #cateBox .category-navss {
      top: 0.01rem;
      border-bottom: 1px solid #F0F0F0;
  }
  #cateBox .category-videos img {
      width: 3.74rem;
      float: left;
      border-bottom: 1px solid #F0F0F0;
  }
  #cateBox .category-videos img:first-of-type {
      border-right: 1px solid #F0F0F0;
  }
  #cateBox .category-txt {
      width: 100%;
      background: #fff;
  }
  #cateBox .category-txt li {
      display: flex;
      align-items: center;
      clear: both;
      padding: 0 0.16rem 0.05rem;
  }
  #cateBox .category-txt li:first-of-type {
      padding-top: 0.2rem;
  }
  #cateBox .category-txt li:last-of-type {
      padding-bottom: 0.2rem !important;
  }
  #cateBox .category-txt i {
      float: left;
      width: 0.59rem;
      margin-right: 0.15rem;
  }
  #cateBox .category-txt i img{
      vertical-align: middle;
  }
  #cateBox .category-txt a {
      font-size: 0.3rem;
      display: block;
      color: #020202;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  /*-------------------------*/
  .guid {
      width: 100%;
      height: 2rem;
  }
  .guid img{
      width: 100%;
      height: 2rem;
      vertical-align: bottom;
  }
  /*-------------猜你喜欢-----------------*/
  .like-top {
      position: relative;
      width: 5.2rem;
      height: .3rem;
      line-height: .3rem;
      color: #888888;
      font-size: .3rem;
      margin:  .47rem auto .27rem auto;
      text-align: center;
  }
  .liketop-name {
      position: absolute;
      width: 1.94rem;
      height: .3rem;
      left: 1.63rem;
      top: 0;
      background: #eeeeee url(../assets/img/likestar.png) no-repeat .18rem .04rem;
      background-size: .26rem .22rem;
      z-index: 2;
      text-align: center;
      text-indent: .52rem;
  }
  .liketop-line {
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #e0e0e0;
      top: .145rem;
      left: 0;
      z-index: 1;
  }
  .like-list ul li {
      width: 49.5%;
      float: left;
      vertical-align: top;
      border: 1px solid #f2f2f2;
      background-color: white;
      margin-bottom: .08rem;
  }
  .like-list ul li:nth-child(2n-1) {
      margin-right: 1%;
  }
  .likepro-img, .likepro-img img {
      width: 2.5rem;
      height: 2.5rem;
  }
  .likepro-img {
      margin: .5rem auto;
  }
  .likepro-name {
      color: #222;
      font-size: .28rem;
      line-height: .4rem;
      margin-top: .1rem;
      margin-bottom: .1rem;
  }
  .plr26 {
      padding-left: .26rem;
      padding-right: .26rem;
  }
  .text-elli {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .likepro-price {
      line-height: .4rem;
      margin-bottom: .3rem;
  }
  .likepro-price .fl {
      color: #fd3f3f;
      font-size: .22rem;
  }
  .likepro-price .fl span {
      font-size: .3rem;
      font-weight: bold;
  }
  .likepro-price .fr {
      font-size: .24rem;
      color: #b5b5b5;
      text-decoration: line-through;
  }
  /*----------底部------------*/
  .index-footer-wrap {
      width: 100%;
      padding: .5rem .2rem .3rem;
      background-color: #fff;
  }
  .footer-size1, .footer-size2 {
      height: .4rem;
      line-height: .4rem;
      margin-bottom: .3rem;
      text-align: center;
  }
  .footer-size1:nth-child(1) {
      margin-left: 0.3rem;
  }
  .footer-size1:nth-child(2) {
      margin-left: 0.9rem;
  }
  .footer-size1 a {
      height: .3rem;
      display: inline-block;
      line-height: .3rem;
      float: left;
      font-size: .28rem;
      color: #898989;
      padding: 0 .3rem;
      border-left: solid 1px #dadada;
  }
  .footer-size1 a:first-child {
      border-left: none;
      padding-left: .2rem;
  }
  .pifa_shop {
      position: relative;
  }
  .pifa_shop span {
      background: url(http://res.360kad.com/theme/default/img/product/2014new/pifa_new.png);
      width: 23px;
      height: 10px;
      display: inline-block;
      position: absolute;
      top: -0.22rem;
      right: 0.2rem;
  }
  .footer-size3 {
      font-size: .24rem;
      color: #898989;
      line-height: .4rem;
      text-align: center;
  }
  .footer-size2 {
      margin-bottom: 0;
  }
  .footer-size2 span {
      display: inline-block;
      line-height: .4rem;
      font-size: .24rem;
      color: #252525;
      padding: 0 .3rem 0 .35rem;
      background: url(../assets/img/sevice_icon.png) no-repeat left center;
      background-size: .26rem;
  }
  /*--------------在线咨询  回到顶部  注册关注-------------*/
  .index-kf-wrap, .kf-bg, .index-top-wrap, .top-bg {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      position: fixed;
      bottom: 2rem;
      z-index: 3;
  }
  .index-kf-wrap, .kf-bg {
      left: .3rem;
  }
  .kf-bg {
      background-color: #3894f4;
      opacity: .9;
  }
  .kf-cont, .top-cont {
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0;
      left: 0;
  }
  .kf-cont, .top-cont {
      padding-top: .6rem;
      box-sizing: border-box;
      background: url(../assets/img/kfIcon.png) no-repeat center .12rem;
      background-size: .55rem .46rem;
      font-size: .22rem;
      color: #fff;
      text-align: center;
      line-height: .3rem;
  }
  .top-bg {
      background-color: #000;
      opacity: .5;
  }
  .index-top-wrap, .top-bg {
      right: .3rem;
  }
  .top-cont {
      background: url(../assets/img/topIcon.png) no-repeat center .12rem;
      background-size: .55rem .46rem;
  }
  .index-footer-nav {
      width: 100%;
      height: 1.07rem;
      overflow: hidden;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 3;
      transition: bottom 300ms ease-out;
      display: block;
  }
  .index-footer-nav img {
      width: 100%;
  }
  /*----------咨询Item--------*/
  .more-wrap {
      width: 3rem;
      height: 1.8rem;
      position: absolute;
      top: -2rem;
      left: -.3rem;
      background: #fff;
      border: solid 1px #dadada;
      padding: 0 .2rem;
      transition: all 0.3s;
      transform: translate(-.7rem,1.2rem) scale(0,0) rotate(0);
      visibility: hidden;
  }
  .index-kf-wrap .curindex {
      visibility: visible;
      background: #fff;
      transform: translate(0,0) scale(1,1) rotate(0);
  }
  .more-wrap .bt-bg {
      width: .34rem;
      height: .21rem;
      background: url(../assets/img/right_sel.png) no-repeat center;
      background-size: 100%;
      display: inline-block;
      position: absolute;
      bottom: -.18rem;
      left: .58rem;
  }
  .nav-ul2 li {
      height: .9rem;
      line-height: .9rem;
      overflow: hidden;
      box-sizing: border-box;
      padding-left: .82rem;
      padding-right: .15rem;
      font-size: .3rem;
      color: #555555;
  }
  .nav-ul2 li:nth-child(1) {
      background: url(../assets/img/phone_icon.png) no-repeat .15rem center;
      background-size: .5rem .5rem;
  }
  .nav-ul2 li.zx2 {
      border-top: solid 1px #f1f1f1;
      background: url(../assets/img/zxIcon.png) no-repeat .15rem center;
      background-size: .5rem .5rem;
  }
  
</style>
