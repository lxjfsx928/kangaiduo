<template>
	<div id="shoppingContent">
		<!-- 头部 -->
		<section class="topfixed">
			<div class="details-nav">
				<div class="details-nav-left">
		            <a href="javascript:void(0)" class="goprev" @tap="back"></a>
		        </div>
		        <div class="details-nav-cont clearfix">
		            <span class=" cur"><a href="#">商品</a></span>
		            <span ><a href="#">详情</a></span>
		           <span ><a href="#">简介</a></span>
		        </div>
		        <div class="details-nav-right">
		            <a href="#" class="gosearch"></a>
		            <a id="goMore" class="gomore"></a>
		        </div>
		        <div class="details-nav-more" style="top: 1rem;">
	                <div class="nav-more-icon"></div>
	                <div class="nav-more-bg"></div>
	                <div class="nav-more-wrap">
	                    <ul>
	                        <li><a href="#">首页</a></li>
	                        <li><a href="#">分类</a></li>
	                        <li><a href="#">购物车</a></li>
	                        <li><a href="#">我</a></li>
	                        <li><a style="font-size:0.26rem" href="#">点赞吐槽</a></li>
	                    </ul>
	                </div>
	            </div>
			</div>
		</section>
		<!-- 每周一科 -->
		<div class="new_title_top" style="margin-top: 1rem;">
			<ul class="list_ul">
				<li class="list_name">
					<a href="#"><span style="color:#FF0000;">【每周一科】</span>简单3招，教你判断蜂蜜的好坏</a>
				</li>
			</ul>
		</div>
		<!-- app下载 -->
		<div id="onloadApp" class="onload-app">
			<a class="download_app" href="#"><img src="http://image.360kad.com/group2/M00/11/1B/CgAgFFnv_xuABNaYAABKTzGLTTY867.png" width="100%"></a>
			<a href="#" id="closeOnload" class="close-onload"></a>
		</div>
		<!-- 商品 -->
		<section class="details-information" id="Top1">
			<div class="nestOutsideSwiper">
				<div class="nestOutsideSwiper__content">
					<div class="swiper-wrapper">
						<!-- 本品 -->
						<div class="swiper-slide thisProductsTab">
							<div class="swiper-container swiper-container-thisProducts tabHight">
								<span class="icon_promotion" style="top: 0.3rem;"><img src="http://res.360kad.com/theme/mobile/img/iconimg/product/producticon_3.png?rd=0.7827496089510171"></span>
								<div class="swiper-wrapper">
									<div class="swiper-slide">
			                            <img :src="goods.pic180" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
			                            <img :src="goods.pic180" class="thisProducts__pic180">
			                            
									</div>
									<div class="swiper-slide">
			                            <img :src="goods.pic180" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
		                                <img :src="goods.pic180" class="thisProducts__pic180">
									</div>
								</div>
								<div class="swiper-pagination swiper-pagination-thisProducts"></div>
							</div>
							<div id="double11_lcjh" class="thisProductsLable">
								<span>10件起<i>66.00</i>元/件</span>
								<span>8件起<i>66.50</i>元/件</span>
							</div>
						</div>
						<!-- 活动 -->
						<div class="swiper-slide">
							<div class="swiper-container swiper-container-activityProducts tabHight">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group2/M00/0D/FE/CgAgFVnkjayAT4VIAAHM7Mo0cyw603.jpg" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEFXyP2iAaV_DAAGEPvLCcek736.jpg" class="thisProducts__pic180">
			                            
									</div>
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEFXyP2iAYmNMAAHAQkD_9KQ826.jpg" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
		                                <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEVXyP2iAP-fbAAHfQAqcoic182.jpg" class="thisProducts__pic180">
									</div>
								</div>
								<div class="swiper-pagination swiper-pagination-thisProducts"></div>
							</div>
						</div>
						<!-- 搭配 -->
						<div class="swiper-slide">
							<div class="swiper-container swiper-container-matchProducts tabHight">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group2/M00/0D/FE/CgAgFVnkjayAT4VIAAHM7Mo0cyw603.jpg" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEFXyP2iAaV_DAAGEPvLCcek736.jpg" class="thisProducts__pic180">
			                            
									</div>
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEFXyP2iAYmNMAAHAQkD_9KQ826.jpg" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
		                                <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEVXyP2iAP-fbAAHfQAqcoic182.jpg" class="thisProducts__pic180">
									</div>
								</div>
								<div class="swiper-pagination swiper-pagination-thisProducts"></div>
							</div>
						</div>
						<!-- 同类 -->
						<div class="swiper-slide">
							<div class="swiper-container swiper-container-similarProducts tabHight">
								<div class="swiper-wrapper">
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group2/M00/0D/FE/CgAgFVnkjayAT4VIAAHM7Mo0cyw603.jpg" class="thisProducts__pic180">
									</div>
									<div class="swiper-slide">
			                            <img src="http://image.360kad.com/group1/M00/0B/29/CgAgEFXyP2iAaV_DAAGEPvLCcek736.jpg" class="thisProducts__pic180">
			                            
									</div>
								</div>
								<div class="swiper-pagination swiper-pagination-thisProducts"></div>
							</div>
						</div>
					</div>
				</div>
				<ul class="tabs nestOutsideSwiper__tab clearfix" id="nestOutsideSwiper__tab">
					<li class="nestOutsideSwiper__tab__item "><span></span><span>本品</span></li>
					<li class="nestOutsideSwiper__tab__item tab_item-active"><span class="activityProductsIco item-img"></span><span>活动</span></li>
					<li class="nestOutsideSwiper__tab__item"><span class="matchProductsIco item-img"></span><span>搭配</span></li>
					<li class="nestOutsideSwiper__tab__item"><span class="similarProductsIco item-img"></span><span>同类</span></li>
				</ul>
			</div>
			<div class="information-wrap">
				<div>
					<p class="information-product-name">{{goods.name}}</p>
					<p id="collection" class="information-product-collection"></p>
				</div>
			</div>
			<div class="size">
				<div class="clearfix">
					<span class="skill-size" id="skillPrice"><span>￥</span>{{goods.sale_price}}</span>
		            <span class="skill-size" id="salePrice">￥{{goods.market_price}}</span>
		            <span class="skill-size" id="savePrice">立省{{goods.market_price-goods.sale_price}}元</span>
				</div>
				<div class="product-mendian-div product-div-layout clearfix">
				    <div >门店活动2835件,仅剩1431件</div>
					<div  time="2017/11/10 18:00:00">
				        <i></i>
				        <span class="kadhours">20&nbsp;</span>
				        <span class="kadhoursname">时&nbsp;</span>
				        <span class="kadmins">45&nbsp;</span>
				        <span class="kadminsname">分&nbsp;</span>
				        <span class="kadsecs">49&nbsp;</span>
				        <span class="kadsecsname">秒&nbsp;</span>
				        <span class="kadmsecs">9</span>
				    </div>
				</div>
			</div>
			<div class="dailay">
				<div class="dailay-cont">
					<p class="product-slogan">【双11预售】低至66元/盒,满10盒送茯苓山药茶（祛湿健脾，调理肠胃，喝出来的健康生活）,错高峰抢物流!</p>
					<p class="product-Manufactor">厂家：甘肃奇正藏药有限公司</p>
				</div>
			</div>
			<div class="product-service">
				<span class="service1">正品保证</span>
	            <span>满58元包邮</span>
	            <span>隐私配送</span>
	            <span class="service5"></span>
			</div>
			<div class="product-discount">
				<p id="discountShow" class="discount-title cur"><a href="#">可享受以下优惠</a></p>
				<div class="discount-cont">
					<ul id="discountC">
						<div class="show">
							<p><span class="discount-cont-type type-child2" id="huangou_huanqu">换购</span></p>
							<p class="discount-cont-size">满10.00元加11.90元，即可获得价值55.00元的金骨康 远红外磁疗贴 100mm*70mm*6贴 1件；加29.00元，即可获得价值198.00元的固升 固升牌维生素K2软胶囊 15g(0.5g*30粒) 1件
							</p>
						</div>
						<div class="show">
							<p><span class="discount-cont-type type-child1" id="manzeng_lingqu">满赠</span></p>
							 <p class="discount-cont-size">本商品满10件，即可获得：粤粤 茯苓山药茶(代用茶) 3g*6袋1件
							 </p>
						</div>
					</ul>
				</div>
			</div>
			<div class="product-treatment">
				<p class="treatment-title">
					<a href="#">疗程优惠装</a>
					<span class="double11-hot-promote"><img src="http://res.360kad.com/theme/default/img/salespromotion/product_hot_promote.gif"></span>
				</p>
				<div class="treatment-cont clearfix">
					<ul id="totalPackage">
						<li num="10" total="660.00" day="0" class="curRed"><span class="treatment-num" style="border-right: 1px solid rgb(252, 148, 148);">10件起</span><span class="treatment-price">66.00元/件</span>
						</li>
						<li num="8" total="532.00" day="0" ><span class="treatment-num" style="border-right: 1px solid rgb(238, 238, 238);">8件起</span><span class="treatment-price">66.50元/件</span>
						</li>
						<li num="6" total="402.00" day="0" ><span class="treatment-num" style="border-right: 1px solid rgb(238, 238, 238);">6件起</span><span class="treatment-price">67.00元/件</span>
						</li>
						<li num="4" total="270.00" day="0" ><span class="treatment-num" style="border-right: 1px solid rgb(238, 238, 238);">4件起</span><span class="treatment-price">67.50元/件</span>
						</li>
						<li num="2" total="136.00" day="0" ><span class="treatment-num" style="border-right: 1px solid rgb(238, 238, 238);">2件起</span><span class="treatment-price">68.00元/件</span></li><li num="1" total="69.00" day="0" ><span class="treatment-num" style="border-right: 1px solid rgb(238, 238, 238);">1件起</span><span class="treatment-price">69.00元/件</span>
						</li>
					</ul>
				</div>
				<div class="information-treatment-price">
					<div class="treatment-price-cont">
						<div class="treatment-size ">
	                        <p class="allTreatment-num">合计<i id="AllTreat">￥660.00</i></p>
	                        <p class="saveTreatment-num"><span>立省 <i id="SaveTreat">30.00</i>元</span></p>
	                    </div>
	                    <div class="treatment-input">
	                        <a href="#" class="num-reduce" id="Reduce"></a>
	                        <input class="num-input" type="number" name="number" id="Number" value="1">
	                        <a href="#" class="num-add" id="Add"></a>
	                    </div>
					</div>
				</div>
			</div>
			<div id="packageWrap" class="information-product-package">
				<div class="package-nav">
	                <div class="package-nav-bg"></div>
	                <div class="packNav-menu">
	                	<ul id="packNav">
	                		<li packageid="15303260" kitprice="700.00" originprice="892.00" rx="0" ><div>日常强健筋骨</div><i></i><span class=""></span>
	                		</li>
	                		<li packageid="15303270" kitprice="289.90" originprice="378.00" rx="0" class="curBlue"><div>快速镇痛礼包</div><i></i><span class="hot"></span>
	                		</li>
	                	</ul>
	                	<div class="packNav-r"></div>
	                </div>
	            </div>
	            <div class="package-cont-wrap">
	            	<div class="package-infor">
	            		<p class="package-size2">药师点评</p>
	            		<div class="dp-cont">
	            			<p class="package-size3" style="display: -webkit-box;">随着年纪增加，体内的氨糖逐渐减少，关节摩擦易造成关节疼痛。氨糖有助于产生滑液，提高软骨韧性；橄榄冻干粉消炎杀菌。建议按周期服用养护关节效果好。现在买就送丹参破壁，活血化瘀，联合购买更实惠！（本品不能代替药品）
	            			</p>
	            			<p class="package-size4"><a class="dp-open" href="javascript:;">展开</a>
	            			</p>
	            		</div>
	            	</div>
	            	<div class="package-content ">
	            		<ul class="swiper-wrapper">
	            			<li class="swiper-slide">
	            				<p class="package-prod-pic"><a href="/product/2113.shtml"><img data-url="http://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg" src="http://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg"></a>
	            				</p>
	            				<p class="package-prod-name">奇正 消痛贴膏 2.5ml:1.2g*5贴</p>
	            				<p class="package-prod-price">￥69.00</p>
	            				<p class="package-prod-add"></p>
	            				<p class="package-prod-numbg"></p>
	            				<p class="package-prod-numsize">×4</p>
	            			</li>
	            			<li class="swiper-slide">
	            				<p class="package-prod-pic"><a href="/product/2113.shtml"><img data-url="http://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg" src="http://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg"></a>
	            				</p>
	            				<p class="package-prod-name">奇正 消痛贴膏 2.5ml:1.2g*5贴</p>
	            				<p class="package-prod-price">￥69.00</p>
	            				<p class="package-prod-add"></p>
	            				<p class="package-prod-numbg"></p>
	            				<p class="package-prod-numsize">×4</p>
	            			</li>
	            			<li class="swiper-slide">
	            				<p class="package-prod-pic"><a href="/product/2113.shtml"><img data-url="http://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg" src="http://image.360kad.com/group1/M00/0C/3D/CgAgEVYc_0WAcn28AAAgAJ5osis89.jpeg"></a>
	            				</p>
	            				<p class="package-prod-name">奇正 消痛贴膏 2.5ml:1.2g*5贴</p>
	            				<p class="package-prod-price">￥69.00</p>
	            				<p class="package-prod-add"></p>
	            				<p class="package-prod-numbg"></p>
	            				<p class="package-prod-numsize">×4</p>
	            			</li>
	            		</ul>
	            	</div>
	            </div>
	            <div class="package-settlement">
	            	<div class="settlement-left">
	            		<p class="allTreatment-num">合计<i id="PackagePrice">700.00</i></p>
	            		<p class="saveTreatment-num">立省 <i id="packSaveTreat">192.00</i>元，原价<i id="packAllPrice">892.00</i>元</p>
	            	</div>
	            	<div class="settlement-right">
	            		<a href="#">加入购物车</a>
	            	</div>
	            </div>
			</div>
			<div id="sale_banner">
				<a href="#"><img src="http://image.360kad.com/group2/M00/16/01/CgAgFFoByVqAcUZUAADvuVK5pjM431.jpg"></a>
			</div>
			<div id="recommendWrap" class="product-recommend">
				<p class="recommend-title"><a href="#">买过该商品的人还看过</a></p>
				<div class="recommend-cont">
					<div class="recommend-content swiper-container-recommend">
						<ul class="swiper-wrapper">
							<li class="swiper-slide">
								<p class="recommend-prod-pic"><a href="#"><img src="http://image.360kad.com/group1/M00/7E/63/CgAgEFhsS9GAf_P4AAGrYpZyk-s862.jpg_180x180.jpg"></a>
								</p>
								<p class="recommend-prod-name">奇正 消痛贴膏 2.5ml:1.2g*6贴</p><p class="recommend-prod-price">￥150.00</p>
							</li>
							<li class="swiper-slide">
								<p class="recommend-prod-pic"><a href="#"><img src="http://image.360kad.com/group1/M00/7E/63/CgAgEFhsS9GAf_P4AAGrYpZyk-s862.jpg_180x180.jpg"></a>
								</p>
								<p class="recommend-prod-name">奇正 消痛贴膏 2.5ml:1.2g*6贴</p><p class="recommend-prod-price">￥150.00</p>
							</li>
							<li class="swiper-slide">
								<p class="recommend-prod-pic"><a href="#"><img src="http://image.360kad.com/group1/M00/7E/63/CgAgEFhsS9GAf_P4AAGrYpZyk-s862.jpg_180x180.jpg"></a>
								</p>
								<p class="recommend-prod-name">奇正 消痛贴膏 2.5ml:1.2g*6贴</p><p class="recommend-prod-price">￥150.00</p>
							</li>
							<li class="swiper-slide">
								<p class="recommend-prod-pic"><a href="#"><img src="http://image.360kad.com/group1/M00/7E/63/CgAgEFhsS9GAf_P4AAGrYpZyk-s862.jpg_180x180.jpg"></a>
								</p>
								<p class="recommend-prod-name">奇正 消痛贴膏 2.5ml:1.2g*6贴</p><p class="recommend-prod-price">￥150.00</p>
							</li>
							<li class="swiper-slide">
								<p class="recommend-prod-pic"><a href="#"><img src="http://image.360kad.com/group1/M00/7E/63/CgAgEFhsS9GAf_P4AAGrYpZyk-s862.jpg_180x180.jpg"></a>
								</p>
								<p class="recommend-prod-name">奇正 消痛贴膏 2.5ml:1.2g*6贴</p><p class="recommend-prod-price">￥150.00</p>
							</li>
							<li class="swiper-slide">
								<p class="recommend-prod-pic"><a href="#"><img src="http://image.360kad.com/group1/M00/7E/63/CgAgEFhsS9GAf_P4AAGrYpZyk-s862.jpg_180x180.jpg"></a>
								</p>
								<p class="recommend-prod-name">奇正 消痛贴膏 2.5ml:1.2g*6贴</p><p class="recommend-prod-price">￥150.00</p>
							</li>
						</ul>
						<!-- <div id="pagination2" class="swiper-pagination"></div> -->
					</div>
				</div>
			</div>
			<div class="information-product-tips">
	            <p class="warning-title">温馨提示</p>
	            <p class="warning-size">如发现本网站有任何直接或变相销售处方药行为，请保留证据，拨打12331举报，举报查实给予奖励。</p>
	        </div>
	        <div class="information-product-morewrap">
	            <div class="more-wrap"></div>
	            <div class="more-size">继续拖动，查看商品详情</div>
	        </div>
		</section>
		<section class="details-Graphic" id="Top2"></section>
		<section class="details-specification" id="Top3"></section>
		<div class="pro-footer">
			<div class="pro-footer-l">
				<p><i class="i-img img1"></i><a href="#" class="i-img">电话咨询</a></p>
				<p><i class="i-img img2"></i><a href="#" class="i-img">在线咨询</a></p>
				<router-link to="/shoppingCar">
					<p><i class="i-img img3"></i><a href="#" class="i-img">购物车</a></p>
				</router-link>
			</div>
			<div class="pro-footer-r">
				<p class="addCar" @tap="add()"><a href="#">加入购物车</a></p>
				<p class="buy"><a href="#">立即购买</a></p>
			</div>
		</div>
		<div style="height: 1rem;"></div>
	</div>
