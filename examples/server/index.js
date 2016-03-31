import { createServer } from 'roc-package-web-app/app';
import config from 'config';

createServer({
    serve: 'files'
}).start();

console.log('Value from node-config:', config.get('name'));
