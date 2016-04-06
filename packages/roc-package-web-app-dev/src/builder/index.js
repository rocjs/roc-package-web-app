import { getSettings, getAbsolutePath, fileExists } from 'roc';
import { resolvePath } from 'roc-package-web-app';
import { removeTrailingSlash } from 'roc-package-webpack-dev';

export default () => ({ previousValue: rocBuilder }) => (target) => {
    if (target === 'web' || target === 'node') {
        return () => {
            let {
                buildConfig,
                builder,
                info
            } = rocBuilder;

            const buildSettings = getSettings('build');
            const WEB = (target === 'web');

            /*
            * Resolve
            */
            buildConfig.resolve.fallback.push(
                resolvePath
            );

            /*
            * Plugins
            */
            if (WEB) {
                buildConfig.plugins.push(
                    new builder.IgnorePlugin(/^config$/)
                );
            }

            buildConfig.plugins.push(
                new builder.DefinePlugin({
                    // We need to do this since it effects the build
                    ROC_PATH: JSON.stringify(removeTrailingSlash(buildSettings.path))
                })
            );

            const hasMiddlewares = !!(buildSettings.koaMiddlewares && fileExists(buildSettings.koaMiddlewares));

            if (hasMiddlewares) {
                const middlewares = getAbsolutePath(buildSettings.koaMiddlewares);

                buildConfig.plugins.push(
                    new builder.DefinePlugin({
                        KOA_MIDDLEWARES: JSON.stringify(middlewares)
                    })
                );
            }

            buildConfig.plugins.push(
                new builder.DefinePlugin({
                    USE_DEFAULT_KOA_MIDDLEWARES: buildSettings.useDefaultKoaMiddlewares,
                    HAS_KOA_MIDDLEWARES: hasMiddlewares
                })
            );

            return {
                buildConfig,
                builder,
                info
            };
        };
    }
};
