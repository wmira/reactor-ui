
import React, { Children, PropTypes, cloneElement } from 'react';

import { NavItem } from './NavItem';
import { SNav } from './Nav';

import { FlexColumn } from 'reactor-ui/containers/Flex';
import styles from './SideNav.css';
import { noop } from 'reactor-ui/util';


const { freeze } = Object;
export const DEFAULT_THEME = freeze({ colors: { selection: '#f4f4f4', text: '#3a5266', highlight: '#c0392b' } });

export const NavSection = ( {children}) => ({children});

const navItemCloner = (onClick, selectedId) => child => {
    return cloneElement(child, {onClick, selectedId});
};

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

    createNavigation = () => {
        const { children, selectedId } = this.props;
        const cloneNavItem = navItemCloner(this.onClick, selectedId);

        //Children.map already flatMaps result
        return Children.map( children, child => {
            if ( child.type === NavSection ) {
                const grandC = child.props.children;
                const sectionE = <NavItem selectedId={selectedId} onClick={noop}><SNav {...child.props} /></NavItem>;
                return [sectionE, ...Children.map(grandC,cloneNavItem) ];
            }
            return cloneNavItem(child);
        });

    }

    render() {
        return (
            <FlexColumn style={{width: '100%'}}>
                <ul className={styles['sidenav']} style={{color: this.getChildContext().ruiSideNavTheme.colors.text}}>
                    {this.createNavigation()}
                </ul>
            </FlexColumn>
        );
    }
}
