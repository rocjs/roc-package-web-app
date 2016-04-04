# Settings for `roc-package-web-app-dev`

## Build

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| bundleHash               | If the bundle should be hashed in dist mode.                                                                                    | build.bundleHash                    | --build-bundleHash                    | `true`                            | `Boolean`               | No       |
| disableProgressbar       | Should the progress bar be disabled for builds.                                                                                 | build.disableProgressbar            | --build-disableProgressbar            | `false`                           | `Boolean`               | No       |
| koaMiddlewares           | The koa middlewares to add to the server instance, will be added after the default  middlewares.                                | build.koaMiddlewares                | --build-koaMiddlewares                | `"koa-middlewares.js"`            | `Filepath`              | No       |
| mode                     | What mode the application should be built for. Possible values are &quot;dev&quot; and &quot;dist&quot;.                        | build.mode                          | --build-mode                          | `"dist"`                          | `/^dev|dist$/i`         | No       |
| name                     | The name of the generated application bundle.                                                                                   | build.name                          | --build-name                          | `"app"`                           | `String / [String]`     | No       |
| path                     | The basepath for the application.                                                                                               | build.path                          | --build-path                          | `"/"`                             | `Filepath`              | No       |
| resources                | An array of files to include into the build process.                                                                            | build.resources                     | --build-resources                     | `null`                            | `[Filepath]`            | No       |
| targets                  | For what targets the code should be built for.                                                                                  | build.targets                       | --build-targets                       | `["web","node"]`                  | `[/^web|node$/i]`       | No       |
| useDefaultKoaMiddlewares | If Roc should use internally defined koa middlewares, please look at the  documentation for what middlewares that are included. | build.useDefaultKoaMiddlewares      | --build-useDefaultKoaMiddlewares      | `true`                            | `Boolean`               | No       |

### Assets

#### Images
Settings for image asset related things.

##### LoadUrl

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| maxSize                  | The maximum size (in bytes) for base64 encoding an image.                                                                       | build.assets.images.loadUrl.maxSize | --build-assets-images-loadUrl-maxSize | `10000`                           | `Integer`               | No       |

### Input

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| node                     | The server entry point file.                                                                                                    | build.input.node                    | --build-input-node                    | `"src/server/index.js"`           | `Filepath`              | No       |
| web                      | The client entry point file.                                                                                                    | build.input.web                     | --build-input-web                     | `"src/client/index.js"`           | `Filepath`              | No       |

### Output

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| node                     | The output directory for the server build.                                                                                      | build.output.node                   | --build-output-node                   | `"build/server"`                  | `Filepath`              | No       |
| web                      | The output directory for the client build.                                                                                      | build.output.web                    | --build-output-web                    | `"build/client"`                  | `Filepath`              | No       |

### Style
Settings for style related things.

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| autoprefixer             | Settings for Autoprefixer.                                                                                                      | build.style.autoprefixer            | --build-style-autoprefixer            | `[{"browsers":"last 2 version"}]` | `[{}]`                  | No       |
| modules                  | If CSS Modules should be enabled.                                                                                               | build.style.modules                 | --build-style-modules                 | `true`                            | `Boolean`               | No       |
| name                     | The naming pattern to use for the built style files.                                                                            | build.style.name                    | --build-style-name                    | `"[name].[hash].css"`             | `Unknown`               | No       |

## Dev

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| debug                    | Filter for debug messages that should be shown during development, see https://npmjs.com/package/debug.                         | dev.debug                           | --dev-debug                           | `"roc:*"`                         | `String`                | No       |
| port                     | Port for the dev server.                                                                                                        | dev.port                            | --dev-port                            | `3001`                            | `Integer`               | No       |
| watch                    | Files/folders that should trigger a restart of the server.                                                                      | dev.watch                           | --dev-watch                           | `["roc.config.js","config/"]`     | `Filepath / [Filepath]` | No       |

### Browsersync
Settings for Browsersync.

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| enabled                  | If Browsersync should be enabled.                                                                                               | dev.browsersync.enabled             | --dev-browsersync-enabled             | `true`                            | `Boolean`               | No       |
| open                     | If Browsersync should open when the server is ready.                                                                            | dev.browsersync.open                | --dev-browsersync-open                | `true`                            | `Boolean`               | No       |
| port                     | The port that Browsersync should start on, should be a range of at least 2                                                      | dev.browsersync.port                | --dev-browsersync-port                | `3030`                            | `Integer`               | No       |

