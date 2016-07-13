import { generateDependencies, lazyFunctionRequire } from 'roc';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

import { packageJSON } from './util';

const lazyRequire = lazyFunctionRequire(require);

export default {
    config,
    meta,
    actions: [{
        extension: 'roc-plugin-start',
        hook: 'register-runtime',
        action: lazyRequire('../helpers/runtime'),
    }],
    packages: [
        require.resolve('roc-package-webpack-node'),
        require.resolve('roc-package-webpack-web'),
    ],
    dependencies: {
        exports: generateDependencies(packageJSON, [
            'config',
        ]),
        uses: generateDependencies(packageJSON, [
            'koa',
            'koa-static',
            'koa-mount',
            'koa-errors',
            'koa-helmet',
            'koa-etag',
            'koa-compressor',
            'koa-favicon',
            'koa-accesslog',
            'koa-logger',
            'koa-add-trailing-slashes',
            'koa-normalize-path',
            'koa-lowercase-path',
            'koa-remove-trailing-slashes',
        ]),
    },
};
