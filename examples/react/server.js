import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'roc-package-web-app/app';

createServer().start();

const AwesomeComponent = require('./awesome-component').default;
console.log(renderToString(<AwesomeComponent color="red" />));
