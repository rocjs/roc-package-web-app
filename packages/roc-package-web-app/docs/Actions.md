# Actions for `roc-package-web-app`

## Actions
* [roc-plugin-start](#roc-plugin-start)
  * [runtime](#runtime)
* [roc-package-web-app](#roc-package-web-app)
  * [resolver](#resolver)
  * [runtime](#runtime)

## roc-plugin-start

### runtime

Adds the base runtime. Will resolve node paths and enable source map support.

__Connects to extension:__ `roc-plugin-start`  
__Connects to hook:__ `register-runtime`  

## roc-package-web-app

### resolver

__Connects to extension:__ `roc-plugin-start`  
__Connects to hook:__ `get-resolve-path`  

### runtime

__Connects to extension:__ `roc-plugin-start`  
__Connects to hook:__ `register-runtime`  
