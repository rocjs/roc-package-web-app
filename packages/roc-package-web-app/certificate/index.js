const join = require('path').join;

module.exports = {
    getKey: function() {
        return join(__dirname, 'development-certificate.key');
    },

    getCert: function() {
        return join(__dirname, 'development-certificate.crt');
    }
};
