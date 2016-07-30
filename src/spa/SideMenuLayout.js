
import React, { Component, PropTypes } from 'react';
import { Flex, NavItem, SectionItem } from 'reactor-ui/containers/Flex';

import './SideMenuLayout.css';

export const SideMenu = ({width = 220, children, background = '#FFF'}) => (
    <NavItem style={{borderRight: '1px solid #E5E5E5'}} flex={`0 0 ${width}px`} background={background} >
        {children}
    </NavItem>
);

SideMenu.propTypes = {
    width: PropTypes.number,
    children: PropTypes.node,
    background: PropTypes.string
};

export const Content = ({children, background = '#FFF'}) => (
    <SectionItem background={background}>
        {children}
    </SectionItem>
);

Content.propTypes = {
    children: PropTypes.node,
    background: PropTypes.string
};

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
