import {
    isArray,
    isBoolean,
    isPath,
    notEmpty,
    required,
} from 'roc/validators';

export default {
    settings: {
        build: {
            targets: {
                override: 'roc-abstract-package-base-dev',
                validator: isArray(/^web|node$/i),
            },
            input: {
                __meta: {
                    override: 'roc-abstract-package-base-dev',
                },
                web: {
                    description: 'The web/client entry point file.',
                    validator: required(notEmpty(isPath)),
                },
                node: {
                    description: 'The node/server entry point file.',
                    validator: required(notEmpty(isPath)),
                },
            },
            output: {
                __meta: {
                    override: 'roc-abstract-package-base-dev',
                },
                web: {
                    description: 'The output directory for the client build.',
                    validator: required(notEmpty(isPath)),
                },
                node: {
                    description: 'The output directory for the server build.',
                    validator: required(notEmpty(isPath)),
                },
            },
            koaMiddlewares: {
                description: 'The koa middlewares to add to the server instance, will be added after the default ' +
                    ' middlewares.',
                validator: notEmpty(isPath),
            },
            useDefaultKoaMiddlewares: {
                description: 'If Roc should use internally defined koa middlewares, please look at the ' +
                    ' documentation for what middlewares that are included.',
                validator: required(isBoolean),
            },
        },
    },
};
