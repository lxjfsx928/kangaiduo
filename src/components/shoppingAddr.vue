<template>
    <div id="shoppingAddr">
        <!-- 头部 -->
        <header class = "shoppingAddr-top">
            <a class="shoppingAddr-back" @tap="back"></a>
            <p>新增收货地址</p>
        </header>
        <!-- 表单 -->
        <div class="shoppingAddr-form">
            <form>
                <p>
                    <label class="shoppingAddr-name">
                        <span>收&nbsp;货&nbsp;人：</span>
                        <input type="text" placeholder = "请输入收货人姓名">
                    </label>
                </p>
                <p>
                    <label class="shoppingAddr-tel">
                        <span>手机号码：</span>
                        <input type="text" placeholder = "请输入11位手机号码">
                    </label>
                </p>
                <div class="shoppingAddr-addr">
                    <span>所在地区：</span>
                    <div>
                        <p><select id="ProvinceId" name="ProvinceId">
                            <option value="-1">请选择省份</option>
                            <option value="110000">北京</option>
                            <option value="120000">天津</option>
                            <option value="130000">河北省</option>
                            <option value="140000">山西省</option>
                            <option value="150000">内蒙古自治区</option>
                            <option value="210000">辽宁省</option>
                            <option value="220000">吉林省</option>
                            <option value="230000">黑龙江省</option>
                            <option value="310000">上海</option>
                            <option value="320000">江苏省</option>
                            <option value="330000">浙江省</option>
                            <option value="340000">安徽省</option>
                            <option value="350000">福建省</option>
                            <option value="360000">江西省</option>
                            <option value="370000">山东省</option>
                            <option value="410000">河南省</option>
                            <option value="420000">湖北省</option>
                            <option value="430000">湖南省</option>
                            <option value="440000">广东省</option>
                            <option value="450000">广西壮族自治区</option>
                            <option value="460000">海南省</option>
                            <option value="500000">重庆</option>
                            <option value="510000">四川省</option>
                            <option value="520000">贵州省</option>
                            <option value="530000">云南省</option>
                            <option value="540000">西藏自治区</option>
                            <option value="610000">陕西省</option>
                            <option value="620000">甘肃省</option>
                            <option value="630000">青海省</option>
                            <option value="640000">宁夏回族自治区</option>
                            <option value="650000">新疆维吾尔自治区</option>
                        </select></p>
                        <p><select id="CityId">
                            <option value="-1">请选择市</option>
                        </select></p>
                        <p><select id="AreaId">
                            <option value="-1">请选择区县</option>
                        </select></p>
                    </div>
                </div>
                <p class="shoppingAddr-form-last">
                    <label>
                        <span>详细地址：</span>
                        <input type="text" placeholder = "请输入街道及编号、楼宇名及房间号">
                    </label>
                </p>
            </form>
        </div>
        <div class="shoppingAddr-moren">
            <p>设为默认地址</p>
            <div><span></span></div>
        </div>
        <p class="shoppingAddr-save">
            <input type="button" value="保存">
        </p>
    </div>
</template>

<script>
export default {
   name:'shoppingAddr',
   methods:{
        back(){
            history.back();
        }
   },
   created(){
       $(window).scrollTop(0);
   }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #shoshoppingAddr{
        background: #f8f8f8;
    }
    .shoppingAddr-top{
        width: 100%;
        height: 0.9rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        padding: 0.2rem;
        border-bottom: solid 1px #eee;
    }
    .shoppingAddr-back{
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
    .shoppingAddr-top p{
         margin-right: 2.75rem;
    }
    .shoppingAddr-form {
        background: #fff;
        padding: 0 0.4rem;
        border-bottom: 1px solid #eee;
    }
    .shoppingAddr-form>form>p{
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.3rem;
        border-bottom: solid 1px #dadada;
        color: #555;
    }
    .shoppingAddr-form>form span{
        width: 1.86rem;
        display: inline-block;
    }
    .shoppingAddr-form input{
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.28rem;
        width: 4.7rem;
    }
    .shoppingAddr-addr{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        color: #555;
        font-size: 0.3rem;
        border-bottom: 1px solid #eee;
    }
    .shoppingAddr-addr span{
        line-height: 0.81rem;
    }
    .shoppingAddr-addr select{
        background: url(../assets/img/select-bottom.png) no-repeat right center;
        background-size: .27rem .17rem;
        width: 4.7rem;
        height: 0.81rem;
        outline: medium;
        -webkit-appearance: none;
        border: none;
        border-bottom: 1px solid #eee;
        font-size: 0.28rem;
    }
    .shoppingAddr-moren{
        width: 100%;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        background: #fff;
        margin-top: 0.3rem;
        height: 1rem;
        padding: 0 0.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #888;
    }
    .shoppingAddr-moren>div{
        width: 0.9rem;
        height: 0.4rem;
        border-radius: 0.2rem 0.2rem;
        background: #ccc;
    }
    .shoppingAddr-moren>div>span{
        display: block;
        width: 0.4rem;
        height: 0.4rem;
        border: 0.02rem solid #ccc;
        border-radius: 50%;
        background: #fff;
    }
    .shoppingAddr-form .shoppingAddr-form-last{
        border: none;
    }
    .shoppingAddr-save{
        width: 7rem;
        height: .88rem;
        margin:0.3rem auto;
    }
    .shoppingAddr-save input{
        width: 100%;
        height: 100%;
        border: none;
        background-color: rgb(6, 166, 248);
        color: #fff;
        font-size: 0.36rem;
    }
</style>
