import { getSettings, getAbsolutePath, fileExists } from 'roc';
import { removeTrailingSlash } from 'roc-package-webpack-dev';
import webpack from 'webpack';
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';

export default ({ previousValue: webpackConfig }) => (target) => {
    // TODO: replace targets with values from 'get-webpack-node-targets'
    const nodeTargets = ['node', 'static'];
    const NODE_TARGET = nodeTargets.indexOf(target) !== -1;
    const WEB_TARGET = target === 'web';
    if (WEB_TARGET || NODE_TARGET) {
        return () => {
            const buildSettings = getSettings('build');
            const STATIC = target === 'static';

            /*
            * Plugins
            */
            if (WEB_TARGET) {
                // We need make sure this is before the RocExportPlugin, hence unshift
                webpackConfig.plugins.unshift(
                    new webpack.IgnorePlugin(/^config$/)
                );
            }

            webpackConfig.plugins.push(
                new webpack.DefinePlugin({
                    // We need to do this since it effects the build
                    ROC_PATH: JSON.stringify(removeTrailingSlash(buildSettings.path)),
                })
            );

            const hasMiddlewares = !!(buildSettings.koaMiddlewares && fileExists(buildSettings.koaMiddlewares));

            if (hasMiddlewares) {
                const middlewares = getAbsolutePath(buildSettings.koaMiddlewares);

                webpackConfig.plugins.push(
                    new webpack.DefinePlugin({
                        KOA_MIDDLEWARES: JSON.stringify(middlewares),
                    })
                );
            }

            webpackConfig.plugins.push(
                new webpack.DefinePlugin({
                    USE_DEFAULT_KOA_MIDDLEWARES: buildSettings.useDefaultKoaMiddlewares,
                    HAS_KOA_MIDDLEWARES: hasMiddlewares,
                })
            );

            if (STATIC) {
                process.env.SUPPRESS_NO_CONFIG_WARNING = true;

                webpackConfig.plugins.push(
                    new StaticSiteGeneratorPlugin({
                        paths: buildSettings.static.routes,
                        entry: buildSettings.name,
                    })
                );
            }


            return webpackConfig;
        };
    }

    return undefined;
};
