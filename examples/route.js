const componentNames = [
    'HelloWorld'
]

const routes = componentNames.map((item) => {
    const name = item
    const path = `/${item}`
    return {
        name,
        path,
        component: async () => await import(`./components/${item}`)
    }
})

export default [
    ...routes
]