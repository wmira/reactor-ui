
import React, { Component, PropTypes } from 'react';
import { get, compose } from 'fkit-js';


import findChild from '../../util/findChild';

export const SideMenu = () => null;
export const Content = () => null;

const getChildren = get('props');
const findSideMenuContent = compose( getChildren, findChild(SideMenu) );
const findContent = compose( getChildren, findChild(Content));

export default class SideNavMenuLayout extends Component {

    static propTypes = {
        menuState: PropTypes.oneOf(['close', 'open']),
        menuWidth: PropTypes.number,
        children: PropTypes.node
    }

    static defaultProps = {
        menuState: 'open',
        menuWidth: 220
    }

    render() {

        const { menuWidth, children } = this.props;
        const { style: sideMenuStyle, children: sideMenuChild } = findSideMenuContent(children);
        const { children: contentChild } = findContent(children);

        return (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <div style={{ ...sideMenuStyle, position: 'absolute', height: '100%', left: 0, width: menuWidth }}>
                    { sideMenuChild }
                </div>
                <div style={{ marginLeft: menuWidth, height: '100%' }}>
                    { contentChild }
                </div>
            </div>
        );
    }
}