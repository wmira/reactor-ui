
import React, { PropTypes } from 'react';
import { mergeStyles as mstyles, ternStyle as tstyle } from 'reactor-ui/util/mergeStyles';
import { NavItem } from './NavItem';
import styles from './SideNav.css';
import { createNavItems } from './SideNav';

const EXTRA_GROUP_STYLE = {padding: '10px 0px 0px 10px', margin: '0px -18px 0px -30px'};

export class NavGroup extends React.Component {

    static propTypes = {
        children: PropTypes.node,
        selectedId: PropTypes.string,
        onClick: PropTypes.func,
        text: PropTypes.string,
        icon: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = { collapsed: false, computedHeight: 0 };
    }
    componentDidMount() {

        if ( typeof document !== 'undefined' ) {
            const cloned = this.refs.cont.cloneNode(true);
            cloned.style.position = 'absolute';
            cloned.style.left = '-9999px';
            cloned.style.height = 'auto';
            document.body.appendChild(cloned);
            this.setState({computedHeight: cloned.clientHeight });
            document.body.removeChild(cloned);
        }
    }

    onClick = () => {
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {

        const { collapsed, computedHeight: height } = this.state;
        const style = mstyles(tstyle(collapsed, { height, ...EXTRA_GROUP_STYLE}, {height: 0}));
        const { selectedId, onClick, children } = this.props;

        return (
            <NavItem>
                <ul className={styles['sidenav']}>
                    <NavItem onClick={this.onClick} text={this.props.text} icon={this.props.icon} style={{padding: '0px 0px', borderLeft: 0}}/>
                </ul>
                <ul ref='cont' style={style} className={`${styles['sidenav']}  ${styles['sidenav-grp']}`}>
                    {createNavItems(children, onClick, selectedId, {paddingLeft: 24})}
                </ul>
            </NavItem>
        );
    }
}
