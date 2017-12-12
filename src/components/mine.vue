<template>
    <div id="mine" >
        <header class = "mine-top">
            <router-link to="/index">
                <a class="mine-back" href="#index">首页</a>
            </router-link>
            <p>我的康爱多</p>
        </header>
        <div class="blank"></div>
        <div class="mine-infor">
            <div class="mine-person">
                <p><span class="yellow">{{personalInfo.userName}}</span>,欢迎您</p>
                <p>积分：<span class="yellow">{{personalInfo.count}}</span>分&nbsp;等级：<span class="yellow">{{personalInfo.level}}</span></p>
            </div>
        </div>
        <ul class="mine-nav">
            <li><a href="#"><span>{{personalInfo.waitPay}}</span><p>待付款</p></a></li>
            <li><a href="#"><span>{{personalInfo.waitSend}}</span><p>待发货</p></a></li>
            <li><a href="#"><span>{{personalInfo.waitRecive}}</span><p>待收货</p></a></li>
            <li style="border:none"><a href="#"><span>{{personalInfo.complete}}</span><p>已完成</p></a></li>
        </ul>
        <div class="blank"></div>
        <ul class="mine-main">
            <li><a href="#"><i></i>全部订单</a></li>
            <li><router-link to="/shoppingCar"><i></i>购物车（<span class="red">{{personalInfo.shoppingCar}}</span>）</router-link></li>
            <li><a href="#"><i></i>收藏（<span class="red">{{personalInfo.collect}}</span>）</a></li>
            <div class="blank"></div>
            <li><a href="#"><i></i>优惠券（<span class="red">{{personalInfo.coupon}}</span>）</a></li>
            <li><a href="#"><i></i>积分（<span class="red">{{personalInfo.count}}</span>）</a></li>
            <li><a href="#"><i></i>健康问答</a></li>
            <div class="blank"></div>
            <li><a href="#"><i></i>已绑定手机：{{personalInfo.tel.slice(0,3)}}****{{personalInfo.tel.slice(7)}}<span class="red right">更换</span></a></li>
            <div class="blank"></div>
            <li><a href="#"><i></i>修改密码</a></li>
            <li><a href="#"><i></i>账号绑定</a></li>
            <li><a href="#"><i></i>收货地址管理</a></li>
            <li><a href="#"><i></i>点赞吐槽</a></li>
        </ul>
        <div class="blank"></div>
        <div class="mine-footer">
            <div class="appDown">
                <a href="#"><p class="app-cell">400-8808-488</p></a>
                <a href="#"><p class="app-wx">微信下单专享50元限时特惠</p></a>
                <a href="" style="color: #ff5500;">下载iphone客户端</a>
            </div>
            <div class="footer-size2">
                <span>正品保证</span>
                <span>隐私配送</span>
                <span>专业药师</span>
                <span>货到付款</span>
            </div>
            <div class="footer-size3">copyright&nbsp;&nbsp;©2010-2016 康爱多网上药店 版权所有</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mine',
    data(){
        return{
            personalInfo:[]
        }
    },
    created(){
        $(window).scrollTop(0);
        this.personalInfo = this.$store.getters.getPersonalInfo;
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #mine{
        background: #fff;
     }
    .mine-top{
        width: 100%;
        height: 0.9rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        padding: 0.2rem;
    }
    .mine-back{
        height: 0.9rem;
        width: 0.9rem;
        display: block;
        background: url(../assets/img/header_back.jpg) no-repeat center left;
        background-size: 20% 35%;
        line-height: 0.9rem;
        text-indent: 0.3rem;
        color: #979797;
        font-size: 0.3rem;
       
    }
    .mine-top p{
         margin-right: 2.75rem;
    }
    .appDown{
        padding: 0.2rem 0 0 0;
    }
    .appDown a{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 0.28rem;
        margin-bottom:0.3rem;
    }
    .appDown a p{
        width: 5rem;
        height: 0.6rem;
        line-height: 0.6rem;
        border-radius: 0.1rem;
        color: #fff;
        background-color: #3cb034;
        margin: 0 auto;
       
    }
    .app-cell{
        background:url(../assets/img/cellphone.png) no-repeat #3cb034;
        background-size: 0.4rem 0.4rem;
        background-position: 0.8rem 0.1rem; 
    }
    .app-wx{
        background:url(../assets/img/wxlogo.png) no-repeat #3cb034;
        background-size: 0.4rem 0.4rem;
        background-position: 0.4rem 0.1rem; 
        font-size: 0.24rem;
    }
     .footer-size2 {
        height: .4rem;
        line-height: .4rem;
        text-align: center;
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
    .footer-size3 {
        font-size: .24rem;
        color: #898989;
        line-height: .4rem;
        text-align: center;
    }
    .blank{
        height: 0.2rem;
        background-color: #f5f5f5;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
    }

    .mine-infor{
        width: 100%;
        height: 2.58rem;
        background: #2fa652 url(http://res1.360kad.com/theme/mobile/img/m_user.png) no-repeat;
        background-size: 100% 100%;
        color: #fff;
        font-size: 0.28rem;
        padding: 0.1px;
    }
    .mine-infor p{
        line-height: 1.5em;
    }
    .yellow{
        color: #fff95a;
        font-size: 0.32rem;
    }
    .mine-person{
        margin: 0.8rem 0 0 2.4rem;
    }
    .mine-nav{
        width: 100%;
        height:1.1rem;
        display: flex;
    }
    .mine-nav li{
        width: 25%;
        height: 100%;
        border-right: 1px solid #f2f2f2;
        
    }
    .mine-nav li a{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height:100%; 
    }
    .mine-nav li a span{
        font-size: 0.32rem;
        line-height: 1.5em;
        color: #fc5252;
        font-weight: bold;
    }
    .mine-nav li a p{
        font-size: 0.28rem;
        line-height: 1.5em;
        color: #666;
    }
    .mine-main{
        width: 100%;
    }
    .mine-main li{
        background: url(../assets/img/right_icon.png) no-repeat;
        background-position: 7.1rem center;
        background-size: 0.18rem 0.3rem;
        height: 0.9rem;
        line-height: 0.9rem;
        padding: 0 0.6rem 0 0.2rem;
    }

    .mine-main li:nth-of-type(1) i{
        background: url(../assets/img/m_icon_01.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(2) i{
        background: url(../assets/img/m_icon_03.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(3) i{
        background: url(../assets/img/m_icon_04.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(4) i{
        background: url(../assets/img/m_icon_06.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(5) i{
        background: url(../assets/img/m_icon_07.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(6) i{
        background: url(../assets/img/m_icon_12.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(7) i{
        background: url(../assets/img/m_icon_10.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(8) i{
        background: url(../assets/img/m_icon_08.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(9) i{
        background: url(../assets/img/m_icon_001.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(10) i{
        background: url(../assets/img/m_icon_09.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main li:nth-of-type(11) i{
        background: url(../assets/img/icon.png) no-repeat;
        background-size: 100% 100%;
    }
    .mine-main i{
        display: inline-block;
        width: 0.64rem;
        height: 0.64rem;
        vertical-align: middle;
        margin-right: 0.2rem; 
        
    }
    .red{
        color: #fc5252;
    }
    .right{
        float: right;
    }
</style>
