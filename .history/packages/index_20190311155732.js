import gecButton from './Button/index'

const components = [
    gecButton,
]

const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}

// 判断是否直接引入组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    gecButton,
}