<template>
	<div id="seckill">
		<section class="SecKill_header clearfix">
			<router-link  to="/index" class="header_l"></router-link>
			<span class="header_middle">超值秒杀</span>
			<div class="header_r clearfix">
				<a href="#" class="header_search"></a>
				<a href="#" class="header_rule">规则</a>
			</div>
		</section>
		<div style=" height: 1.2rem;"></div>
		<!-- 图片轮播2 -->
		<div class="banner">
			<div class="swiper-container">
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
		<!-- tab-tile -->
		<section class="SecKill_nav" id="SecKill_nav">
			<ul>
				<li class="nav_licur">
					<a href="#" class="grey" >
						<div class="nav_time">09:00</div>
						<div class="time_describe" id="time_describe1">正在疯抢</div>
					</a>
					<i class="triangle"></i>
				</li>
				<li>
					<a href="#" class="grey">
						<div class="nav_time">21:00</div>
						<div class="time_describe" id="time_describe2">即将开始</div>
					</a>
					<i class="triangle none"></i>
				</li>
			</ul>
			<div class="nav_describe_box">
				<div class="nav_describe">
					<div class="describe_line"></div>
					<div class="describe_letter clearfix">
						<span>距离本场<span id="endorbegin1">结束</span></span>
						<span class="red end_begintime">
							<span class="red_hour">01</span>时<span class="red_min">09</span>分<span class="red_second">17</span>秒
						</span>
					</div>
				</div>
				<div class="nav_describe none">
					<div class="describe_line"></div>
					<div class="describe_letter clearfix">
						<span>距离本场<span id="endorbegin1">开始</span></span>
						<span class="red end_begintime">
							<span class="red_hour">01</span>时<span class="red_min">09</span>分<span class="red_second">17</span>秒
						</span>
					</div>
				</div>
			</div>
		</section>
		<section class="SecKill_list_wrap">
			<div class="SecKill_list" id="SecKill_list">
				<ul>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/0F/06/CgAgEVZv0OCAJrLmAAAgAAjnvT420.jpeg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group2/M00/16/48/CgAgFVoCvsCACz_HAAIllt9U89o823.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/32/35/CgAgEVdGlHuAMRPiAAG8XiU6DZg391.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/27/52/CgAgEFcMcu-Adht9AAHG-mu8SZY219.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/4D/3E/CgAgEVfXmQOACPCDAAFhzCYB0O0977.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="SecKill_list none" id="look_forward">
				<ul>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/0F/06/CgAgEVZv0OCAJrLmAAAgAAjnvT420.jpeg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group2/M00/16/49/CgAgFFoCw_mAOYZsAAMF8my3gYE606.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/9A/0A/CgAgEFjteZSANI5IAAHgatUWfQs651.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/1F/E0/CgAgEFbT4LWAZaLFAAGjCQI3hrg639.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/21/7F/CgAgEVbjiJmAL5GQAAGufNQTFEo426.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="SecKill_list_wrap">
			<div class="SecKill_list" id="SecKill_list">
				<ul>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/0F/06/CgAgEVZv0OCAJrLmAAAgAAjnvT420.jpeg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group2/M00/16/48/CgAgFVoCvsCACz_HAAIllt9U89o823.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/32/35/CgAgEVdGlHuAMRPiAAG8XiU6DZg391.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/27/52/CgAgEFcMcu-Adht9AAHG-mu8SZY219.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/4D/3E/CgAgEVfXmQOACPCDAAFhzCYB0O0977.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="at_once_button">
								<div class="at_once_top clearfix">
									<p class="at_once_top_l" style="width:26%"></p>
									<p class="already_promotion">已售<span class="baifenb">26</span>%</p>
								</div>
								<p class="at_once">马上抢</p>
							</a>
							<p class="code_text none">7159</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="SecKill_list none" id="look_forward">
				<ul>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/0F/06/CgAgEVZv0OCAJrLmAAAgAAjnvT420.jpeg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group2/M00/16/49/CgAgFFoCw_mAOYZsAAMF8my3gYE606.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/9A/0A/CgAgEFjteZSANI5IAAHgatUWfQs651.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/1F/E0/CgAgEFbT4LWAZaLFAAGjCQI3hrg639.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
					<li class="clearfix">
						<div class="pro_l">
							<a href="#">
								<span class="ms_logo">3.2折</span>
								<p class="pro_img">
									<img src="http://image.360kad.com/group1/M00/21/7F/CgAgEVbjiJmAL5GQAAGufNQTFEo426.jpg_180x180.jpg">
								</p>
								<p class="pro_imggery none"></p>
							</a>
						</div>
						<div class="pro_r">
							<a href="#">
								<p class="pro_name">海氏海诺 创口贴（透明防水型） 6片/盒</p>
								<p class="pro_ad clearfix text-elli"><span class="ad_red">限购</span>购买1件时享受优惠，超出数量以结算价为准</p>
								<p class="pro_msprice price_com red">￥1.11</p>
								<p class="pro_vip price_com grey">￥3.50</p>
							</a>
							<a href="#" class="stay_tuned_button">敬请期待</a>
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="more_activty">
			<div class="activty_title">
				<span class="activty_title_l">更多精彩活动</span>
				<span class="activty_title_r">MORE</span>
			</div>
			<a href="#" class="back_index">返回首页</a>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'seckill',
		created(){
			$(window).scrollTop(0);
		}
	}
