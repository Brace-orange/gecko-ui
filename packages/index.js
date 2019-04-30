import gecButton from './Button/index'
import gecLoading from './Loading/index'
import gecLoader from './Uploader/index'
import gecPop from './Pop/index'

const components = [
    gecButton,
    gecLoading,
    gecLoader,
    gecPop
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
    gecLoading,
    gecLoader,
    gecPop
}