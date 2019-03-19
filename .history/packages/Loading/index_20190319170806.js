import gecLoading from './src/Loading'

gecLoading.install = function(Vue) {
    Vue.component(
        gecLoading.name, gecLoading
    )
}

export default 