import {
    isString,
    isBoolean,
    isPath,
    isInteger,
    isArrayOrSingle
} from 'roc/validators';

export default {
    settings: {
        groups: {
            runtime: {
                koa: 'Settings for how Koa should handle paths.'
            }
        },
        descriptions: {
            runtime: {
                debug: {
                    server: 'Filter for debug messages that should be shown for the server, see ' +
                        'https://npmjs.com/package/debug.'
                },
                port: 'Port for the server to use.',
                https: {
                    port: 'Port for the server to use for HTTPS. If none is defined it will not launch in HTTPS.',
                    key: 'The key file to use when using HTTPS. If none is provided and if running in dev a file ' +
                        'will be provided automatically.',
                    cert: 'The certificate file to use when using HTTPS. If none is provided and if running in dev a ' +
                        'file will be provided automatically.'
                },
                serve: 'What folder the server should expose.',
                favicon: 'Path to the favicon file, specially handled on the server.',
                startBundle: 'Relative path to a bundle to start when calling "start".',
                path: 'The basepath for the application.',
                koa: {
                    lowercase: {
                        enabled: 'If paths should be transformed to lowercase.',
                        defer: 'If this should be performed after looking for a file on disk.'
                    },
                    normalize: {
                        enabled: 'If paths should be normalized, that is remove extra slashes.',
                        defer: 'If this should be performed after looking for a file on disk.'
                    },
                    trailingSlashes: {
                        enabled: 'Set to true to enforce trailing slashes, false to remove them and null for no rule.',
                        defer: 'If this should be performed after looking for a file on disk.'
                    }
                }
            }
        },

        validations: {
            runtime: {
                debug: {
                    server: isString
                },
                port: isInteger,
                serve: isArrayOrSingle(isPath),
                favicon: isString,
                startBundle: isPath,
                path: isPath,
                koa: {
                    lowercase: {
                        enabled: isBoolean,
                        defer: isBoolean
                    },
                    normalize: {
                        enabled: isBoolean,
                        defer: isBoolean
                    },
                    trailingSlashes: {
                        enabled: isBoolean,
                        defer: isBoolean
                    }
                }
            }
        }
    }
};
