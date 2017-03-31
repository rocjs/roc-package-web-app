module.exports = {
    settings: {
        runtime: {
            port: 8080,
            serve: ['files', 'build/client'],
            favicon: 'files/roc.png'
        },
        build: {
            input: {
                web: 'client.js',
                node: 'server.js',
                static: 'static.js',
            }
        }
    }
};
