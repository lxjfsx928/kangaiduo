<template>
    <div id="submitOrder">
        <!-- 头部 -->
        <header class = "submitOrder-top">
            <a class="submitOrder-back" @tap="back"></a>
            <p>提交订单</p>
        </header>
        <div class="submitOrder-tips">
            <i></i><span>请在24小时内完成在线支付，逾期订单作废。</span>
        </div>
        <div class="submitOrder-order">
            <p>您的订单号：1585195710</p>
            <p>应付金额：<span class="orange">￥{{orderCount}}</span></p>
        </div>
        <div class="submitOrder-payMod">
            <p>选择支付方式</p>
            <ul>
                <li>
                    <img src="http://res4.360kad.com/theme/mobile/image/buy/alipaywap.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>手机支付宝</p>
                        <p>推荐支付宝用户使用</p>
                    </div>
                    <img src="http://res3.360kad.com/theme/mobile/image/buy/recommend.png" class="submitOrder-payMod-img2">
                </li>
                <li>
                    <img src="http://res2.360kad.com/theme/mobile/image/buy/PayecoH5.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>手机银联支付</p>
                        <p>有银联卡就支付</p>
                    </div>
                </li>
                <li>
                    <img src="http://res3.360kad.com/theme/mobile/image/buy/ebaolife.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>健保通（医卡通）</p>
                        <p>健康保险服务卡</p>
                    </div>
                </li>
                <li>
                    <img src="http://res1.360kad.com/theme/mobile/image/buy/JianYi.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>健医支付</p>
                        <p>健医在线支付</p>
                    </div>
                </li>
                <li>
                    <img src="http://res.360kad.com/theme/mobile/image/buy/UnionCard.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>钥匙卡</p>
                        <p>健康医保支付</p>
                    </div>
                </li>
                <li>
                    <img src="http://res.360kad.com/theme/mobile/image/buy/pukang.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>普康宝</p>
                        <p>普康宝健康服务卡</p>
                    </div>
                </li>
                <li>
                    <img src="http://res.360kad.com/theme/mobile/image/buy/haohe.png" class="submitOrder-payMod-img1">
                    <div>
                        <p>优福</p>
                        <p>保险医疗健康直付</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
   name:'submitOrder',
   data(){
        return{
            orderCount:0
        }
        
    },
    created(){
        $(window).scrollTop(0);
       wbus.$on('countChange',(orderCount)=>{
            this.orderCount = orderCount;
       });
    },
    methods:{
        back(){
            history.go(-1);
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #submitOrder {
        background: #f8f8f8;
    }
    .submitOrder-top{
        width: 100%;
        height: 0.9rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        padding: 0.2rem;
        border-bottom: solid 1px #eee;
        background-color: #f8f8f8;
    }
    .submitOrder-back{
        height: 0.9rem;
        width: 0.9rem;
        display: block;
        background: url(../assets/img/m-nav-select.png) no-repeat .15rem center;
        background-size: 30% 50%;
        line-height: 0.9rem;
        text-indent: 0.3rem;
        color: #979797;
        font-size: 0.3rem;   
    }
    .submitOrder-top p{
         margin-right: 2.75rem;
    }
    .orange{
        color: #ea4429;
        font-size: 0.36rem;
        font-family: arial;
    }
    .submitOrder-tips{
         width: 100%;
        height: .6rem;
        line-height: .6rem;
        color: #888888;
        font-size: .24rem;
        padding-left: .75rem;
        border-bottom: solid 1px #eee;
        background: #f7f3e5 url(../assets/img/promptIcon.png) no-repeat .34rem center;
        background-size: .3rem;
    }
    .submitOrder-order p{
        height: .9rem;
        line-height: .9rem;
        border-bottom: solid 1px #eee;
        background: #fff;
        padding: 0 0.3rem;
        font-size: 0.3rem;
    }
    .submitOrder-order{
        margin-bottom: .3rem;
    }
    .submitOrder-payMod{
        background: #fff;
    }
    .submitOrder-payMod>p{
        height: .6rem;
        line-height: .6rem;
        padding: 0 .3rem;
        border-bottom: solid 1px #eee;
    }
    .submitOrder-payMod li{
        width: 100%;
        height: 1.1rem;
        line-height: 1.1rem;
        border-bottom: solid 1px #eee;
        padding-right: .4rem;
        box-sizing: border-box;
        background: url(../assets/img/right_icon.png) no-repeat 7.1rem center;
        background-size: .17rem .28rem;
        display: flex;
        align-items: center;
    }
    .submitOrder-payMod-img1{
        width: 0.94rem;
        height: 1.08rem;
    }
    .submitOrder-payMod-img2{
        width: .92rem;
        height: .38rem;
        margin-left:2.8rem;
    }
    .submitOrder-payMod div p{
        line-height: .3rem;
        font-size: .24rem;
        color: #b5b5b5;
    }
    .submitOrder-payMod div p:first-child{
        font-size: .28rem;
        color: #222;
    }
</style>
