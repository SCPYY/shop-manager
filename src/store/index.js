import { createStore } from 'vuex'

export default createStore({
    state : {
        token : window.localStorage.getItem('token'),
        userInfo : window.localStorage.getItem('userInfo')
    },
    mutations : {
        setToken(state, token) {
            state.token = token
            window.localStorage.setItem('token', JSON.stringify(token))
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
    }
})