<template>
   <div id="shoppingCar">
        <!-- 头部 -->
        <header class = "shoppingCar-top">
            <a class="shoppingCar-back" @tap="back"></a>
            <p>购物车</p>
            <a class="shoppingCar-bj" href="javascript:void(0)">编辑</a>
        </header>
        <template v-for="item in shoppingCarList">
        <div class="shopping-list">
            <div class="shopping-goods">
                <span class="shopping-icon"></span>
                <a href="#"><img v-lazy=item.pic180></a>
                <div>
                    <p class="shopping-goods-name">{{item.name}}</p>
                    <div class="shopping-goods-content">
                        <div class="shopping-price">
                            ￥{{item.sale_price}}
                        </div>
                        <div class="shopping-goods-count">
                            <a href="javascript:void(0)" @click="count('-',item)">-</a><input type="text"  v-model="item.count"><a href="javascript:void(0)" @click="count('+',item)">+</a>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        </template>
        <div class="shopping-footer">
            <p><span class=shopping-icon></span>全选</p>
            <div class="shopping-price-count">
                <p>总计：<span>{{totalPrice}}</span></p>
                <span>改订单已包邮</span>
            </div>
            <div class="shopping-btn"><router-link to="/enterOrder">去结算</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
   name:'shoppingCar',
   data(){
        return{
        shoppingCarList:[]
        }
    },
    created(){
        if(sessionStorage.user){
            this.$http.get("http://10.0.154.212:8888/shoppingcar",{
                params:{
                    id:JSON.parse(sessionStorage.user).id
                }
            }).then(res=>{
                this.shoppingCarList=res.data;
            })
        }else{
            location.hash="/enter"
        }
       $(window).scrollTop(0);
    },
    methods:{
        back(){
            history.back();
        },
        count(code,item){
            var e="item.count"+code+code;
            // eval("item.count"+code+code)
            eval(e);
            if(item.count<=0){
                item.count=0;
            }
            this.$http.get("http://127.0.0.1:8888/cartCount",{
				params:{
                    id:JSON.parse(sessionStorage.user).id,
                    code:item.code,
                    count:item.count                                                          
				}
			})
        }
    },
    computed:{
        totalPrice:function(){
            var totalPrice=0;
            for(var i =0;i<this.shoppingCarList.length;i++){
                totalPrice += this.shoppingCarList[i].sale_price*this.shoppingCarList[i].count
            }
            console.log(totalPrice);
            return totalPrice;
        }
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #shoppingCar img{
        vertical-align: middle;
     }
    #shoppingCar{
        background-color: #f8f8f8;
        padding-bottom: 1.2rem;
        min-height: 100vh;
     }
    .shoppingCar-top{
        width: 100%;
        height: 0.88rem;
        background: #f0f0f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.36rem;
        color: #222;
        padding: 0.2rem;
        font-weight: 700;
    }
    .shoppingCar-back{
        width: .77rem;
        left: 0;
        background: url(../assets/img/m_goback.png) no-repeat .35rem center;
        background-size: .23rem .44rem;
        height: .88rem;
        line-height: .88rem;
       display: block;
    }
    .shoppingCar-top .shoppingCar-bj{
        color: #222;
        font-size: 0.3rem;
        font-weight: 100;
    }
    .shopping-list{
        background: #fff;
        width: 100%;
        margin-bottom: 0.3rem;
    }
    .shopping-shop{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        border-bottom: solid 1px #eee;
        background-color: #fff;
        position: relative;
        font-weight: 300;
        font-size: 0.32rem;
    }
    .shopping-icon{
        width: .92rem;
        height: 1rem;
        float: left;
        background: url(../assets/img/radio_yes.png) no-repeat .3rem center;
        background-size: .36rem;
    }
    .shopping-goods{
        display: flex;
        align-items: center;
        padding: .3rem 0;
    }
    .shopping-goods img{
        width: 1.6rem;
        height: 1.6rem;
        border:1px solid #eee;
    }
    .shopping-goods>div{
        width: 5.36rem;
        height: 1.6rem;
        padding: 0 0.2rem;
    }
    .shopping-goods-name{
        font-size: .28rem;
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
    .shopping-price{
        font-size: .28rem;
        color: #ff4040;
    }
    .shopping-goods-count{
        font-size: .28rem;
    }
    .shopping-goods-count a{
        width: .6rem;
        height: .6rem;
        line-height: 0.5rem;
        font-size: .6rem;
        border: solid 1px #888888;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
    }
    .shopping-goods-count input{
        width: 1rem;
        border-left: none;
        border-right: none;
        text-align: center;
        height: .6rem;
        border: solid 1px #888888;
    }
    .shopping-goods-content{
        display: flex;
        justify-content: space-between;
    }
    .shopping-huangou{
        height: .95rem;
        width: 6.64rem;
        margin: 0 auto;
        padding: .24rem 0;
        border-top: solid 1px #eee;
        color: #888888;

    }
    .shopping-huangou1{
        border: solid 1px #d683fd;
        color: #d683fd;
        height: .34rem;
        line-height: .3rem;
        text-align: center;
        display: inline-block;
        padding: 0 .1rem;
        margin-top: .05rem;
        float: left;
        font-size: .24rem;
        border-radius: 2px;
        margin-right: .1rem;
        vertical-align: middle;
    }
    .shopping-huangou2{
        color: #888;
        height: .48rem;
        line-height: .46rem;
        font-size: .24rem;
    }
    .shopping-huangou3{
        width: 1.16rem;
        height: .44rem;
        border: solid 1px #eee;
        border-radius: 2px;
        float: right;
        line-height: .42rem;
        text-indent: .1rem;
        color: #555;
        background: url(../assets/img/right_icon.png) no-repeat 94% center;
        background-size: .13rem .22rem;
        font-size: .24rem;
    }
    .shopping-footer{
        width: 100%;
        height: 1.2rem;
        position: fixed;
        bottom: 0;
        left:0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }
    .shopping-footer>p{
        height: 1rem;
        line-height: 1rem;
        color: #888;
        font-size: 0.32rem;
    }
    .shopping-footer>p .shopping-icon{
        width: 0.7rem;
    }
    .shopping-price-count{
        font-size: .28rem;
        color: #252525;
        position: absolute;
        right: 3.2rem;
    }
    .shopping-price-count>span{
        height: .5rem;
        line-height: .4rem;
        font-size: .22rem;
        color: #999999;
    }
    .shopping-price-count>p>span{
        font-size: .32rem;
        color: #ff4040;
    }
    .shopping-btn a{
        color: #fff;
    }
    .shopping-btn{
        color: #fff;
        width: 3rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        font-size: 0.4rem;
        background-color: #ff4040;
    }
</style>
