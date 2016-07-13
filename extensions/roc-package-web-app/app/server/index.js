/* global USE_DEFAULT_KOA_MIDDLEWARES, HAS_KOA_MIDDLEWARES KOA_MIDDLEWARES,
    KOA_MIDDLEWARES, __DEV__, __DIST__ ROC_PATH  */
import createServerWebApp from 'roc-package-web-app/lib/app/createServer';

export default function createServer(options, beforeUserMiddlewares) {
    const koaMiddlewares = HAS_KOA_MIDDLEWARES ? require(KOA_MIDDLEWARES) : undefined; // eslint-disable-line

    return createServerWebApp(options, beforeUserMiddlewares, {
        useDefaultKoaMiddlewares: USE_DEFAULT_KOA_MIDDLEWARES,
        hasKoaMiddlewares: HAS_KOA_MIDDLEWARES,
        koaMiddlewares,
        dev: __DEV__,
        dist: __DIST__,
        rocPath: ROC_PATH,
    });
}
