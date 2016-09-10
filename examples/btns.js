import React from 'react';
import { render } from 'react-dom';

import { Btn, BtnGrp } from 'reactor-ui/buttons';
import { HItems } from 'reactor-ui/containers';

import 'reactor-ui/css/buttons.css';

const App = React.createClass({
    getInitialState() {
        return { activeBtnGrp: 'database' };
    },

    onBtnGroupClicked(e, value) {
        this.setState({activeBtnGrp: value });
    },

    render() {
        const onClick = () => alert('Reactor UI');
        return (
            <div>
                <div>
                    <HItems>
                        <Btn onClick={onClick} text=' Reactor UI '/>
                        <Btn scheme='primary' onClick={onClick} text=' Reactor UI '/>
                        <Btn scheme='success' onClick={onClick} text=' Reactor UI '/>
                        <Btn scheme='warning' onClick={onClick} text=' Reactor UI '/>
                        <Btn scheme='danger' onClick={onClick} text=' Reactor UI '/>
                        <Btn disabled={true} text=' Reactor UI '/>
                    </HItems>
                </div>
                <br/>
                <div>
                    <BtnGrp scheme='success' active={this.state.activeBtnGrp} onClick={this.onBtnGroupClicked}>
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
