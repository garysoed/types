const webpackBuilder = require('dev/webpack/builder');
const glob = require('glob');

module.exports = webpackBuilder(__dirname)
    .forDevelopment('[default]', builder => builder
        .addEntry('test', glob.sync('./src/**/*.test.ts'))
        .setOutput('bundle.js', '/out')
        .addTypeScript(),
    )
    .build();
