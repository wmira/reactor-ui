
import React, { PropTypes } from 'react';

export const InlineBlk = ({style, children}) => (
    <div style={{...style, display: 'inline-block'}}>{children}</div>
);

InlineBlk.propTypes = {
    style: PropTypes.string,
    children: PropTypes.node
};

export default InlineBlk;