import {
    isArray,
    isBoolean,
    isInteger,
    isPath,
    isString,
    notEmpty,
    oneOf,
    required,
} from 'roc/validators';

export default {
    settings: {
        runtime: {
            debug: {
                server: {
                    description: 'Filter for debug messages that should be shown for the server, see ' +
                        'https://npmjs.com/package/debug.',
                    validator: isString,
                },
            },
            port: {
                description: 'Port for the server to use.',
                validator: required(notEmpty(isInteger)),
            },
            https: {
                port: {
                    description: 'Port for the server to use for HTTPS. If none is defined it will not ' +
                        'launch in HTTPS.',
                    validator: notEmpty(isInteger),
                },
                key: {
                    description: 'The key file to use when using HTTPS. If none is provided and if running ' +
                        'in dev a file will be provided automatically.',
                    validator: notEmpty(isPath),
                },
                cert: {
                    description: 'The certificate file to use when using HTTPS. If none is provided and ' +
                        'if running in dev a file will be provided automatically.',
                    validator: notEmpty(isPath),
                },
            },
            serve: {
                description: 'What folder the server should expose.',
                validator: oneOf(isPath, isArray(isPath)),
            },
            favicon: {
                description: 'Path to the favicon file, specially handled on the server.',
                validator: notEmpty(isString),
            },
            koa: {
                __meta: {
                    description: 'Settings for how Koa should handle paths.',
                },
                lowercase: {
                    enabled: {
                        description: 'If paths should be transformed to lowercase.',
                        validator: required(isBoolean),
                    },
                    defer: {
                        description: 'If this should be performed after looking for a file on disk.',
                        validator: required(isBoolean),
                    },
                },
                normalize: {
                    enabled: {
                        description: 'If paths should be normalized, that is remove extra slashes.',
                        validator: required(isBoolean),
                    },
                    defer: {
                        description: 'If this should be performed after looking for a file on disk.',
                        validator: required(isBoolean),
                    },
                },
                trailingSlashes: {
                    enabled: {
                        description: 'Set to true to enforce trailing slashes, false to remove them and ' +
                            'null for no rule.',
                        validator: isBoolean,
                    },
                    defer: {
                        description: 'If this should be performed after looking for a file on disk.',
                        validator: required(isBoolean),
                    },
                },
                staticServe: {
                    maxage: {
                        description: 'Browser cache max-age in milliseconds. Production only.',
                        validator: required(isInteger),
                    },
                },
            },
        },
    },
};
