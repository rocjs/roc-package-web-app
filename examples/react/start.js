import React from 'react';
import { render } from 'react-dom';

import AwesomeComponent from './awesome-component';

export function start() {
    render(<AwesomeComponent color="red"/>, document.getElementById('react'));
};
