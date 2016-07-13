import koaErrors from 'koa-errors';
import helmet from 'koa-helmet';
import koaEtag from 'koa-etag';
import koaCompressor from 'koa-compressor';
import koaFavicon from 'koa-favicon';
import koaAccesslog from 'koa-accesslog';
import koaLogger from 'koa-logger';

/**
 * Returns the middlewares to be used.
 *
 * @param {object} settings - Runtime settings
 * @returns {array} A array with middlewares to use.
 */
export default function middlewares(config, { dev, dist }) {
    const middlewaresList = [];

    if (dev) {
        middlewaresList.push(koaErrors());
    }

    // Security headers
    middlewaresList.push(helmet());

    middlewaresList.push(koaEtag());

    // We only enable gzip in dist
    if (dist) {
        middlewaresList.push(koaCompressor());
    }

    const favicon = config.favicon;
    if (favicon) {
        middlewaresList.push(koaFavicon(favicon));
    }

    if (dist) {
        middlewaresList.push(koaAccesslog());
    } else {
        middlewaresList.push(koaLogger());
    }

    return middlewaresList;
}
