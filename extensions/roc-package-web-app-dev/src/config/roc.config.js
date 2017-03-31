import { roc } from 'roc-package-webpack-node-dev';

export default {
    settings: {
        dev: {
            watch: roc.config.settings.dev.watch.concat('config/'),
        },
        build: {
            targets: ['web', 'node'],
            input: {
                web: 'src/client/index.js',
                node: 'src/server/index.js',
                static: 'src/static/index.js',
            },
            output: {
                web: 'build/client',
                node: 'build/server',
                static: 'build/static',
            },
            static: {
                routes: ['/'],
            },
            koaMiddlewares: 'src/server/middlewares.js',
            useDefaultKoaMiddlewares: true,
        },
    },
};
