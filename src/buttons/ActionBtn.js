import React, { Component } from 'react';

import Btn from './Btn';

export class ActionBtn extends Component {

    constructor(props) {
        super(props);
    }

    toggleItems = () => {
        this.setState({ showActions: true });
    }

    render() {
        return (
            <Btn ref={this.btnRef} {...this.props} onClick={this.toggleItems} />
        );
    }
}