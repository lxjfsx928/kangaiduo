import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
/*
	state 用于存储数据项
	mutations 单线程同步代码 用于操作state
	actions 用于响应状态变化 不能操作state 而跟mutations 区别在于可以存在异步代码
	getters 用于获取数据的接口
*/
export default new Vuex.Store({
	state:{
		personalInfo:{},
        isEnter:false,
        userList:{}
	},
	mutations:{
		add_isEnter(state,isEnter){
			state.isEnter = isEnter;
		},
		add_personalInfo(state,personalInfo){
			state.personalInfo = personalInfo;
		},
		add_userList(state,userList){
			state.userList = userList;
		}
	},
	actions:{
		addIsEnter({commit},isEnter){
			commit("add_isEnter",isEnter);
		},
		addPersonalInfo({commit},personalInfo){
			commit("add_personalInfo",personalInfo);
		},
		addUserList({commit},userList){
			commit("add_userList",userList);
		}
	},
	getters:{
		getIsEnter:function(state){
			return state.isEnter;
		},
		getPersonalInfo:function(state){
			return state.personalInfo;
		},
		getUserList:function(state){
			return state.userList;
		}
		// getIsEnter:(state)=> state.isEnter 
	}

});