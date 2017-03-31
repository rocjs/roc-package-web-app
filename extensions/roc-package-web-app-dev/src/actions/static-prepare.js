import fs from 'fs-extra';
import rimraf from 'rimraf';

const filterStaticResources = (src) => !/(webpack-analysis|webpack-stats)\.json$/.test(src);

export default ({ context: { config: { settings } } }) => (targets) => {
    if (targets.indexOf('static') > -1) {
        const outputDir = settings.build.output.static;
        return () => () => Promise.resolve()
            // Delete non-HTML files from static output dir, since the entry
            // was used only to build static documents
            .then(() => new Promise((res, rej) =>
                rimraf(`${outputDir}/**/!(*.html)`, { glob: { nodir: true } }, (err) => {
                    if (err) {
                        return rej(err);
                    }
                    return res();
                })
            ))
            // Copy assets from web output build and statically served dirs
            .then(() => {
                if (!settings.runtime.serve) {
                    return Promise.resolve();
                }

                const serveDirs = [].concat(settings.runtime.serve);

                return Promise.all(serveDirs.map((serveDir) =>
                    new Promise((res, rej) =>
                        fs.copy(serveDir, outputDir, {
                            filter: filterStaticResources,
                            overwrite: false,
                        }, (err) => {
                            if (err) {
                                return rej(err);
                            }
                            return res();
                        })
                    )
                ));
            });
    }
    return undefined;
};
