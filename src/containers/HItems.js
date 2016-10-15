import React, { PropTypes, Children } from 'react';

export const HItems = ({children}) => (
    <span>
        {Children.map(children, (child) => {
            return <span style={{paddingRight: 2}}>{child}</span>;
        })}
    </span>
);

HItems.propTypes = {
    children: PropTypes.node
};

export default HItems;