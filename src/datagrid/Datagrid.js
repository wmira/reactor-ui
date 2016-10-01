
import React, { PropTypes, Component } from 'react';
//import { findDOMNode } from 'react-dom';

import 'react-virtualized/styles.css';
import { AutoSizer, FlexTable, FlexColumn } from 'react-virtualized';
import { get, compose, map } from 'fkit-js';
import Cols from './Cols';
import { findChild } from '../util';

const getChildren = get('children');

const createColConfigs = compose(  map(get('props')), get('props.children'), findChild(Cols), getChildren );


export default class Datagrid extends Component {

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
        rowHeight: PropTypes.number,
        headerHeight: PropTypes.number,
        data: PropTypes.array,
        enableSelection: PropTypes.bool,
        children: PropTypes.node
    }

    constructor(props) {
        super(props);

        this.state = { selection: [], columnConfigs: createColConfigs(props)};
    }

    onClick = (e) => {
        let element = e.target;
        let row = element.getAttribute('data-row');
        let col = element.getAttribute('data-col');

        if ( !row && !col ) {
            element = e.target.parentElement;
            row = element.getAttribute('data-row');
            col = element.getAttribute('data-col');
        }
        this.setState({ selectedColConfig: this.state.columnConfigs[col], selectedElement: element });
    }

    getRow = ({ index }) => {
        const { data } = this.props;
        return data[index];
    }

    renderHeader = ({ columnData, dataKey, disableSort, label, sortBy, sortDirection }) => {
        return <div>{dataKey}</div>;
    }
    render() {
        const { data, height: viewHeight } = this.props;
        const { columnConfigs } = this.state;
        const columns = columnConfigs.map( (config) => {
            const { id, width } = config;
            return <FlexColumn
                    headerRenderer={this.renderHeader}
                    cellDataGetter={({ columnData, dataKey, rowData }) => rowData[dataKey] }
                    cellRenderer={({ cellData, columnData, dataKey, rowData, rowIndex }) => cellData} key='id' dataKey={id} width={width} />;
        });

        return (
            <div style={{display: 'flex', height: viewHeight || 200}}>
                <div style={{ flex: '1 1 auto' }} ref={ (el) => this.rootEl = el } onClick={this.onClick}>
                    <AutoSizer>
                        { ({ width, height }) => (
                            <FlexTable
                                ref='Table'
                                disableHeader={false}
                                disableHeader={false}
                                headerHeight={22}
                                height={height}
                                rowClassName={'rui-dgrid-row'}
                                rowHeight={22}
                                rowGetter={this.getRow}
                                rowCount={data.length}
                                width={width}>
                                { columns }
                            </FlexTable>
                        )}
                    </AutoSizer>
                </div>
            </div>
        );
    }
}

export { Datagrid };
//{ enableSelection ? <Selection anchor={this.rootEl} colConfig={this.state.selectedColConfig} element={this.state.selectedElement} /> : null }