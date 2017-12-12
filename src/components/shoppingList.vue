<template>
    <div id="shoppingList">
        <!-- 头部部分 -->
        <!-- 部件开始：header start -->
        <header class="n-header">
            <div class="n-logo"><router-link  to="/index"></router-link></div>
            <span class="header-t" v-text="goodsList.til"></span>
            <div class="header-r">
                <router-link to="/shoppingCar"><span class="shop-num">{{personalInfo.shoppingCar}}</span></router-link>
            </div>
        </header>
        <div class="shoppingList-nav">
            <nav><a href="index.html">商城首页&gt;&nbsp;</a><a href="nav/allkind.html">中西药品&gt;&nbsp;</a><a href="#">{{goodsList.til}}</a></nav>
            <a href="#"><img src="http://res4.360kad.com/theme/mobile/img/shoptz.gif" width="16" height="10">APP正在派200元现金券,39元破壁菊花免费领!!</a>
        </div>
        <div class="shoppingList-subnav" >
            <a v-for="item in goodsList.nav" :href="item.href">{{item.text}}</a>
        </div>
        <a class="shoppingList-subnav-oppenall" @tap="$('.shoppingList-subnav').css({'overflow':'auto','height':'auto'});$('.shoppingList-subnav-oppenall').css('display','none')">展开全部</a>
        <ul class="shoppingList-main">
            <li v-for="item in goodsList.list">
                <img v-lazy="item.imgsrc" >
                <div class="list-p">
                    <p>item.name<span class="blue">{{item.spe}}</span>{{item.active}}</p>
                    <p class="price">{{item.price}}</p>
                </div>
            </li>
        </ul>
        <p class="logistics">向上滑继续加载</p>
        <!-- 底部 -->
        <footer class="n-footer clear">
            <div class="padd">
                <p>
                    <span><a href="###">登录</a></span>
                    <span><a href="###">注册</a></span>
                </p>
                <a href="###" class="backtp">首页</a>
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
   name:'shoppingList',
    data(){
        return{
            goodsList:{},
            personalInfo:[]
        }
    },
    created(){
        $(window).scrollTop(0);
        this.personalInfo = this.$store.getters.getPersonalInfo;
        this.$http.get("/static/json/goodsList.json",{
            params:{
            }
        }).then((res)=>{
            this.goodsList = res.data
            console.log(this.goodsList)
        });

        
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #shoppingList{
        background: #fff;
    }
    /*-----------------------------header-------------------------*/
    #shoppingList .n-header{
        height: 1.34rem;
        min-width: 6rem;
        padding: .2rem .1rem .2rem .2rem;
        border-bottom: 1px solid #d3d3d3;
        text-align: center;
    }
    #shoppingList .n-logo{
        float: left;
    }
    #shoppingList .n-logo a{
        display: block;
        width: 1.88rem;
        height: 1rem;
        background: url(http://res2.360kad.com/theme/mobile/img/logo2.png) no-repeat;
        background-size: 1.88rem .9rem;
    }
    #shoppingList .header-t{
        display: inline-block;
        padding-top: .25rem;
        font-size: .32rem;
        color: #000000;
        margin-right: .38rem;
    }
    #shoppingList .header-r{
        float: right;
        margin:.24rem 0.1rem 0 0; 
    }
    #shoppingList .header-r a{
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
    #shoppingList .shop-num{
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
    /*----------------------footer-------------------------*/
    #shoppingList .n-footer{
        min-width: 6.4rem;
        width: 100%;
        margin: 0 auto;
        height: auto;
        text-align: center;
        padding-bottom: 1.15rem;
    }
    .padd{
        padding: .34rem .22rem 0 .22rem;
        line-height: 195%;
        height: .88rem;
    }
    .padd p{
        float: left;
        display: inline-block;
    }
    .padd span{
        display: inline-block;
        margin-right: 0.1rem; 
    }
    .padd span a{
        display: inline-block;
        color: #1b7ce3;
    }
    .backtp{
        display: inline-block;
        float: right;
        color: #7d7d7d;
        background: url(http://res2.360kad.com/theme/mobile/img/shouye.png) no-repeat left;
        background-size: .34rem .3rem;
        text-indent: 0.4rem;
    }
    .fot{
        margin: 0 auto;
        width: 100%;
        line-height: 200%;
        font-size: .24rem;
    }
    .fot ul{
        display: inline-block;
        margin: 0 auto;
        text-align: center;
    }
    .fot li{
        float: left;
    }
    .fot li a{
        display: inline-block;
        padding: 0 0.08rem;
        color: #b8b8b8;
    }
    .grycol{
        padding-left: .06rem;
        display: inline-block;
        margin-left: .08rem;
    }
    .app_down{
        max-width: 12.8rem;
        min-width: 6.4rem;
        width: 100%;
        margin: 0 auto;
    }
    .app_down a{
        display: block;
        margin: 0 auto .2rem;
        padding-bottom: 0;
    }
    .foot{
        width: 5rem;
        height: .6rem;
        line-height: .6rem;
        border-radius: .1rem;
        margin: 0 auto;
        color: #fff;
    }
    .foorPHon{
        font-size: .3rem;
        background: #97cc74 url(http://res3.360kad.com/theme/mobile/img/phone0910.png)no-repeat 24% center;
        background-size: .48rem .6rem;
    }
    .foorPHon span{
        margin-left: 0.8rem;
    }
    .footwx{
        font-size: .24rem;
        background: #3cb034 url(http://res4.360kad.com/theme/mobile/img/wxlogo.png) no-repeat 8% center;
        background-size: .56rem .46rem;
    }
    .footwx span{
        margin-left: .7rem;
    }
    #app_dowml{
        font-size: .26rem;
        line-height: 150%;
    }
    #app_dowml a{
        color: #ff5500;
    }
    .app_down a{
        width: 93.75%;
    }
    .footmess{
        display: inline-block;
        margin: 0 auto;
        font-size: .24rem;
        line-height: 170%;
    }
    .footmess li{
        display: inline-block;
        float: left;
        margin-right: .1rem;
    }
    .radius45{
        display: inline-block;
        background: #1b7ce3;
        border-radius: 50%;
        color: #fff;
        margin-right: .08rem;
        padding: 0 .06rem;
    }
    .copyrg{
        margin-bottom: .4rem;
        font-size: .24rem;
        line-height: 190%;
    }
    .shoppingList-nav nav a{
        color: #999999;
        font-size: .28rem;
    }
    .shoppingList-nav nav a:last-child{
        color: #0066cc;
    }
    .shoppingList-nav nav{
        margin:0.2rem 0 0.06rem 0.2rem;
    }
    .shoppingList-nav>a{
        color: #ff6666;
        font-size: .28rem;
        margin: 0 0 .2rem .2rem ;
    }
    .shoppingList-subnav{
        width: 100%;
        height: 2.3rem;
        padding: .2rem;
        background: #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .shoppingList-subnav a{
        display: block;
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.2rem;
        background-color: #FFF;
        border-radius: 0.1rem;
        margin: 0.1rem .1rem .1rem 0;
        text-align: center;
        font-size: 0.28rem;
        color: #222;

    }
    .shoppingList-subnav-oppenall{
        width: 1.9rem;
        display:block;
        height: 0.6rem;
        line-height: .6rem;
        margin: 0 auto;
        background: url(../assets/img/select-bottom.png) no-repeat 1.4rem;
        padding-right: .36rem;
        background-size: .24rem .14rem;
        color: #7ba371;
        font-size: .24rem;
        background-color: #dcf3d6;
        border-radius: 0 0 .1rem .1rem;
        text-align: center;
    }
    .blue{
         color: #1264ba;
    }
    .shoppingList-main li{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f4f4f4;
        width: 100%;
        height: 2.5rem;
        padding: .2rem .3rem .2rem .2rem ;
    }
    .shoppingList-main li img{
        width: 2.08rem;
        height: 2.08rem;
    }
    .shoppingList-main li .list-p{
        width: 4.8rem;
        font-size: .28rem;
    }
    .shoppingList-main li .list-p p:first-child{
        height: .88rem;
        overflow: hidden;
    }
    .price{
        color: #fc5252;
        font-size: .32rem;
        font-weight: bold;
    }
    .logistics {
        height: .9rem;
        line-height: .94rem;
        background-color: #f5f5f5;
        text-align: center;
        color: #000;
        border-bottom: 1px solid #ebebeb;
    }
</style>
