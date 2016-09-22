import { getSettings, getAbsolutePath, fileExists } from 'roc';
import { removeTrailingSlash } from 'roc-package-webpack-dev';
import webpack from 'webpack';

export default ({ previousValue: webpackConfig }) => (target) => {
    if (target === 'web' || target === 'node') {
        return () => {
            const buildSettings = getSettings('build');
            const WEB = (target === 'web');

            /*
            * Plugins
            */
            if (WEB) {
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

            return webpackConfig;
        };
    }

    return undefined;
};
