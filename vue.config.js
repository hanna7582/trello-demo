const CopyPlugin = require('copy-webpack-plugin')
const assetsDir = 'assets'
module.exports = {
    publicPath: '/',
    assetsDir: assetsDir,
    // 빌드 css파일 경로
    chainWebpack: config => {
        if (config.plugins.has('extract-css')) {
            const extractCSSPlugin = config.plugin('extract-css')
            extractCSSPlugin &&
                extractCSSPlugin.tap(() => [
                    {
                        filename: assetsDir + '/css/[name].css',
                        chunkFilename: assetsDir + '/css/[name].css',
                    },
                ])
        }
    },
    configureWebpack: () => {
        return {
            // 빌드 js파일 경로
            output: {
                filename: '[name].js',
                chunkFilename: 'chunk/[name].js',
            },
            // 정적 파일 복사(절대경로)
            plugins: [new CopyPlugin([{ from: 'src/assets/img', to: 'assets/img' }])],
        }
    },
    // 배포용 빌드에 대한 소스 맵 생성여부
    productionSourceMap: false,
}
