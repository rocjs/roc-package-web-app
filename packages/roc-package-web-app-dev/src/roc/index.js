import { name, invokeHook } from './util';
import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';
import builder from '../builder';

export default {
    name,
    config,
    meta,
    actions: {
        webpack: {
            description: 'Adds needed configuration to being able to build web applications.',
            extension: 'roc-package-webpack-dev',
            hook: 'build-webpack',
            action: builder
        },
        devStarted: {
            hook: 'dev-process-created',
            action: () => ({ settings }) => (instance) => () => {
                instance.once('message', (message) => {
                    if (message.match(/^online$/)) {
                        // Start Browsersync when server has started!
                        invokeHook('server-started', settings.runtime.port, settings.build.path);
                    }
                });
            }
        }
    },
    hooks: {
        'server-started': {}
    },
    packages: [
        require.resolve('roc-package-webpack-node-dev'),
        require.resolve('roc-package-webpack-web-dev'),
        require.resolve('roc-package-web-app')
    ],
    plugins: [
        require.resolve('roc-plugin-style-css'),
        require.resolve('roc-plugin-browsersync'),
        require.resolve('roc-plugin-assets-images')
    ]
};
