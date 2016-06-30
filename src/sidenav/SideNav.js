
import React, { PropTypes } from 'react';
import { FlexColumn } from 'reactor-ui/containers/Flex';
import styles from './SideNav.css';

const { freeze } = Object;

export const Nav = (props) => (
    <div className={styles['nav-item']}>
        <span style={{width: 18}} className={props.icon}/>{props.text}
    </div>
);

Nav.contextTypes = {
    ruiSideNavTheme: PropTypes.object
};

export class NavItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hover: false };
    }

    static contextTypes = {
        ruiSideNavTheme: PropTypes.object
    }

    onMouseOver = () => {
        this.setState( { hover: true });
    }

    onMouseOut = () => {
        this.setState( { hover: false });
    }
    render() {
        const { props } = this;
        const { hover } = this.state;
        const { ruiSideNavTheme: { colors } } = this.context;
        const { selection } = colors;
        const style = hover ? { background: selection } : {};
        return (
            <li style={style} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} className={styles['nav']}>
                <Nav {...{...props, hover}} />
            </li>
        );
    }
};

Nav.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

export const DEFAULT_THEME = freeze({ colors: { selection: '#f4f4f4', text: '#3a5266', highlight: '#c0392b' } });

/**
 * Side Bar Navigation component
 */
export class SideNav extends React.Component {

    static propTypes = {
        children: PropTypes.node,
        theme: PropTypes.object
    }
    static childContextTypes = {
        ruiSideNavTheme: PropTypes.object
    }
    getChildContext() {
        const { colors } = this.props.theme || {};
        return { ruiSideNavTheme: { colors: {...colors, ...DEFAULT_THEME.colors }} };
    }
    render() {
        const { props } = this;
        return (
            <FlexColumn style={{width: '100%'}}>
                <ul className={styles['sidenav']}>
                    {props.children}
                </ul>
            </FlexColumn>
        );
    }
}
