module.exports = (webpackConfig) => {
    const config = Object.create(webpackConfig);
    config.resolve = {
        extensions: ['.js', '.jsx', '.json', '.less', '.css','.png'],
        alias: {
            '@': `${__dirname}/src/`,
            'static': `${__dirname}/src/imgges/`,

        }
    };
    return config;
};