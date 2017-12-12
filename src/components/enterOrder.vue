<template>
   <div id="enterOrder">
        <!-- 头部 -->
        <header class = "enterOrder-top">
            <router-link  to="/index" class="enterOrder-back" >首页</router-link>
            <p>确认订单</p>
        </header>
        <!-- <div class="enterOrder-person enterOrder-gt">
            <p class="enterOrder-person1"><i></i>{{personalInfo.addr[0].name}}&nbsp;&nbsp;{{personalInfo.addr[0].tel}}</p>
            <p class="enterOrder-person2"><span style="color: #06a6f8;">[默认]</span>{{personalInfo.addr[0].addr}}</p>
        </div> -->
        <div class="blank"></div>
        <div class="enterOrder-payment enterOrder-gt">
            <p>支付配送</p>
            <ul>
                <li>快递配送</li>
                <li>在线支付</li>
                <li>不限定时间</li>
            </ul>
        </div>
        <div class="blank"></div>
        <template v-for="item in shoppingCarList">
        <div class="enterOrder-goods">
            <div class="enterOrder-goods2">
                <a href="#"><img v-lazy="item.pic180"></a>
                <div>
                    <p class="enterOrder-goods-name">{{item.name}}</p>
                    <div class="enterOrder-goods-content">
                        <p>价格：<span class="red">￥{{item.sale_price}}</span></p>
                        <p>x{{item.count}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="blank"></div>
        </template>
        <div class="enterOrder-coupon enterOrder-gt">
            <p>使用优惠券<span>(0张可用)</span></p>
        </div>
        <div class="enterOrder-integral">
            <p>可用<span class="red">200</span >积分抵扣<span class="red">1</span>元</p>
            <div><span></span></div>
        </div>
        <div class="blank"></div>
        <div class="enterOrder-integral">
            <p>是否需要发票</p>
            <div><span></span></div>
        </div>
        <div class="blank"></div>
        <div class="enterOrder-coupon">
            <p>订单备注：<span><input type="text" placeholder="限50字以内"></span></p>
        </div>
        <div class="blank"></div>
        <div class="enterOrder-integral">
            <p>商品金额</p>
            <span class="red">￥{{orderCount}}</span>
        </div>
        <div class="enterOrder-last">
            <div class="enterOrder-lastr-cont"><span>运费</span><span class="red">￥15.00</span></div> 
            <div class="enterOrder-lastr-cont"><span>积分抵扣</span><span class="red">-￥0.00</span></div>   
        </div>
        <div class="enterOrder-footer">
            <div class="enterOrder-price-count">
                <p>总计：<span>￥{{orderCount+15}}</span></p>
            </div>
            <router-link to="/submitOrder">
            <div class="enterOrder-btn">提交订单</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
   name:'enterOrder',
    date(){
        return{
            shoppingCarList:[],
            personalInfo:[]
        }
    },
    beforeCreate(){
        if(sessionStorage.user){
            this.$http.get("http://127.0.0.1:8888/shoppingcar",{
                params:{
                    id:JSON.parse(sessionStorage.user).id
                }
            }).then(res=>{
                this.shoppingCarList=res.data;
            })
        }
    },
    created:function(){
        
        // $(window).scrollTop(0);
        // this.personalInfo = this.$store.getters.getPersonalInfo;
        // console.log(this.personalInfo)
    },
    methods:{
       
    },
    computed:{
        orderCount:function(){
            var totalPrice=0;
            for(var i =0;i<this.shoppingCarList.length;i++){
                totalPrice += this.shoppingCarList[i].sale_price*this.shoppingCarList[i].count
            }
            return totalPrice;
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #enterOrder{
        background: #fff;
        padding-bottom: 1.2rem;
    }
    .enterOrder-top{
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
    .enterOrder-back{
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
    .enterOrder-top p{
         margin-right: 2.75rem;
    }
    .enterOrder-person{
        width: 100%;
        background: url(../assets/img/lineIcon.png) repeat-x left top;
        background-size: auto .06rem;
        padding: .4rem .3rem .3rem;
        box-sizing: border-box;
        border-bottom: solid 1px #eee;
    }
    .blank{
        height: 0.3rem;
        background-color: #f5f5f5;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
    }
    .enterOrder-gt{
        background: url(../assets/img/right_icon.png) 7.1rem center no-repeat;
        background-size: .16rem .28rem;
    }
    .enterOrder-person{
        font-size: .32rem;
        width: 100%;
        height: 2rem;
        padding: 0.4rem 0.3rem .3rem .3rem;
    }
    .enterOrder-person1{
        font-size: 0.32rem ;

    } 
    .enterOrder-person1 i{
        width: .4rem;
        height: .4rem;
        display: block;
        float: left;
        background: url(../assets/img/addressIcon.png) center no-repeat;
        background-size: .23rem .3rem;
    }
    .enterOrder-person2{
        margin-top: .1rem;
        font-size: .28rem;
        width: 90%;
        line-height: .4rem;
        float: left;
    }
    .enterOrder-payment{
        width: 100%;
        height: 1.74rem;
        padding: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .enterOrder-payment p{
        color: #252525;
        font-size: 0.3rem;
    }
    .enterOrder-payment ul{
        text-align: right;
        padding: 0 0.2rem;
        color:#555;
        font-size: 0.3rem;
    }
    .enterOrder-goods{
        width: 100%;
    }
    .enterOrder-goods1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.3rem;
        border-bottom: 1px solid #eee;
        height: 1rem;
        line-height: 1rem;
    }
    .enterOrder-goods2{
        display: flex;
        align-items: center;
        padding:.3rem;
    }
    .enterOrder-goods img{
        width: 1.6rem;
        height: 1.6rem;
        border:1px solid #eee;
    }
    .enterOrder-goods2>div{
        width: 5.36rem;
        height: 1.6rem;
        padding: 0 0.2rem;
    }
    .enterOrder-goods-name{
        font-size: .3rem;
        color: #252525;
        height: .8rem;
        line-height: .4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: .15rem;

    }
    .enterOrder-goods-content{
        display: flex;
        justify-content: space-between;
        color: #888;
        font-size: 0.26rem;
    }
    .enterOrder-coupon{
        width: 100%;
        height: 1.02rem;
        padding: 0 0.3rem;
    }
    .enterOrder-coupon p{
        line-height: 1rem;
        font-size: .3rem;
        color: #222;
        border-bottom:1px solid #eee;
    }
    .enterOrder-coupon p span{
        font-size: 0.28rem;
        color: #888;
    }
    .red{
        color: #ff4040;
    }
    .enterOrder-integral{
        width: 100%;
        height: 1rem;
        padding: 0 0.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .enterOrder-integral>div{
        width: 0.9rem;
        height: 0.4rem;
        border-radius: 0.2rem 0.2rem;
        background: #ccc;
    }
    .enterOrder-integral>div>span{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        border: 0.02rem solid #ccc;
        border-radius: 50%;
        background: #fff;
    }
    .enterOrder-last{
        width: 100%;
        height: 1.3rem;
        padding: 0.2rem 0.3rem;
    }
    .enterOrder-lastr-cont{
        width: 100%;
        height: 50%;
        font-size: 0.28rem;
        color: #888;
        display: flex;
        justify-content: space-between;
    }
    .enterOrder-footer{
        width: 100%;
        height: 1.2rem;
        position: fixed;
        bottom: 0;
        left:0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: #fff;
    }
    .enterOrder-footer>p{
        height: 1rem;
        line-height: 1rem;
        color: #888;
        font-size: 0.32rem;
    }
    .enterOrder-footer>p .enterOrder-icon{
        width: 0.7rem;
    }
    .enterOrder-price-count{
        font-size: .28rem;
        color: #252525;
        position: absolute;
        right: 4rem;
    }

    .enterOrder-price-count>p>span{
        font-size: .32rem;
        color: #ff4040;
        font-weight: 700;
    }
    .enterOrder-btn a{
        color: #fff;
    }
    .enterOrder-btn{
        color: #fff;
        width: 3rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        font-size: 0.4rem;
        background-color: #ff4040;
    }
</style>
