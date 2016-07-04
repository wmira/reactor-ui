import React from 'react';
import { render } from 'react-dom';

import { Btn, BtnGrp } from 'reactor-ui/buttons';
import { HItems } from 'reactor-ui/containers';

const BtnPrimary = (props) => (
    <Btn {...props} theme={{background: '#19B5FE'}}/>
);

const App = React.createClass({
    getInitialState() {
        return { activeBtnGrp: 'database' };
    },

    onBtnGroupClicked(e, value) {
        this.setState({activeBtnGrp: value });
    },

    render() {
        return (
            <div>
                <div>
                    <HItems>
                        <BtnPrimary onClick={() => alert('hey')} text=' Reactor UI '/>
                        <Btn onClick={() => alert('hey')} text=' Reactor UI '/>
                    </HItems>
                </div>
                <br/>
                <div>
                    <BtnGrp active={this.state.activeBtnGrp} onClick={this.onBtnGroupClicked}>
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
