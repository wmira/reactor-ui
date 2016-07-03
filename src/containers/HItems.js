import React, { Children } from 'react';

export const HItems = ({children}) => (
    <span>
        {Children.map(children, (child) => {
            return <span style={{paddingRight: 2}}>{child}</span>;
        })}
    </span>
);
