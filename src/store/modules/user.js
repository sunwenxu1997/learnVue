
export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录
export const USER_INFO_COMMIT = 'USER_INFO_COMMIT' //配合sessionStorage解决vux刷新丢失问题
export default {
    // 存储状态（变量）
    state: {
        userInfo: {},//储存用户相关信息
        userLogin: false,//用户登录状态
    },
    // 对数据获取之前的再次编译，可以理解为state的计算属性 this.$store.getters.方法名。
    getters: {
      
    },
    // 修改状态，并且是同步的。在组件中使用$store.commit('',params)
    mutations: {
        //用户登陆方法
        [USER_SIGNIN](state, user) {
            //储存用户相关信息
            sessionStorage.setItem('userInfo', JSON.stringify(user))
            sessionStorage.setItem('userLogin', 'true')
            if (JSON.stringify(user)) {
                //解决用户信息未及时更新问题
                Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : user)
                //更新用户登录状态
                state.userLogin = sessionStorage.getItem('userLogin') ? JSON.parse(sessionStorage.getItem('userLogin')) : false
            }
        },
        //用户退出登录方法
        [USER_SIGNOUT](state) {
            state.userLogin = false;
            state.userInfo = {};
            //清除sessionStorage内的所有记录
            sessionStorage.clear();
        },
        //解决浏览器刷新页面数据丢失问题(根据之前储存的sessionStorage相关信息来判断)
        [USER_INFO_COMMIT](state) {
            Object.assign(state.userInfo, sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {})
            state.userLogin = sessionStorage.getItem('userLogin') ? JSON.parse(sessionStorage.getItem('userLogin')) : false;
        },
    },
    // 异步操作
    actions: {
        [USER_SIGNIN]({ commit }, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({ commit }) {
            commit(USER_SIGNOUT)
        },
        [USER_INFO_COMMIT]({ commit }) {
            commit(USER_INFO_COMMIT)
        }
    }
}
