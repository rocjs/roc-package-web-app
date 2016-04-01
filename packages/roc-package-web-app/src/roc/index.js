import { name } from './util';
import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';
import runtime from '../helpers/runtime';
import resolvePath from '../helpers/resolve-path';

export default {
    name,
    config,
    meta,
    actions: {
        resolver: {
            extension: 'roc-plugin-start',
            hook: 'get-resolve-paths',
            action: () => () => () => () => resolvePath
        },
        runtime: {
            extension: 'roc-plugin-start',
            hook: 'register-runtime',
            action: runtime
        }
    },
    packages: [
        require.resolve('roc-package-webpack-node'),
        require.resolve('roc-package-webpack-web')
    ]
};
