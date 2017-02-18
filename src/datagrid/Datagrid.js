
import React, { PropTypes, Component } from 'react';

import 'react-virtualized/styles.css';
import { AutoSizer, Table, Column } from 'react-virtualized';

import { get, compose, map } from 'fkit-js';

import Cols from './Cols';
import { findChild } from '../util';
import Input from '../forms/Input';

const getChildren = get('children');

const createColConfigs = compose(  map(get('props')), get('props.children'), findChild(Cols), getChildren );

const columnConfigIndexer = ( (map, colconfig ) => {
    map[colconfig.id] = colconfig;
    return map;
});

const InputEditorStyle = {
    padding: '0px 2px ',
    paddingRight: 2,
    height: '100%',
    border: 'none',
    borderRadius: '0px',
    outline: 'none',
    width: '100%'
};

const hasSelection = selection => {
    if ( selection && typeof selection.row === 'number' ) {
        return true;
    }

    return false;
};

export default class Datagrid extends Component {

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
        rowHeight: PropTypes.number,
        headerHeight: PropTypes.number,
        data: PropTypes.array,
        enableSelection: PropTypes.bool,
        children: PropTypes.node,
        onCellDataEdited: PropTypes.func
    }

    constructor(props) {
        super(props);

        const columnConfigs = createColConfigs(props);

        const columnConfigsMap = columnConfigs.reduce(columnConfigIndexer, {});

        const columns = columnConfigs.map( (config) => {
            const { id, width, flexGrow } = config;
            return <Column
                    flexGrow={flexGrow}
                    headerRenderer={this.renderHeader}
                    cellDataGetter={this.cellDataGetter}
                    cellRenderer={this.cellRenderer} key='id' dataKey={id} width={width} />;
        });
        this.state = { selection: {}, columnConfigs, columnConfigsMap, columns };
    }

    cellRenderer = ({ cellData, columnData, dataKey, rowData, rowIndex }) => {

        const { editing, columnConfigsMap } = this.state;
        const colConfig = columnConfigsMap[dataKey];
        const { formatter } = colConfig;

        let dataToRender = formatter ? formatter({ cellData, rowData, dataKey }) : cellData;

        if ( colConfig.renderer ) {
            dataToRender = colConfig.renderer({ rowData, cellData, dataKey, formatter });
        }
        const { selection } = this.state;
        const isSelected = selection.col === dataKey && selection.row === rowIndex;
        const className  = isSelected ? 'rui-dgrid-cell-selected' : '';

        if ( editing && isSelected ) {
            dataToRender = <Input onKeyUp={this.onEditKeyPress} onKeyPress={this.onEditKeyPress} type='number' name='rui_edit' onChange={this.onEditChange}
                            onBlur={this.onEditBlur} focusOnRender={true}
                            style={InputEditorStyle} value={this.state.editingData}/>;
        }

        return <div data-row={rowIndex} className={`rui-dgrid-cell-data ${className}`} data-key={dataKey} onClick={this.onCellClicked} >{ dataToRender }</div>;
    }

    onEditBlur = () => {
        this.setState({ editing: false, editingData: null, editedInfo: null });
    }

    onEditKeyPress = (e) => {
        const { key } = e;

        if ( key === 'Enter' ) {
            this.dispatchOnEditCompletion();
            this.onEditBlur();
        } else if ( key === 'Escape' ) {
            this.onEditBlur();
        }
    }

    onEditChange = ({ value }) => {

        this.setState({ editingData: value });

    }

    dispatchOnEditCompletion = () => {
        const { editedInfo, editingData } = this.state;
        const { columnConfigsMap } = this.state;
        const columnConfig = columnConfigsMap[editedInfo.col];

        if ( this.props.onCellDataEdited ) {
            this.props.onCellDataEdited({ value: editingData, key: editedInfo.col, columnConfig, index: editedInfo.row });
        }
    }


    onCellClicked = (e) => {
        let element = e.target;

        let row = element.getAttribute('data-row');
        let col = element.getAttribute('data-key');

        if ( !row && !col ) {
            element = e.target.parentElement;
            row = element.getAttribute('data-row');
            col = element.getAttribute('data-key');
        }

        if ( typeof row !== 'undefined' && col ) {
            let clearEditData = null;
            if ( this.state.editing ) {
                clearEditData = { editing: false, editingData: null, editedInfo: null };
                this.dispatchOnEditCompletion();
            }
            this.setState({ selection: { col, row: parseInt(row) }, ...clearEditData });
        } else {
            this.setState({ selection: {} });
        }
    }

    cellDataGetter = ({ dataKey, rowData }) => {
        const { columnConfigsMap } = this.state;
        const columnConfig = columnConfigsMap[dataKey];
        const { path } = columnConfig;
        if ( path ) {
            return get(path)(rowData);
        }

        return rowData[dataKey];

    }

    componentDidUpdate(prevProps, prevState) {
        const { selection } = this.state;
        const { selection: prevSelection } = prevState;
        this.Table.forceUpdate();
    }



    getRow = ({ index }) => {
        const { data } = this.props;
        return data[index];
    }

    renderHeader = ({ columnData, dataKey, disableSort, label, sortBy, sortDirection }) => {
        const { columnConfigs } = this.state;
        const colConfigMapById = columnConfigs.reduce( (map, config) => {
            map[config.id] = config;
            return map;
        }, {});
        const colConfig = colConfigMapById[dataKey];

        return <div>{colConfig.header || dataKey}</div>;
    }

    noRowsRenderer = () => {
        return 'Nothing To Display';
    }

    onKeyPress = (e) => {
        const { columnConfigsMap, selection } = this.state;
        const { col } = selection;
        if ( hasSelection(this.state.selection) && columnConfigsMap[col].editable === true ) {
            e.stopPropagation();
            const { key } = e;
            const { editing } = this.state;
            if ( !editing ) {
                //start editor
                this.setState({ editing: true , editingData: key, editedInfo: { ...this.state.selection } });
            }
        }
    }

    render() {
        const { data, height, width } = this.props;
        const { columns, selection } = this.state;


        return (
            <div style={{height, width }} onKeyPress={this.onKeyPress}>
                <Table
                    _data={data}
                    _selection={selection}
                    //onRowClick={this.onRowClicked}
                    noRowsRenderer={this.noRowsRenderer}
                    ref={ (Table) => {
                        this.Table = Table;
                    }}
                    disableHeader={false}
                    disableHeader={false}
                    headerHeight={24}
                    height={height}
                    rowClassName={'rui-dgrid-row'}
                    rowHeight={24}
                    rowGetter={this.getRow}
                    rowCount={data.length}
                    width={width}>
                    { columns }
                </Table>
            </div>
        );
    }
}

export { Datagrid };
