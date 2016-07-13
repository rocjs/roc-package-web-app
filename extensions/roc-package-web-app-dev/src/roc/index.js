import { isInteger, isString, notEmpty, required } from 'roc/validators';
import { lazyFunctionRequire } from 'roc';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

import { invokeHook } from './util';

const lazyRequire = lazyFunctionRequire(require);

export default {
    config,
    meta,
    actions: [{
        description: 'Adds needed configuration to being able to build web applications.',
        hook: 'build-webpack',
        action: lazyRequire('../webpack'),
    }, {
        hook: 'dev-process-created',
        action: ({ config: { settings } }) => (instance) => () => {
            instance.once('message', (message) => {
                if (message.match(/^online$/)) {
                    // Start Browsersync when server has started!
                    invokeHook('server-started', settings.runtime.port, settings.build.path);
                }
            });
        },
    }],
    hooks: {
        'server-started': {
            description: 'Invoked when the server has started.',
            arguments: [{
                name: 'port',
                description: 'The port of the server.',
                validator: required(notEmpty(isInteger)),
            }, {
                name: 'path',
                description: 'The path that the server has started on.',
                validator: required(notEmpty(isString)),
            }],
        },
    },
    packages: [
        require.resolve('roc-package-webpack-node-dev'),
        require.resolve('roc-package-webpack-web-dev'),
        require.resolve('roc-package-web-app'),
    ],
    plugins: [
        require.resolve('roc-plugin-style-css'),
        require.resolve('roc-plugin-browsersync'),
        require.resolve('roc-plugin-assets-images'),
    ],
};
