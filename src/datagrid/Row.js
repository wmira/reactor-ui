
import React, { Component, PropTypes } from 'react';
import Cell from './Cell';

export default class Row extends Component {

    static propTypes = {
        data: PropTypes.object,
        colConfigs: PropTypes.array.isRequired,
        onClick: PropTypes.func,
        edited: PropTypes.object,
        selection: PropTypes.array,
        index: PropTypes.number
    }

    renderCells = () => {
        const { data, colConfigs, index, selection } = this.props;

        return colConfigs.map( (colConfig, colIndex) => {
            return <Cell selection={selection} key={`${index}-${colIndex}`} data={data} colConfig={colConfig} colIndex={colIndex} index={index}/>;
        });
    }

    render() {

        return (
            <div className='rui-dgrid-row'>
                { this.renderCells() }
            </div>
        );
    }
}