</template>
<script>
	export default{
		name:'shoppingContent',
		data(){
			return {
				goods:{}
			}
		},
		methods:{
			back(){
				history.go(-1);
			},
			add(){
				this.$http.get("http://10.0.154.212:8888/add",{
				params:{
					code:sessionStorage.code,
					id:JSON.parse(sessionStorage.user).id
				}
			})
			}
		},
		created(){
			$(window).scrollTop(0);
			this.$http.get("http://10.0.154.212:8888/getGoods",{
				params:{
					code:sessionStorage.code
				}
			}).then(res=>{
				this.goods=res.data;
				console.log(this.goods);
			})
		}
	}
</script>
<style scoped>
	#shoppingContent{
		background: #eee;
	}
	em, i, s, strong {
	    font-weight: normal;
	    font-style: normal;
	}
	/*------头部--------*/
	.topfixed {
	    width: 100%;
	    background-color: #fff;
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 3;
	}
	.details-nav {
	    width: 100%;
	    height: 1rem;
	    padding: 0 .3rem;
	    border-bottom: solid 1px #dadada;
	}
	.details-nav-left {
	    width: 25%;
	    height: 100%;
	    float: left;
	    position: relative;
	}
	.goprev {
	    width: .9rem;
	    height: 100%;
	    display: inline-block;
	    position: absolute;
	    top: 0;
	    left: 0;
	    background: url(../assets/img/m-nav-select.png) no-repeat left center;
	    background-size: .26rem .44rem;
	}
	.details-nav-right {
	    width: 27%;
	    height: 100%;
	    float: left;
	    position: relative;
	}
	.gosearch, .gomore {
	    width: .5rem;
	    height: 100%;
	    display: inline-block;
	    position: absolute;
	    top: 0;
	}
	.gosearch {
	    right: .8rem;
	    background: url(../assets/img/m-search.png) no-repeat left center;
	    background-size: .44rem;
	}
	.gomore {
	    right: 0;
	    background: url(../assets/img/m-more.png) no-repeat right center;
	    background-size: .44rem;
	}
	.details-nav-cont {
	    width: 48%;
	    height: 100%;
	    float: left;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    text-align: center;
	}
	.details-nav span{
		width: 33.3%;
	    height: 1rem;
	    padding: .28rem 0;
	    color: #888;
	    font-size: .28rem;
	    line-height: .44rem;
	    text-align: center;
	}
	.details-nav .cur{
		border-bottom: solid .04rem #06a6f8;
		color: #06a6f8;
	}
	.details-nav-more {
	    width: 2rem;
	    background: #000;
	    position: absolute;
	    top: 1.12rem;
	    right: -2rem;
	    border-radius: 2px;
	    z-index: 4;
	    transition: right 300ms ease-out;
	    display: none;
	}
	/*------每周一科------------*/
	.new_title_top {
	    width: 100%;
	    height: 0.5rem;
	    text-align: left;
	    background: #d3ecfe;
	    overflow: hidden;
	}
	.new_title_top ul {
	    padding: 0 5%;
	}
	.new_title_top ul li {
	    line-height: 0.5rem;
	    height: 0.5rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.new_title_top ul li a {
	    color: #222222;
	    font-size: 0.3rem;
	}
	/*---app下载---*/
	.onload-app{
		width: 100%;
		height: .68rem;
		position: relative;
		display: block;
	}
	.onload-app a {
	    display: inline-block;
	    width: 100%;
	    height: .68rem;
	    position: absolute;
	}
	.onload-app .close-onload {
	    width: .9rem;
	    height: .68rem;
	    position: absolute;
	    top: 0;
	    right: 0;
	}
	/*---------------图片轮播加Tab-------------------*/
	.nestOutsideSwiper__tab {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	    width: 100%;
	    background-image: linear-gradient(#ff6950,#f02f39);
	}
	.nestOutsideSwiper__tab li{
		height: .92rem;
	    line-height: .92rem;
		color: #fff;
	    font-size: .34rem;
		flex: 1;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nestOutsideSwiper__tab li .item-img {
	    width: .4rem;
	    height: .4rem;
	    background: url(../assets/img/activityProducts.png) no-repeat center;
	    background-size: 100%;
	    margin-right: .06rem;
	}
	.nestOutsideSwiper__tab li .matchProductsIco{
		background: url(../assets/img/matchProducts.png) no-repeat center;
	    background-size: 100%;
	    margin-right: .06rem;
	}
	.nestOutsideSwiper__tab li .similarProductsIco{
		background: url(../assets/img/similarProducts.png) no-repeat center;
	    background-size: 100%;
	    margin-right: .06rem;
	}
	.nestOutsideSwiper__tab__item::after {
	    content: "";
	    width: 1px;
	    height: .3rem;
	    background: #fff;
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    right: 0;
	    margin: auto;
	}
	/*---切换Tab------*/
	.nestOutsideSwiper__tab .tab_item-active{
		color: #f3363a;
	    background-color: #f0f0f0;
	}
	.nestOutsideSwiper__tab .tab_item-active .activityProductsIco{
		background: url(../assets/img/activityProducts-active.png) no-repeat center;
	    background-size: 100%;
	    margin-right: .06rem;
	}
	.nestOutsideSwiper__tab .tab_item-active .matchProductsIco{
		background: url(../assets/img/matchProducts-active.png) no-repeat center;
	    background-size: 100%;
	    margin-right: .06rem;
	}
	.nestOutsideSwiper__tab .tab_item-active .similarProductsIco{
		background: url(../assets/img/similarProducts-active.png) no-repeat center;
	    background-size: 100%;
	    margin-right: .06rem;
	}
	/*-------------图片切换----------*/
	.nestOutsideSwiper__content {
	    margin-left: auto;
	    margin-right: auto;
	    position: relative;
	    overflow: hidden;
	    /*z-index: 1;*/
	    width: 100%;
	    height: 6rem;
	}
	.thisProductsTab .swiper-container-thisProducts{
		height: 5.1rem
	}
	.tabHight{
		height: 6rem;
		background: #fff;
		text-align: center;
	}
	.tabHight img{
		vertical-align: middle;
		height: 5.1rem
	}
	.thisProductsLable {
	    display: block;
	    width: 100%;
	    height: .9rem;
	    line-height: .9rem;
	    background-color: #ffe9b7;
	    overflow: hidden;
	    position: absolute;
	    bottom: 0;
	}
	.thisProductsLable>span {
	    border-right: 1px solid #888888;
	    padding-left: .4rem;
	    padding-right: .4rem;
	    font-size: .28rem;
	}
	.thisProductsLable>span:last-child {
	    border-right: 0;
	}
	.thisProductsLable>span>i {
	    font-style: normal;
	    color: #fb3536;
	    font-size: .42rem;
	}
	.icon_promotion {
	    width: 1.8rem;
	    height: 1.8rem;
	    display: block;
	    position: absolute;
	    top: 2.3rem;
	    left: .3rem;
	    z-index: 2;
	    display: block;
	}
	.icon_promotion img {
	    width: 100%;
	    height: 1.8rem;
	}
	/*------------------------------*/
	.information-wrap {
		/*height: 1rem;*/
	    padding: 0 .3rem;
	    background-color: #fff;
	    font-size: .28rem;
	}
	.size{
		height: 1.483rem;
		padding: 0 .3rem;
	    background-color: #fff;
	    font-size: .28rem;
	    padding-bottom: .2rem;
	    border-bottom: solid 1px #eeeeee;
	}
	.information-wrap div{
		height: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.information-wrap .information-product-name{
		flex: 8;
	}
	.information-wrap .information-product-collection{
		flex: 1;
		text-align:right;
	}
	.information-wrap .information-product-collection {
		width: 100%;
	    height: .62rem;
	    border-left: solid 1px #d3d3d3;
	    background: url(../assets/img/share_not.png) no-repeat right center;
	    background-size: .50rem .42rem;
	}
	.information-product-name {
	    line-height: .4rem;
	    font-size: .32rem;
	}
	.skill-size {
	    height: .4rem;
	    line-height: .5rem;
	    float: left;
	    margin: 0 .3rem .2rem .05rem;
	}
	#skillPrice {
	    line-height: .4rem;
	    font-size: .48rem;
	    color: #ff4040;
	}
	#salePrice {
	    color: #b5b5b5;
	    text-decoration: line-through;
	}
	#savePrice {
	    color: #ff4040;
	    margin-right: 0;
	}
	/*-----------------------*/
	.product-div-layout div:nth-child(1) {
	    min-width: 0.7rem;
	    height: .42rem;
	    background: #ff4040;
	    background-size: .42rem .42rem;
	    color: #fff;
	    font-size: .24rem;
	    text-align: center;
	    line-height: .42rem;
	    padding: 0 .1rem;
	    display: inline-block;
	    float: left;
	}
	.product-div-layout div:nth-child(2) {
	    min-width: 2.8rem;
	    height: .42rem;
	    line-height: .42rem;
	    background: #fff;
	    font-size: .24rem;
	    color: #555555;
	    padding: 0 .1rem;
	    box-sizing: border-box;
	    overflow: hidden;
	    display: inline-block;
	    float: left;
	    text-align: center;
	    border: 1px solid #cbcbcb;
	    border-left: none;
	    display: flex;
	    align-items: center;
	}
	.product-div-layout div:last-child i {
		display: inline-block;
	    background: url(../assets/img/clock-time.jpg) no-repeat center center;
	    width: .23rem;
	    height: .23rem;
	    background-size: 100%;
	    margin-right: .15rem;
	    margin-left: .05rem;
	}
	/*----------------------------*/
	.dailay{
	    padding: 0 .3rem;
	    background-color: #fff;
	    font-size: .28rem;
	}
	.dailay-cont{
		padding: .3rem 0;
		border-bottom: solid 1px #eeeeee;
	}
	.product-slogan{
		line-height: .36rem;
		color: #06a6f8;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.product-Manufactor{
		width: 80%;
	    line-height: .4rem;
	    color: #b5b5b5;
	}
	/*----------------------*/
	.product-service {
	    width: 100%;
	    height: .8rem;
	    line-height: .8rem;
	    background: #f8f8f8;
	    border-bottom: solid 1px #eeeeee;
	    margin-bottom: .3rem;
	    display: flex;
	    align-items: center;
	    text-align: center;
	}
	.product-service span {
	    height: .4rem;
	    line-height: .37rem;
	    font-size: .24rem;
	    text-align: left;
	    background: url(../assets/img/sevice_icon.png) no-repeat left center;
	    background-size: .26rem;
	    padding: 0 .2rem 0 .36rem;
	    flex: 2;
	}
	.product-service .service5 {
	    background: url(../assets/img/point.png) no-repeat 74% center;
	    background-size: .53rem .21rem;
	    border-left: solid 1px #eeeeee;
	    flex: 0;
	    margin-right: .2rem;
	}
	.product-service .service1 {
	    margin-left: .3rem;
	}
	/*--------------------------*/
	.product-discount, .product-treatment, .information-product-package, .product-recommend{
		border-top: solid 1px #eeeeee;
	    border-bottom: solid 1px #eeeeee;
	    margin-bottom: .3rem;
	    background: #fff;
	    clear: both;
	}
	.discount-title, .treatment-title, .assistant-title, .recommend-title {
	    height: 1.08rem;
	    line-height: .48rem;
	    padding: .3rem 0;
	    background: url(../assets/img/more_select.png) no-repeat 96% center;
	    background-size: .32rem .18rem;
	}
	.product-discount .cur {
	    background: url(../assets/img/more_select2.png) no-repeat 96% center;
	    background-size: .32rem .18rem;
	    border-bottom: solid 1px #eeeeee;
	}
	.discount-title a, .treatment-title a, .assistant-title a, .recommend-title a {
	    height: .48rem;
	    border-left: solid .08rem #06a6f8;
	    padding-left: .3rem;
	    display: inline-block;
	    font-size: .32rem;
	    color: #888888;
	}
	.discount-cont{
		width: 100%;
	    padding: 0 .3rem;
	}
	.show{
		display: flex;
		justify-content: space-between;
		border-bottom: solid 1px #eeeeee;
	}
	.show p{
		margin-top: .26rem;
	}
	.show p:first-child{
		width: .75rem;
	}
	.discount-cont-type{
		width: .8rem;
		display: inline-block;
		border: solid 1px #ff690d;
		border-radius: .05rem;
		color: #FF690D;
		font-size: .26rem;
		text-align: center;

	}
	.type-child2 {
	    border-color: #d683fd;
	    color: #d683fd;
	}
	.discount-cont-size{
	    font-size: .28rem;
		width: 5.94rem;
		margin-bottom: .26rem;
		line-height:1.5em;
	}
	.treatment-title, .assistant-title, .recommend-title {
	    background: none;
	    border-bottom: solid 1px #eeeeee;
	}
	.treatment-title {
	    position: relative;
	}
	.treatment-title a {
	    border-left: solid .08rem #ff4b4b;
	    color: #ff4b4b;
	}
	.double11-hot-promote {
	    display: inline-block;
	    width: 1.17rem;
	    height: .55rem;
	    position: absolute;
	    top: .2rem;
	    left: 2.07rem;
	}
	.double11-hot-promote img {
	    height: .55rem;
	}
	.treatment-cont {
	    padding-top: .3rem;
	}
	.treatment-cont ul li{
	    width: 44%;
	    height: .66rem;
	    border: solid 1px #b5b5b5;
	    border-radius: 2px;
	    box-sizing: border-box;
	    float: left;
	    margin-left: 4%;
	    margin-bottom: .3rem;
	    line-height: .62rem;
	    overflow: hidden;
	}
	.treatment-cont ul .curRed {
	    border-color: #ff4040;
	    background-color: #ff4040;
	    color: #fff;
	}
	.treatment-num {
	    padding: 0 .2rem;
	    font-size: .28rem;
	    border-right: solid 1px #eee;
	}
	.treatment-price {
	    padding: 0 .15rem;
	    font-size: .28rem;
	}
	.information-treatment-price {
	    padding: 0 .3rem;
	}
	.treatment-price-cont {
		padding-top: 0.14rem;
	    /*padding-bottom: .44rem;*/
	    height: 1.68rem;
	    display: flex;
	}
	.treatment-size {
	    width: 63.5%;
	    overflow: hidden;
	}
	.allTreatment-num, .saveTreatment-num {
	    line-height: .4rem;
	    font-size: .26rem;
	}
	.allTreatment-num i {
	    color: #ff4040;
	    font-size: .34rem;
	}
	.treatment-input {
	    width: 36.5%;
	    overflow: hidden;
	    font-size: .32rem;
	    display: flex;
	    text-align: center;
	}
	.treatment-input input, .treatment-input a {
	    width: .7rem;
	    height: .7rem;
	    border: solid 1px #b5b5b5;
	    float: left;
	    text-align: center;
	    display: inline-block;
	}
	.num-reduce {
	    background: url(../assets/img/reduce.png) no-repeat center;
	    background-size: 100%;
	}
	.num-add {
	    background: url(../assets/img/add.png) no-repeat center;
	    background-size: 100%;
	}
	.treatment-input input[type=number] {
	    width: 1rem;
	    border-left: none;
	    border-right: none;
	    text-align: center;
	}
	/*--------------------------------------*/
	.package-nav {
	    width: 100%;
	    height: 1.2rem;
	    overflow: hidden;
	    line-height: 1rem;
	    text-align: center;
	    padding-bottom: .2rem;
	    position: relative;
	}
	.package-nav-bg {
	    width: 100%;
	    height: 1rem;
	    border-bottom: solid 1px #eeeeee;
	    box-sizing: border-box;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.packNav-menu {
	    position: absolute;
	    width: 100%;
	    height: .99rem;
	    top: 0;
	    left: 0;
	}
	#packNav {
	    width: 89.33%;
	    display: flex;
	    -webkit-box-align: center;
	    justify-content: space-between;
	    -webkit-box-pack: justify;
	    border-right: 1px solid #f3f3f3;
	    float: left;
	}
	.package-nav ul li {
	    flex: 1;
	    height: 100%;
	    float: left;
	    border-left: solid 1px #eeeeee;
	    font-size: .3rem;
	    color: #888888;
	    position: relative;
	}
	.package-nav ul li:last-child {
	    border-right: solid 1px #eeeeee;
	}
	#packNav li div {
	    height: .99rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    word-wrap: normal;
	    padding-left: .1rem;
	    padding-right: .1rem;
	}
	.package-nav ul .curBlue {
	    color: #fff;
	    background-color: #06a6f8;
	}
	.package-nav ul .curBlue i {
	    width: .21rem;
	    height: .14rem;
	    display: inline-block;
	    position: absolute;
	    left: 44%;
	    bottom: -.12rem;
	    background: url(../assets/img/package_navIcon.png) no-repeat center;
	    background-size: 100%;
	}
	.packNav-r {
	    width: 10.67%;
	    height: .99rem;
	    background: url(../assets/img/nav-right.png) no-repeat;
	    background-size: 100%;
	    float: right;
	}
	/*---------------------------*/
	.package-infor {
	    padding: .3rem .3rem 0;
	}
	.package-size2 {
	    font-size: .28rem;
	    color: #06a6f8;
	    padding-left: .28rem;
	    line-height: .4rem;
	    background: url(../assets/img/dp_icon.png) no-repeat left center;
	    background-size: .22rem .27rem;
	}
	.dp-cont {
	    position: relative;
	}
	.package-size3 {
	    line-height: .4rem;
	    color: #555555;
	    font-size: .28rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.package-size4 {
	    line-height: .4rem;
	    text-align: right;
	    padding-right: .2rem;
	}
	.dp-open {
	    color: #06a6f8;
	    font-size: .26rem;
	    text-decoration: underline;
	}
	a.dp-open:visited, a.dp-open:hover {
	    color: #06a6f8;
	    text-decoration: underline;
	}
	/*-----------------------------------*/
	.package-content {
	    padding: 0 0 .3rem;
	    margin: 0 .3rem;
	    overflow: hidden;
	    border-bottom: solid 1px #eeeeee;
	}
	.package-content ul li {
	    width: 33.3%;
	    padding: .2rem 0;
	    margin-right: .7rem;
	}

	.package-prod-pic, .recommend-prod-pic{
	    width: 1.8rem;
	    height: 1.8rem;
	    overflow: hidden;
	    margin: 0 auto .3rem;
	}
	.package-prod-pic img, .recommend-prod-pic img{
	    width: 1.8rem;
	    height: 1.8rem;
	    vertical-align: top;
	}
	.package-prod-name,.package-prod-price, .recommend-prod-name, .recommend-prod-price{
		height: .4rem;
	    line-height: .4rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    font-size: .26rem;
	    color: #555555;
	    padding-left: .1rem;
	}
	.package-prod-add {
	    width: .4rem;
	    height: .4rem;
	    background: url(../assets/img/package_add.png) no-repeat center;
	    background-size: 100%;
	    position: absolute;
	    right: -.55rem;
	    top: 30%;
	}
	.package-prod-numbg {
	    width: .66rem;
	    height: .36rem;
	    background: #000;
	    opacity: .3;
	    position: absolute;
	    top: 50%;
	    right: 0;
	    z-index: 2;
	    border-top-left-radius: 2px;
	    border-bottom-left-radius: 2px;
	}
	.package-prod-numsize {
	    width: .66rem;
	    height: .36rem;
	    font-size: .24rem;
	    line-height: .36rem;
	    text-align: center;
	    position: absolute;
	    top: 50%;
	    right: 0;
	    z-index: 3;
	    color: #fff;
	}
	/*--------------------------*/
	.package-settlement {
	    width: 100%;
	    height: 1.68rem;
	    padding: .44rem .3rem;
	    overflow: hidden;
	    display: flex;
	}
	.settlement-left {
	    width: 62.5%;
	    height: 100%;
	}
	#packAllPrice {
	    text-decoration: line-through;
	}
	.settlement-right {
	    width: 37.5%;
	    height: 100%;
	    text-align: center;
	    display: flex;
	    justify-content: center;
	   	align-items: center;
	   	background-color: #ff4040;
	    border-radius: 2px;
	}
	.settlement-right a {
	    font-size: .32rem;
	    color: #ffffff;
	}
	/*---------banner-------------*/
	#sale_banner {
	    margin: 0.3rem 0;
	}
	#sale_banner img {
	    width: 100%;
	    vertical-align: top;
	}
	/*----------买过的人还看过过------------*/
	.recommend-cont {
	    padding: .3rem;
	    overflow-x: hidden;
	}
	.recommend-content {
	    padding: .1rem 0 .5rem;
	}
	.recommend-prod-price {
	    color: #ff4040;
	}
	/*----------温馨提示------------*/
	.information-product-tips {
	    background: #fff;
	    margin-bottom: .3rem;
	    padding: .3rem;
	}
	.information-product-tips .warning-title {
	    line-height: .4rem;
	    font-size: .28rem;
	    text-align: center;
	    margin-bottom: .2rem;
	    color: #222;
	    background: url(../assets/img/warning_icon.png) no-repeat 38% center;
	    background-size: .26rem;
	}
	.information-product-tips .warning-size {
	    line-height: .4rem;
	    color: #888888;
	    font-size: .26rem;
	    text-align: center;
	}
	.information-product-morewrap {
	    height: 1rem;
	    background: #f0f0f0;
	    overflow: hidden;
	    padding: 0 .67rem;
	    border-bottom: solid 1px #eeeeee;
	    box-sizing: border-box;
	    position: relative;
	}
	.more-size {
	    width: 3.17rem;
	    height: .4rem;
	    background: #f0f0f0;
	    font-size: .24rem;
	    text-align: center;
	    position: absolute;
	    top: .35rem;
	    left: 30%;
	}
	/*---------底部-------*/
	.pro-footer{
		width: 100%;
	    height: 1rem;
	    border-top: solid 1px #eeeeee;
	    display: flex;
	    align-items: center;
	    background: #fff;
	    position:fixed;
	    bottom: 0;
	    left:0;
	    z-index: 2;
	}
	.pro-footer>div{
		flex: 1;
		height: 100%;
		display: flex;
		align-items: center;
		text-align: center;
	}
	.pro-footer-l>p{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.pro-footer-r>p{
		flex: 1;
		line-height: 1rem;
	}
	.pro-footer .pro-footer-l{
		font-size: .20rem;
	    color: #555555;
	}
	.pro-footer .pro-footer-r a{
		font-size: .32rem;
		color: #fff; 
	}
	.pro-footer-r .addCar{
		background: #06a6f8;
	}
	.pro-footer-r .buy{
		background: #ff4040;
	}
	.pro-footer-l p i{
		display: block;
		width: .5rem;
		height: .5rem;
		background: url(../assets/img/phone_icon_2017.png) no-repeat center center;
		background-size: .42rem .4rem;
	}
	.pro-footer-l p .i-img{
		flex:1;
	}
	.pro-footer-l p .img2{
		background: url(../assets/img/online_2017.png) no-repeat center center;
		background-size: .42rem .4rem;
	}
	.pro-footer-l p .img3{
		background: url(../assets/img/shopCart_2017.png) no-repeat center center;
		background-size: .42rem .4rem;
	}
</style>