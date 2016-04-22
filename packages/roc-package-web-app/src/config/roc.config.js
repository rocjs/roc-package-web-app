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
                },
                staticServe: {
                    maxage: 60000
                }
            }
        }
    }
};
