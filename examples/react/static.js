import fs from 'fs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import AwesomeComponent from './awesome-component';

const template = fs.readFileSync('files/index.html', 'utf8');

// Rendering function for static-site-generator-webpack-plugin
// See more here:
// https://github.com/markdalgleish/static-site-generator-webpack-plugin/blob/master/README.md#indexjs
export default function render(locals) {
    const renderedApp = renderToString(
        <div>
            <p>At page: {JSON.stringify(locals.path)}</p>
            <AwesomeComponent color="red"/>
        </div>
    );
    return template.replace('<!-- @@STATIC_DEMO@@ -->', renderedApp);
}
