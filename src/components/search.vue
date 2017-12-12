<template>
    <div id="search">
        <!-- 头部 -->
        <header class = "search-top">
            <a class="search-back" @tap="back">返回</a>
            <p>搜索</p>
            <router-link class="search-home" to="/index"></router-link>
        </header>
        <!-- 搜索框 -->
        <div class="search-search">
            <div class="search-search-box">
                <label class="search-search-text" >
                    <input type="text" @keyup="search">
                    <a href="javascript:void(0)"><span @tap="clearSearch"></span></a>
                </label>
                <div class="search-btn">搜索</div>
            </div>  
        </div>
        <!-- 搜索列表 -->
        <ul class="search-list">
            <li v-for="item in searchList">
            <a href="#/shoppingContent" class="search-items" @tap="addHistorySearch">
            <span>约{{item.ResultCount}}件商品</span><p>{{item.KeyWord}} </p></a></li>
        </ul>
        <!-- 热门搜索 -->
        <div class="search-hot-search">
            <div class="search-every">
                <span>大家都在搜</span>
                <a href="javascript:void(0)" @tap="changeHotKey(allHotKey)">
                    <span class="search-changeImg"></span>
                    <span class="search-change" >换一批</span>
                </a>
            </div>
            <div class="search-hot-box">
                <a href="#/shoppingContent"  v-for = "item in hotKey" class="search-hot-item search-items" @tap="addHistorySearch">{{item}}</a>
            </div>
        </div>
        <div class="search-history-search">
            <ul>
                <li>最近搜索过</li>
                <li v-for="item in historySearch"><a href="#/shoppingContent">{{item}}</a></li>
            </ul>
            <a href="javascript:void(0)" class="search-clear-history" @tap="clearHistory">清除历史搜索</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            allHotKey:[],//全部热门搜索
            hotKey:[],//显示的热门搜索
            searchList:[],//搜索列表
            historySearch:[]//搜索历史
        }
    },
    created(){
        $(window).scrollTop(0);
        // 发送热门搜索请求
        this.$http.get("/apiSearch/GetHotKeyWords",{
            params:{
            }
        }).then((res)=>{
            // 将请求回来的数据放在在data中
            this.allHotKey=res.data;
            // 初始化热门搜索列表
            this.changeHotKey(this.allHotKey);    
        })
        // 初始化历史搜索
        this.history();
    },
    methods:{
        // 定义搜索函数
        search(e){
            // 发送索索列表请求
            this.$http.get("/apiSearch/SearchPanGuWordResult",{
                params:{
                    // 发送将输入框的value
                    KeyWord:e.currentTarget.value
                }
            }).then((res)=>{
                // 将请求回来的数据放在data中
                this.searchList=res.data;

                
            })  
        },
        // 历史搜索函数
        addHistorySearch:function(e){
            var search,tag;
            // 初始化search，localStorage.search转成数组赋值给局部变量search
            localStorage.search==""?search=[]:search=localStorage.search.split(",");
            // 定义tag为被点击的包含关键字文本的标签
            if(e.currentTarget.querySelectorAll("p").length>0){
                tag = e.currentTarget.querySelector("p");
            }
            else{
                tag = e.currentTarget;
            }
            // 判断seach是否包含该点击的文本
            if(search.indexOf(tag.innerText)==-1){
                search.push(tag.innerText);
            }
            // 将search放在data中
            this.historySearch = search;
            // 将search转成字符串赋值给localStorage.search
            localStorage.search = search.join(",");
        },
        // 换一批函数
        changeHotKey(allHotKey){
            // 克隆allHotKey数组
            var arr = allHotKey.slice();
            // 清空热门搜索列表
            this.hotKey=[];
            for(var n=0;n<8;n++){
                // 随机产生一个范围内的下标
                var index=this.randInt(arr.length-1,0);
                // arr删除随机下标对应的值，hotKey添加对应的值
                this.hotKey.push(arr[index]);
                arr.splice(index,1);
            }
        },
        // 随机数函数
        randInt(a,b){
            if(a<b){
                var temp=a;
                a=b;
                b=temp;
            }
            return parseInt(Math.random()*(a-b+1)+b);
        },
        // 清除搜索内容
        clearSearch(e){
            document.querySelector(".search-search-text input").value="";
            this.searchList = [];
        },
        // 清除搜索记录
        clearHistory(){
            localStorage.search="";
            this.historySearch=[];
        },
        // 初始化历史记录函数
        history(){
            // 本地存储
            // 首次进入页面或用户清空缓存后首次访问页面
            if(localStorage.search){
            }
            else{
                localStorage.search="";

            }
            var search;
            localStorage.search==""?search=[]:search=localStorage.search.split(",");
            this.historySearch = search;
        },
        // 返回
        back(){
           window.history.go(-1);
        }
    }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-top{
        width: 100%;
        height: 0.9rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        border-bottom: 1px solid #e3e3e3;
        padding: 0.2rem;
    }
    .search-back{
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
    .search-home{
        background: url(../assets/img/header_home.jpg) no-repeat;
        background-size: 100%;
        width: 0.36rem;
        height: 0.34rem;
        display: block;
    }
    .search-search{
        width: 100%;
        padding: 0.12rem 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background:#fff;
        margin-bottom: 0.3rem;
    }
    .search-search-box{
        width: 100%;
        height: 0.63rem;
    }
    .search-search-text{
        float: left;
        width: 78.87%;
        position: relative;
    }
    .search-search-text input{
        border-radius: 5px 0 0 5px;
        border: 1px solid #e3e3e3;
        color: #808080;
        border-right: none;
        text-indent: 0.2rem;
        width: 100%;
        height: 0.63rem;
        margin: 0;
        padding: 0;
        display: inline-block;
        line-height: normal;
        overflow: hidden;
        vertical-align: top;
        font-size: 0.24rem;
    }
    .search-search-text span{
        position: absolute;
        display: block;
        width: 0.28rem;
        height: 0.28rem;
        top: 0.17rem;
        right: 0.2rem;
        background: url(../assets/img/clear.jpg) no-repeat;
        background-size: 100%;

    }
    .search-btn{
        float: right;
        background: #ff3333;
        border-radius: 0 5px 5px 0;
        width: 21.13%;
        text-align: center;
        height: 0.63rem;
        color: #fff;
        font-weight: bold;
        line-height: 0.63rem;
        font-size: 0.26rem;
    }
    .search-hot-search{
        width: 100%;
        height: 2.22rem;
        margin:0.01rem 0 0.3rem 0;
        background: #fff;
    }
    .search-every{
        width: 100%;
        height: 0.7rem;
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.28rem;
        background: #fff;
    }
    .search-every a{
        float: right;
        display: flex;
        align-items: center;
        color: #222222;
    }
    .search-changeImg{
        display: inline-block;
        float: left;
        width: 0.32rem;
        height: 0.28rem;
        background: url(../assets/img/F5.jpg) no-repeat center;
        background-size: 100%;
        margin-right: 0.1rem;
        line-height: 0.28rem;
    }
    .search-hot-box {
        width: 100%;
        padding: 0 0.2rem;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        height: 1.6rem;

    }
    .search-hot-item{
        border: 1px solid #e3e3e3;
        border-radius: 0.25rem;
        height: 0.54rem;
        line-height: 0.54rem;
        padding: 0 0.2rem;
        text-align: center;
        margin: 0 0.2rem 0.18rem 0;
        display: block;
        font-size: 0.24rem;
    }
    .search-history-search{
        background: #fff;
        padding:  0 0.2rem 0.3rem 0.2rem ;
    }
    .search-history-search li{
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: 1px solid #e3e3e3;
        margin-bottom: .3rem;  
        font-size: 0.24rem;
    }
    .search-history-search li:first-of-type{
        font-size: 0.28rem;
    }
    .search-clear-history{
        color: #808080;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        display: block;
        margin:0 auto;
        background: #fff;
        font-size: 0.32rem;
    }
    .search-list{
        background: #eee;
        width: 100%;
        padding: 0 0.2rem;
        position: absolute;
        top:1.77rem;
        font-size: 0.24rem;
    }
    .search-list li{
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: 1px solid #e3e3e3;
        margin-bottom: .3rem;
    }
    .search-list li span{
        float: right;
        color: #9b9b9b;
    }
</style>
