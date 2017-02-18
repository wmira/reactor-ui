import React, { PropTypes } from 'react';

export const RowLeftRight = (props) => {
    return <div style={{...props.style, justifyContent: 'space-between', display: 'flex', }}>{props.children}</div>;
};

RowLeftRight.propTypes = {
    style: PropTypes.object,
    children: PropTypes.node
};


export default RowLeftRight;