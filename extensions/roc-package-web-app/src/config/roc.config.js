export default {
    settings: {
        runtime: {
            debug: {
                server: 'roc:*',
            },
            port: 3000,
            https: {
                port: undefined,
                key: undefined,
                cert: undefined,
            },
            serve: [
                'build/client',
            ],
            favicon: undefined,
            startBundle: 'build/server/app.js',
            koa: {
                lowercase: {
                    enabled: true,
                    defer: true,
                },
                normalize: {
                    enabled: true,
                    defer: false,
                },
                trailingSlashes: {
                    enabled: true,
                    defer: true,
                },
                staticServe: {
                    __raw: {},
                    maxage: 60000,
                },
            },
        },
    },
};
