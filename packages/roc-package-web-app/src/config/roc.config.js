export default {
    settings: {
        runtime: {
            debug: {
                server: 'roc:*'
            },
            port: 3000,
            https: {
                port: '',
                key: '',
                cert: ''
            },
            serve: [
                'build/client'
            ],
            favicon: '',
            startBundle: 'build/server/app.js',
            path: '/',
            koa: {
                lowercase: {
                    enabled: true,
                    defer: true
                },
                normalize: {
                    enabled: true,
                    defer: false
                },
                trailingSlashes: {
                    enabled: true,
                    defer: true
                }
            }
        }
    }
};
