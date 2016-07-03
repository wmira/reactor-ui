
import React, { PropTypes } from 'react';

import { FlexColumn } from 'reactor-ui/containers/Flex';
import styles from './SideNav.css';
import { noop } from 'reactor-ui/util';

import { createNavItems } from './createNavItems';

export const DEFAULT_THEME = Object.freeze({ colors: { selection: '#f4f4f4', text: '#3a5266', highlight: '#c0392b' } });


/**
 * Side Bar Navigation component
 */
export class SideNav extends React.Component {

    static propTypes = {
        children: PropTypes.node,
        theme: PropTypes.object,
        selectedId: PropTypes.string.isRequired,
        onClick: PropTypes.func
    }

    static defaultProps = {
        onClick: noop
    }

    static childContextTypes = {
        ruiSideNavTheme: PropTypes.object
    }
    getChildContext = () => {
        const { colors } = this.props.theme || {};
        return { ruiSideNavTheme: { colors: {...colors, ...DEFAULT_THEME.colors }} };
    }

    onClick = (id) => {
        const { onClick } = this.props;
        onClick(id);
    }

    render() {
        const { children, selectedId } = this.props;
        const { ruiSideNavTheme: { colors } } = this.getChildContext();
        const { text } = colors;
        return (
            <FlexColumn style={{width: '100%'}}>
                <ul className={styles['sidenav']} style={{color: text}}>
                    {createNavItems(children, this.onClick, selectedId)}
                </ul>
            </FlexColumn>
        );
    }
}
