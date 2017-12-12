<template>
    <div id="enter">
        <!-- 头部 -->
        <header class = "enter-top">
            <a class="enter-back" @tap="back">返回</a>
            <p>用户登录</p>
            <router-link class="enter-home" to="/index"></router-link>
        </header>
        <p class="blank"></p>
        <!-- 表单 -->
        <div class="enter-form">
            <form>
                <p>
                    <label class="enter-userName">
                        <span></span>
                        <input type="text" placeholder = "用户名/手机/邮箱">
                    </label>
                </p>
                <p>
                    <label class="enter-password">
                        <span></span>
                        <input type="password" placeholder="密码">
                    </label>
                </p>
                <p class="enter-tips">您输入的账户名不存在或密码不匹配，请重新输入！</p>
                <p class="enter-btn">
                    <input type="button" value="登录" @tap="enter">
                </p>
            </form>
            <p class="enter-space">
                <router-link to="/register">立即注册>></router-link>
                <a href="#">忘记密码？</a>
            </p>
            <div class="enter-other">
                <p>使用合作伙伴账号登录：</p>
                <ul>
                    <li><a href="#"><img src="../assets/img/taobao.jpg"></a></li>
                    <li><a href="#"><img src="../assets/img/xinlang.png"></a></li>
                    <li><a href="#"><img src="../assets/img/qq.png"></a></li>
                    <li><a href="#"><img src="../assets/img/ebaolife.png"></a></li>
                </ul>
            </div>
        </div>
        <p class="blank"></p>
        <div class="enter-footer">
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
  name: 'enter',
  data () {
    return {
    userList:[]
    }
  },
    created(){
        if(sessionStorage.user) history.go(-1);
    },
  methods:{
        enter(){
            this.$http.get('http://127.0.0.1:8888/enter',{
                params:{
                    tel:$('.enter-userName input').val(),
                    pwd:$('.enter-password input').val()
                }
            })
             .then(res=>{
                 if(res.data.isEnter === true){
                     sessionStorage.user = JSON.stringify(res.data);
                     this.$http.get('http://127.0.0.1:8888/shoppingcar',{
                         params:{
                             id:JSON.parse(sessionStorage.user).id
                         }
                     }).then(res=>{
                         console.log(res.data)
                     })
                 }else{
                    $(".enter-tips").show();
                 }
                 if(sessionStorage.user) history.go(-1);
             })
            
        },
        back(){
            history.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #enter{
        background: #fff;
     }
    .enter-top{
        width: 100%;
        height: 0.9rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        padding: 0.2rem;
    }
    .enter-form .enter-tips{
        color: #fc5252;
        font-size: .28rem;
        padding-left: .3rem;
        border-bottom: none;
        display: none;
    }
    .enter-back{
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
    .enter-home{
        background: url(../assets/img/header_home.jpg) no-repeat;
        background-size: 100%;
        width: 0.36rem;
        height: 0.34rem;
        display: block;
    }
    .enter-form{
        width: 100%;
        height: 6.1rem;
        background: #fff;
    }
    .blank{
        height: 0.2rem;
        background-color: #f5f5f5;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
    }
    .enter-form form p{
        height: 0.9rem;
        line-height: 0.9rem;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
    }
    .enter-form form p:last-child{
        margin-top: 0.2rem;
        border:none;
    }
    .enter-form p span{
        width: 0.9rem;
        height: 0.9rem;
        float: left;
    }
    .enter-userName span{
        background: url(../assets/img/userName.png);
        background-size: 100% 100%;
    }
    .enter-form input {
        line-height: 0.9rem;
        width: 6.5rem;
        text-indent: 0.2rem;
        font-size: 0.26rem;
    }
    .enter-password span{
        background: url(../assets/img/PassWord.png);
        background-size: 100% 100%;
    }
    .enter-form .enter-btn input{
        width: 7.1rem;
        margin:0 auto;
        border-radius: 5px;
        background-color: #f03030;
        text-align: center;
        color: #FFF;
        font-size: .32rem;
        border: none;
    }
    .enter-space{
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.2rem 0;
        height: 0.6rem;
    }
    .enter-space a{
        color: #1264ba;
        font-size: 0.28rem;
        
    }
    .enter-other{
        padding: 0.2rem;
        color: #292929;
    }
    .enter-other ul{
        display: flex;
        justify-content: space-around;
    }
    .enter-other img{
        width: 0.9rem;
        height: 0.9rem;
    }
    .enter-other p{
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.28rem;
    }
       
    .enter-other ul a{
        width: 1.26rem;
        height: 1.26rem;
        border: 1px #ebebeb solid;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .enter-footer{
        width: 100%;
        padding: 0.6rem 0.2rem;
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
</style>
