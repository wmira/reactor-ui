
import React, { Component } from 'react';

export default class Cell extends Component {

    render() {
        const { props } = this;
        const { colConfig, data, index, colIndex } = props;
        const { renderer } = colConfig;
        const value = data[colConfig.id];

        const renderedValue = renderer ? renderer({value}) : value;
        return (
            <div style={{ position: 'relative', flexBasis: `${colConfig.width}px` }} className='rui-dgrid-cell-cont'>
                <div data-row={index} data-col={colIndex} data-col-id={colConfig.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    className='rui-dgrid-cell-data'>{ renderedValue }</div>
            </div>
        );
    }
}
