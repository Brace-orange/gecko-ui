import gecLoader from './src/Uploader'

gecLoader.install = function(Vue) {
    Vue.component(
        gecLoader.name, gecLoader
    )
}

export default gecLoader