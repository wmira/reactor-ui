import React from 'react';
import { render } from 'react-dom';

import { Btn, BtnGrp } from 'reactor-ui/buttons';

const BtnPrimary = (props) => (
    <Btn {...props} theme={{background: '#19B5FE'}}/>
);

const App = React.createClass({

    render() {
        return (
            <div>
                <div>
                    <BtnPrimary onClick={() => alert('hey')} text=' Reactor UI '/>
                    <Btn onClick={() => alert('hey')} text=' Reactor UI '/>
                </div>
                <div>
                    <BtnGrp>
                        <Btn value='database' icon='fa fa-database'/>
                        <Btn value='diamond' icon='fa fa-diamond'/>
                        <Btn value='cube' icon='fa fa-cube'/>
                    </BtnGrp>
                </div>
            </div>
        );
    }
});

const el = document.createElement('div');

document.body.appendChild(el);

render(<App />, el);
