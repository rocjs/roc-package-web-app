import {
    isBoolean,
    isPath,
    isArray
} from 'roc/validators';

export default {
    settings: {
        descriptions: {
            build: {
                input: {
                    web: 'The client entry point file.',
                    node: 'The server entry point file.'
                },
                output: {
                    web: 'The output directory for the client build.',
                    node: 'The output directory for the server build.'
                },
                koaMiddlewares: 'The koa middlewares to add to the server instance, will be added after the default ' +
                    ' middlewares.',
                useDefaultKoaMiddlewares: 'If Roc should use internally defined koa middlewares, please look at the ' +
                    ' documentation for what middlewares that are included.'
            }
        },

        validations: {
            build: {
                targets: isArray(/^web|node$/i),
                input: {
                    web: isPath,
                    node: isPath
                },
                output: {
                    web: isPath,
                    node: isPath
                },
                koaMiddlewares: isPath,
                useDefaultKoaMiddlewares: isBoolean
            }
        }
    }
};
