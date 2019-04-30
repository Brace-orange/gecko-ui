import gecPop from './src/Pop'

gecPop.install = function(Vue) {
    Vue.component(
        gecPop.name, gecPop
    )
}

export default gecPop