import {
    isArray,
    isBoolean,
    isPath,
    isString,
    notEmpty,
    required,
} from 'roc/validators';

export default {
    settings: {
        build: {
            path: {
                override: 'roc-package-webpack-dev',
                validator: required(notEmpty((value, info) => {
                    if (value && value.charAt(0) !== '/') {
                        return 'Must start with "/"!';
                    }

                    return isPath(value, info);
                })),
            },
            targets: {
                override: 'roc-abstract-package-base-dev',
                validator: isArray(/^web|node|static$/i),
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
                static: {
                    description: 'The static document renderer entry point file.',
                    validator: notEmpty(isPath),
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
                static: {
                    description: 'The output directory for the static build.',
                    validator: notEmpty(isPath),
                },
            },
            static: {
                routes: {
                    description: 'List of routes that will be rendered for static distribution. ' +
                        'Exported function from `static` entry will be called for each route.',
                    validator: required(isArray(isString)),
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
