import React, { Component } from 'react';

import { createAndRender } from '../';
import { Datagrid, Cols, Col } from 'reactor-ui/datagrid';

import data from './data';
import 'reactor-ui/css/datagrid.css';


const renderColor = ({ value }) => (
    <div style={{ color: '#FFF', display: 'flex', justifyContent: 'center', alignItems: 'center', background: value, width: '100%', height: '100%' }}>
        {value}
    </div>
);

class App extends Component {

    render() {
        return (
            <div style={{margin: 50, width: 720, height: 500}}>
                <Datagrid data={data}>
                    <Cols>
                        <Col width={80} id='isActive'/>
                        <Col width={120} id='balance'/>
                        <Col width={120} id='age'/>
                        <Col width={100} id='eyeColor' renderer={renderColor}/>
                        <Col width={200} id='name'/>
                        <Col width={100} id='gender'/>
                    </Cols>
                </Datagrid>
            </div>
        );
    }
}

createAndRender(App);