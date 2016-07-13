export default ({ config: { settings } }) => () => () => {
    // Disable warnings from missing node-config in an application
    process.env.SUPPRESS_NO_CONFIG_WARNING = true;

    // Enable debug based on roc.config.js settings
    require('debug').enable(settings.runtime.debug.server);
};
