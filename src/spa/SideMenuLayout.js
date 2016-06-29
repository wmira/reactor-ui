
import React, { Component, PropTypes } from 'react';
import { Flex, NavItem, SectionItem } from './Flex';

import './SideMenuLayout.css';

export const SideMenuBar = ({width = 220, children, background = '#FFF'}) => (
    <NavItem flex={`0 0 ${width}px`} background={background} >
        {children}
    </NavItem>
);

export const Body = ({children, background = '#FFF'}) => (
    <SectionItem background={background}>
        {children}
    </SectionItem>
);

export class SideMenuLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
    }

    constructor(props) {
        super(props);
    }
    render() {
        const { props } = this;
        return (
            <Flex style={{minHeight: '100vh'}}>
                { props.children }
            </Flex>
        );
    }
}
