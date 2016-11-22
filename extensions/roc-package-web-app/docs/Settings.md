# Settings for `roc-package-web-app`

## Runtime

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| favicon     | Path to the favicon file, specially handled on the server.                                                                     | runtime.favicon                     | --runtime-favicon                     |                         | `String`                     | No       | No           | roc-package-web-app                   |
| port        | Port for the server to use.                                                                                                    | runtime.port                        | --runtime-port                        | `3000`                  | `Integer`                    | Yes      | No           | roc-package-web-app                   |
| serve       | What folder the server should expose.                                                                                          | runtime.serve                       | --runtime-serve                       | `["build/client"]`      | `Filepath / Array(Filepath)` | No       |              | roc-package-web-app                   |
| startBundle | Relative path to a bundle to start when calling &quot;start&quot;, is not needed in most cases.                                | runtime.startBundle                 | --runtime-startBundle                 | `"build/server/app.js"` | `Filepath`                   | No       | No           | roc-plugin-start, roc-package-web-app |

### Debug

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| server      | Filter for debug messages that should be shown for the server, see https://npmjs.com/package/debug.                            | runtime.debug.server                | --runtime-debug-server                | `"roc:*"`               | `String`                     | No       | Yes          | roc-package-web-app                   |

### Https

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| cert        | The certificate file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically. | runtime.https.cert                  | --runtime-https-cert                  |                         | `Filepath`                   | No       | No           | roc-package-web-app                   |
| key         | The key file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically.         | runtime.https.key                   | --runtime-https-key                   |                         | `Filepath`                   | No       | No           | roc-package-web-app                   |
| port        | Port for the server to use for HTTPS. If none is defined it will not launch in HTTPS.                                          | runtime.https.port                  | --runtime-https-port                  |                         | `Integer`                    | No       | No           | roc-package-web-app                   |

### Koa
Settings for how Koa should handle paths.


#### Lowercase

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| defer       | If this should be performed after looking for a file on disk.                                                                  | runtime.koa.lowercase.defer         | --runtime-koa-lowercase-defer         | `true`                  | `Boolean`                    | Yes      |              | roc-package-web-app                   |
| enabled     | If paths should be transformed to lowercase.                                                                                   | runtime.koa.lowercase.enabled       | --runtime-koa-lowercase-enabled       | `true`                  | `Boolean`                    | Yes      |              | roc-package-web-app                   |

#### Normalize

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| defer       | If this should be performed after looking for a file on disk.                                                                  | runtime.koa.normalize.defer         | --runtime-koa-normalize-defer         | `false`                 | `Boolean`                    | Yes      |              | roc-package-web-app                   |
| enabled     | If paths should be normalized, that is remove extra slashes.                                                                   | runtime.koa.normalize.enabled       | --runtime-koa-normalize-enabled       | `true`                  | `Boolean`                    | Yes      |              | roc-package-web-app                   |

#### StaticServe

✓ ― Supports __raw

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| maxage      | Browser cache max-age in milliseconds. Production only.                                                                        | runtime.koa.staticServe.maxage      | --runtime-koa-staticServe-maxage      | `60000`                 | `Integer`                    | Yes      |              | roc-package-web-app                   |

#### TrailingSlashes

| Name        | Description                                                                                                                    | Path                                | CLI option                            | Default                 | Type                         | Required | Can be empty | Extensions                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------- | ----------------------- | ---------------------------- | -------- | ------------ | ------------------------------------- |
| defer       | If this should be performed after looking for a file on disk.                                                                  | runtime.koa.trailingSlashes.defer   | --runtime-koa-trailingSlashes-defer   | `true`                  | `Boolean`                    | Yes      |              | roc-package-web-app                   |
| enabled     | Set to true to enforce trailing slashes, false to remove them and null for no rule.                                            | runtime.koa.trailingSlashes.enabled | --runtime-koa-trailingSlashes-enabled | `true`                  | `Boolean`                    | No       |              | roc-package-web-app                   |
