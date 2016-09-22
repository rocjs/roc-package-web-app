const join = require('path').join;

module.exports = {
    getKey() {
        return join(__dirname, 'development-certificate.key');
    },

    getCert() {
        return join(__dirname, 'development-certificate.crt');
    },
};
