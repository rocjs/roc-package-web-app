# Settings for `roc-package-web-app`

## Runtime

| Name        | Description                                                                                                                    | Path                                | CLI option                    | Default                 | Type                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------- | ----------------------- | ----------------------- | -------- |
| favicon     | Path to the favicon file, specially handled on the server.                                                                     | runtime.favicon                     | --favicon                     | `null`                  | `String`                | No       |
| path        | The basepath for the application.                                                                                              | runtime.path                        | --path                        | `"/"`                   | `Filepath`              | No       |
| port        | Port for the server to use.                                                                                                    | runtime.port                        | --port                        | `3000`                  | `Integer`               | No       |
| serve       | What folder the server should expose.                                                                                          | runtime.serve                       | --serve                       | `["build/client"]`      | `Filepath / [Filepath]` | No       |
| startBundle | Relative path to a bundle to start when calling &quot;start&quot;.                                                             | runtime.startBundle                 | --startBundle                 | `"build/server/app.js"` | `Filepath`              | No       |

### Debug

| Name        | Description                                                                                                                    | Path                                | CLI option                    | Default                 | Type                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------- | ----------------------- | ----------------------- | -------- |
| server      | Filter for debug messages that should be shown for the server, see https://npmjs.com/package/debug.                            | runtime.debug.server                | --debug-server                | `"roc:*"`               | `String`                | No       |

### Https

| Name        | Description                                                                                                                    | Path                                | CLI option                    | Default                 | Type                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------- | ----------------------- | ----------------------- | -------- |
| cert        | The certificate file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically. | runtime.https.cert                  | --https-cert                  | `null`                  | `Unknown`               | No       |
| key         | The key file to use when using HTTPS. If none is provided and if running in dev a file will be provided automatically.         | runtime.https.key                   | --https-key                   | `null`                  | `Unknown`               | No       |
| port        | Port for the server to use for HTTPS. If none is defined it will not launch in HTTPS.                                          | runtime.https.port                  | --https-port                  | `null`                  | `Unknown`               | No       |

### Koa
Settings for how Koa should handle paths.

#### Lowercase

| Name        | Description                                                                                                                    | Path                                | CLI option                    | Default                 | Type                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------- | ----------------------- | ----------------------- | -------- |
| defer       | If this should be performed after looking for a file on disk.                                                                  | runtime.koa.lowercase.defer         | --koa-lowercase-defer         | `true`                  | `Boolean`               | No       |
| enabled     | If paths should be transformed to lowercase.                                                                                   | runtime.koa.lowercase.enabled       | --koa-lowercase-enabled       | `true`                  | `Boolean`               | No       |

#### Normalize

| Name        | Description                                                                                                                    | Path                                | CLI option                    | Default                 | Type                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------- | ----------------------- | ----------------------- | -------- |
| defer       | If this should be performed after looking for a file on disk.                                                                  | runtime.koa.normalize.defer         | --koa-normalize-defer         | `false`                 | `Boolean`               | No       |
| enabled     | If paths should be normalized, that is remove extra slashes.                                                                   | runtime.koa.normalize.enabled       | --koa-normalize-enabled       | `true`                  | `Boolean`               | No       |

#### TrailingSlashes

| Name        | Description                                                                                                                    | Path                                | CLI option                    | Default                 | Type                    | Required |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------------------- | ----------------------- | ----------------------- | -------- |
| defer       | If this should be performed after looking for a file on disk.                                                                  | runtime.koa.trailingSlashes.defer   | --koa-trailingSlashes-defer   | `true`                  | `Boolean`               | No       |
| enabled     | Set to true to enforce trailing slashes, false to remove them and null for no rule.                                            | runtime.koa.trailingSlashes.enabled | --koa-trailingSlashes-enabled | `true`                  | `Boolean`               | No       |