### DevMiddleware

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| noInfo                   | If no info should be sent to the console.                                                                                       | dev.devMiddleware.noInfo            | --dev-devMiddleware-noInfo            | `true`                            | `Boolean`               | No       |
| quiet                    | If nothing should be sent to the console.                                                                                       | dev.devMiddleware.quiet             | --dev-devMiddleware-quiet             | `false`                           | `Boolean`               | No       |

### HotMiddleware

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| noInfo                   | If no info should be sent to the console.                                                                                       | dev.hotMiddleware.noInfo            | --dev-hotMiddleware-noInfo            | `false`                           | `Boolean`               | No       |
| overlay                  | If a overlay should be shown when an error has occurred.                                                                        | dev.hotMiddleware.overlay           | --dev-hotMiddleware-overlay           | `false`                           | `Boolean`               | No       |
| quiet                    | If nothing should be sent to the console.                                                                                       | dev.hotMiddleware.quiet             | --dev-hotMiddleware-quiet             | `false`                           | `Boolean`               | No       |
| reload                   | If the browser should be reloaded if it fails to hot update the code.                                                           | dev.hotMiddleware.reload            | --dev-hotMiddleware-reload            | `true`                            | `Boolean`               | No       |

## Runtime

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| favicon                  | Path to the favicon file, specially handled on the server.                                                                      | runtime.favicon                     | --favicon                             | `null`                            | `String`                | No       |
| port                     | Port for the server to use.                                                                                                     | runtime.port                        | --port                                | `3000`                            | `Integer`               | No       |
| serve                    | What folder the server should expose.                                                                                           | runtime.serve                       | --serve                               | `["build/client"]`                | `Filepath / [Filepath]` | No       |
| startBundle              | Relative path to a bundle to start when calling &quot;start&quot;.                                                              | runtime.startBundle                 | --startBundle                         | `"build/server/app.js"`           | `Filepath`              | No       |

### Debug

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| server                   | Filter for debug messages that should be shown for the server, see https://npmjs.com/package/debug.                             | runtime.debug.server                | --debug-server                        | `"roc:*"`                         | `String`                | No       |

### Https

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| cert                     | The certificate file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically.  | runtime.https.cert                  | --https-cert                          | `null`                            | `Unknown`               | No       |
| key                      | The key file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically.          | runtime.https.key                   | --https-key                           | `null`                            | `Unknown`               | No       |
| port                     | Port for the server to use for HTTPS. If none is defined it will not launch in HTTPS.                                           | runtime.https.port                  | --https-port                          | `null`                            | `Unknown`               | No       |

### Koa
Settings for how Koa should handle paths.

#### Lowercase

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| defer                    | If this should be performed after looking for a file on disk.                                                                   | runtime.koa.lowercase.defer         | --koa-lowercase-defer                 | `true`                            | `Boolean`               | No       |
| enabled                  | If paths should be transformed to lowercase.                                                                                    | runtime.koa.lowercase.enabled       | --koa-lowercase-enabled               | `true`                            | `Boolean`               | No       |

#### Normalize

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| defer                    | If this should be performed after looking for a file on disk.                                                                   | runtime.koa.normalize.defer         | --koa-normalize-defer                 | `false`                           | `Boolean`               | No       |
| enabled                  | If paths should be normalized, that is remove extra slashes.                                                                    | runtime.koa.normalize.enabled       | --koa-normalize-enabled               | `true`                            | `Boolean`               | No       |

#### TrailingSlashes

| Name                     | Description                                                                                                                     | Path                                | CLI option                            | Default                           | Type                    | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------- | --------------------------------- | ----------------------- | -------- |
| defer                    | If this should be performed after looking for a file on disk.                                                                   | runtime.koa.trailingSlashes.defer   | --koa-trailingSlashes-defer           | `true`                            | `Boolean`               | No       |
| enabled                  | Set to true to enforce trailing slashes, false to remove them and null for no rule.                                             | runtime.koa.trailingSlashes.enabled | --koa-trailingSlashes-enabled         | `true`                            | `Boolean`               | No       |
