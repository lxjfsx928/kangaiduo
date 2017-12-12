<template>
    <div id="register">
        <!-- 头部 -->
        <header class = "register-top">
            <a class="register-back"  @tap="back">返回</a>
            <p>用户注册</p>
            <a class="register-home" href="index.html"></a>
        </header>
        <p class="register-blank"></p>
        <!-- 表单 -->
        <div class="register-form">
            <form>
                <p>
                    <label class="register-userName">
                        <span>手机号码：</span>
                        <input type="text" placeholder = "用户名/手机/邮箱" @blur="userName">
                    </label>
                </p>
                <p>
                    <label class="register-password">
                        <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                        <input type="password" placeholder="请设置6位数以上密码">
                    </label>
                </p>
                <p>
                    <label class="register-yzm">
                        <span>验&nbsp;证&nbsp;码：</span>
                        <input type="text" placeholder="请输入验证码">
                        <a href="javascript:void(0)"><img src="http://m.360kad.com/Register/GetValidateCode"></a>
                    </label>
                </p>
                <p>
                    <label class="register-msgyzm">
                        <span>短信验证码：</span>
                        <input type="text" placeholder="请输入短信验证码">
                        <a href="javascript:void(0)" class="register-getmsg">获取验证码</a>
                    </label>
                </p>    
            </form>
        </div>
        <p class="register-agree"><i></i>同意康爱多网上药店注册协议</p>
        <p class="register-btn">
            <input type="button" value="注册" @tap="register">
        </p>
        <div class="register-outer-box">
            <div class="register-inner-box">
                <p><i @tap="close"></i></p>
                <h3>账号确认</h3>
                <div>该手机号已经存在。</div>
                <router-link to="/enter">直接登录</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enter',
    data(){
        return{
            userList:[]
        }
    },
    created(){
        $(window).scrollTop(0);
        this.userList = this.$store.getters.getUserList;
    },
    methods:{
        register(){
            if(this.userName()==true){
                if($(".register-userName input").val()==""||$(".register-password input").val()==""){
                    $(".register-outer-box").show();
                    $(".register-inner-box div").text("用户名或密码不能为空。");
                }
                else{
                    wvue.userList[$(".register-userName input").val()]=$(".register-password input").val();
                    location.hash = "/index";
                    this.$store.dispatch('addIsEnter', true);
                }
                if(this.$store.getters.getIsEnter) history.go(-1);
            }
        },
        userName(){
            if(this.userList[$(".register-userName input").val()]===undefined){
                return true;
            }
            else{
                $(".register-outer-box").show();
                $(".register-inner-box div").text("该手机号已经存在。");
                return false;
            }
        },
        close(){
            $('.register-outer-box').hide();
        },
        back(){
            history.go(-1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #register{
        background-color: rgb(240, 240, 240);
     }
    #register img{
        vertical-align: middle;
     }
    .register-top{
        width: 100%;
        height: 0.9rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        padding: 0.2rem;
    }
    .register-back{
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
    .register-home{
        background: url(../assets/img/header_home.jpg) no-repeat;
        background-size: 100%;
        width: 0.36rem;
        height: 0.34rem;
        display: block;
    }
    .register-form{
        background: #fff;
    }
    .register-blank{
        height: 0.5rem;
        background-color: rgb(240, 240, 240);
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;
    }
    .register-form p{
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.3rem;
        padding: 0 0.4rem;
        border-bottom: solid 1px #dadada;
        color: #555;
    }
    .register-form input{
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.28rem;
        width: 5rem;
    }
    .register-form  .register-yzm input{
        width: 3.6rem;
    }

    .register-msgyzm input{
        width: 3rem;
    }
    .register-getmsg{
        background-color: #b5b5b5;
        color: #fff;
        float: right;
        width: 1.8rem;
        height: 0.88rem;
        font-size: 0.28rem;
        text-align: center;
    }
    .register-agree{
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        padding: 0 .3rem;
        font-size: .26rem;
        color: #555555;
    }
    .register-agree i{
        width: .38rem;
        height: .38rem;
        display: inline-block;
        background: url(../assets/img/radio_not.png) no-repeat;
        background-size: .38rem;
        float: left;
        margin: 0.3rem .1rem 0 0;
    }
    .register-btn input{
        background-color: #b5b5b5;
        color: #fff;
        width: 6.9rem;
        height: .9rem;
        line-height: .9rem;
        display: block;
        margin: .3rem auto 0;
        text-align: center;
        font-size: .32rem;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .register-outer-box{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgba(0,0,0,.5);
        display: none;
    }
    .register-inner-box{
        width: 6rem;
        height: 2.74rem;
        position: fixed;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        background: #fff;
        border-radius: .1rem;
        padding: .2rem 0 0 0;  
    }
    .register-inner-box p{
        width: 100%;
        height: .26rem;
        padding: 0 .2rem;
        box-sizing: border-box;
    }
    .register-inner-box p i{
        width: .26rem;
        height: .26rem;
        display: inline-block;
        background: url(../assets/img/close_icon.jpg) no-repeat;
        background-size: 100%;
        float: right;
    }
    .register-inner-box h3{
        width: 100%;
        height: .38rem;
        line-height: .38rem;
        padding: 0 .2rem;
        font-size: .32rem;
        text-align: center;
        box-sizing: border-box;
    }
    .register-inner-box a{
        color: #06a6f8;
        font-size: .32rem;
        text-align: center;
        display: block;
    }
    .register-inner-box div{
        width: 100%;
        padding: .3rem .4rem;
        box-sizing: border-box;
        line-height: .4rem;
        font-size: .28rem;
        margin-bottom: .2rem;
        border-bottom: solid 1px #e8e8e8;
    }
</style>
