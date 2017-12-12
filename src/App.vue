<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    created(){
        
        this.$http.get("./static/json/personalInfo.json",{
            params:{
            }
        }).then((res)=>{
            this.$store.dispatch('addPersonalInfo', res.data);
        });
        this.$http.get("../static/json/userList.json",{
            params:{
            }
        }).then((res)=>{
            this.$store.dispatch('addUserList', res.data);
        });
    },
    methods:{
        back(){
            history.go(-1);
        }
    }
  }
</script>

<style>
    /*样式重置   全局样式*/
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 50px;
    }
    body{
        font: 14px/150% "微软雅黑", Verdana, Arial, Helvetica, sans-serif;
    }
      a{
        color: #666;
        text-decoration: none;
    }
    a:hover{
        color: #666;
    }
    ul,ol{
        list-style: none;
    }
    img{
        border:none;
    }
    input,textarea{
        outline: none;
        border: none;
    }
    textarea{
        resize: none;
    }
    .clearfix:after {
        display: block;
        height: 0;
        overflow: hidden;
        content: " ";
        visibility: hidden;
        clear: both;
    }
</style>
