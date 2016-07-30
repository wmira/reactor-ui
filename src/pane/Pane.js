
import React, { PropTypes } from 'react';

export const Pane = ({children}) => (
    <div>
        { children }
    </div>
);

Pane.propTypes = {
    children: PropTypes.node
};
