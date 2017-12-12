// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

//  将axios 配置给原型的$http属性
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data:{
		personalInfo:{},
		isEnter:false,
		userList:{}
	},
	created(){
		this.$http.get("./static/json/personalInfo.json",{
			params:{
			}
		}).then((res)=>{
			this.personalInfo = res.data;
		});
		this.$http.get("../static/json/userList.json",{
			params:{
			}
		}).then((res)=>{
			this.userList = res.data;
		});
	},
	methods:{
		back(){
			history.go(-1);
		}
	}
});
window.wbus = new Vue();
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
});

