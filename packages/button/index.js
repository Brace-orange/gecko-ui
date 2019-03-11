import gecButton from './src/Button.vue'

gecButton.install = function (Vue) {
    Vue.component(
        gecButton.name, gecButton
    )
}

export default gecButton
