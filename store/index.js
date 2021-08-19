import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
        settings: true,
        theme: localStorage.getItem("theme") || 'theme-dark-blue',
        primaryColor: localStorage.getItem("primary-color") || 'primary-pink',
        loading: false,
    },
    mutations: {
        loading(state,to){
            state.loading = to
        },
        setTheme(state, to) {
            state.theme = to
            localStorage.setItem("theme", to)
        },
        setPrimaryColor(state,to){
            state.primaryColor = to
            localStorage.setItem("primary-color", to)
        },
        toggleSetting(state,to){
            if(state.settings){
                state.settings = false
            }else{
                state.settings = true
            }
        },
    },
  })
}

export default createStore