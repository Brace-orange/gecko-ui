const path = require('path')

module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        devtool: '#eval-source-map '
    },
    lintOnSave: process.env.NODE_ENV !== 'production',
    chainWebpack: config => {
        config.resolve.alias
         .set('@', path.resolve('examples'))
         .set('~', path.resolve('packages'));
         config.module
            .rule('eslint')
            .exclude.add(path.resolve('lib'))
            .end()
            .exclude.add(path.resolve('examples/docs'))
            .end();
        // packages和examples目录需要加入编译
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    }
}