</script>
<style scoped>
	#seckill{
		background: #eee;
	}
	/*-----------------seckill-----------------*/
	.grey {
	    color: #888888;
	}
	.none{
	    display: none;
	}
	/*-----头部----*/
	.SecKill_header {
	    width: 100%;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	    height: 1.2rem;
	    line-height: 1.2rem;
	    font-size: .3rem;
	    background: #ffffff;
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 2;
	}
	.header_l {
	    float: left;
	    width: 1.88rem;
	    height: .9rem;
	    margin-left: .2rem;
	    background: url(../assets/img/logo.png) no-repeat;
	    background-size: 100%;
	    margin-top: .15rem;
	    display: block;
	}
	.header_middle {
	    font-weight: bold;
	}
	.header_r {
	    float: right;
	    width: 1.36rem;
	    display: flex;
	    align-items: center;
	}
	.header_r .header_search{
	    display: block;
	    width: .41rem;
	    height: .41rem;
	    background: url(../assets/img/search_logo.png) no-repeat;
	    background-size: 100%;
	}
	.header_rule {
	    width: .95rem;
	    color: #000000;
	}
	/*-------------图片轮播---------------*/
	.banner{
	    width: 100%;
	    height: 2rem;
	}
	.banner img{
	    height: 2rem;
	    overflow: hidden;
	}
	/*---------秒杀导航---------*/
	.SecKill_nav ul{
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    text-align: center;
	    background: #fff;
	}
	.SecKill_nav ul li{
	    flex: 1;
	    position: relative;
	}
	.SecKill_nav ul li a div{
	    height: 0.42rem;
	}
	.SecKill_nav ul li a div:first-child{
	    line-height:  0.42rem;
	}
	.SecKill_nav ul li a div:last-child{
	    height: 0.42rem;
	    line-height: 0.4rem;
	}
	.nav_time {
	    font-size: .34rem;
	}
	.time_describe{
	    font-size: .24rem;
	}
	.triangle {
	    position: absolute;
	    right: 50%;
	    border: .1rem solid transparent;
	    border-top-style: solid;
	    border-top-color: #06a6f8;
	    z-index: 2;
	}
	/*------tab的显示隐藏控制区-------*/
	.nav_licur a{
	    background: #06a6f8;
	    color: #ffffff;
	    display: block;
	}
	/*-------时间的显示-------*/
	.nav_describe {
	    height: .895rem;
	    line-height: .895rem;
	    border-bottom: 1px solid #d3d3d3;
	    text-align: center;
	    font-size: .28rem;
	    position: relative;
	}
	.red {
	    color: #ff4040;
	}
	.describe_line {
	    position: absolute;
	    width: 6.9rem;
	    height: 0;
	    border-top: 1px solid #dadada;
	    left: .3rem;
	    top: 50%;
	}
	.describe_letter {
	    position: absolute;
	    width: 4.2rem;
	    height: .3rem;
	    line-height: .3rem;
	    left: 1.7rem;
	    top: .27rem;
	    background: #f0f0f0;
	    z-index: 1;
	    color: #888888;
	}
	/*----------正在疯抢-------------*/
	.SecKill_list {
	    width: 100%;
	    background: #ffffff;
	    margin-bottom: .1rem;
	}
	.SecKill_list ul li {
	    border-bottom: 1px solid #d3d3d3;
	}
	.pro_l {
	    float: left;
	    width: 36%;
	    position: relative;
	}
	.pro_img {
	    width: 2.3rem;
	    height: 2.3rem;
	    padding: .4rem 0 0 .4rem;
	}
	.pro_img img{
	    width: 2.3rem;
	    height: 2.3rem;
	    vertical-align: middle;
	}
	.pro_imggery {
	    z-index: 3;
	    position: absolute;
	    width: 2.4rem;
	    height: 2.4rem;
	    top: .3rem;
	    left: .3rem;
	    background: #000000 url(../assets/img/already_yqw.png) no-repeat .4rem;
	    background-size: 60%;
	    opacity: .3;
	}
	.ms_logo {
	    position: absolute;
	    width: .68rem;
	    height: .64rem;
	    line-height: .54rem;
	    left: .3rem;
	    top: .3rem;
	    color: white;
	    font-size: .22rem;
	    text-align: center;
	    background: url(../assets/img/promotion_bg.png) no-repeat;
	    background-size: 100%;
	}
	.pro_r {
	    float: right;
	    width: 60%;
	    position: relative;
	    padding-right: 2%;
	}
	.pro_name {
	    color: #222222;
	    font-size: .3rem;
	    line-height: .38rem;
	    margin: .3rem 0 .1rem 0;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.text-elli {
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.pro_ad {
	    font-size: .28rem;
	    color: #888888;
	    height: .42rem;
	    line-height: .42rem;
	    margin-bottom: .4rem;
	}
	.pro_ad .ad_red {
	    float: left;
	    color: #5dc8ff;
	    border: 1px solid #5dc8ff;
	    border-radius: 3px;
	    text-align: center;
	    box-sizing: border-box;
	    display: block;
	    height: 0.42rem;
	    margin-right: .1rem;
	    font-size: .26rem;
	    padding: 0 .12rem;
	    line-height: 0.37rem;
	}
	.price_com {
	    width: 60%;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    line-height: .4rem;
	}
	.pro_msprice {
	    font-size: .34rem;
	}
	.pro_vip {
	    font-size: .24rem;
	    text-decoration: line-through;
	    margin-bottom: .3rem;
	    color: #888888;
	}
	.at_once_button {
	    display: block;
	    z-index: 1;
	    position: absolute;
	    width: 1.6rem;
	    height: .88rem;
	    bottom: .3rem;
	    right: .3rem;
	    background: #ff4040;
	    text-align: center;
	    border-radius: 5px;
	}
	.at_once_top {
	    height: .33rem;
	    line-height: .33rem;
	    color: #ff4040;
	    background: #ffffff;
	    margin: 1px;
	    border-top-left-radius: 4px;
	    border-top-right-radius: 4px;
	    font-size: .22rem;
	    overflow: hidden;
	    position: relative;
	}
	.at_once {
	    color: white;
	    font-size: .26rem;
	    font-weight: bold;
	    height: .5rem;
	    line-height: .5rem;
	}
	/*-------即将开始-----------*/
	.stay_tuned_button {
	    display: block;
	    z-index: 3;
	    position: absolute;
	    width: 1.6rem;
	    height: .64rem;
	    line-height: .64rem;
	    bottom: .3rem;
	    right: .3rem;
	    color: #07a6fa;
	    border: 1px solid #2d8ff4;
	    border-radius: 5px;
	    text-align: center;
	    font-weight: bold;
	    font-size: .26rem;
	}
	/*---------------尾部----------------*/
	.activty_title {
	    width: 100%;
	    height: .72rem;
	    line-height: .72rem;
	    border-top: 1px solid #d3d3d3;
	    border-bottom: 1px solid #d3d3d3;
	    background: #ffffff url(../assets/img/more_jincai.png) no-repeat;
	    background-size: 10%;
	    margin-bottom: .04rem;
	}
	.activty_title_l {
	    font-size: .32rem;
	    margin-left: .6rem;
	}
	.activty_title_r {
	    font-size: .26rem;
	    margin-left: .2rem;
	    color: #b5b5b5;
	}
	.back_index {
	    display: block;
	    text-align: center;
	    height: .88rem;
	    line-height: .88rem;
	    color: #ffffff;
	    font-size: .32rem;
	    font-weight: bold;
	    background: #06a6f8;
	}
</style>