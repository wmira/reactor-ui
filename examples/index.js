
import React from 'react';
import { render } from 'react-dom';

export const createAndRender = (App) => {

    const mountPoint = document.createElement('div');

    document.body.appendChild(mountPoint);
    render(<App />, mountPoint);
};