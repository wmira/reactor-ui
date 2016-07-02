
import React, { PropTypes } from 'react';
import { mergeStyles as mstyles, ternStyle as tstyle } from 'reactor-ui/util/mergeStyles';
import { DEFAULT_THEME } from './SideNav';
import { Nav } from './Nav';
import styles from './SideNav.css';

/**
 * Item
 */
export class NavItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hover: false };
    }

    static contextTypes = {
        ruiSideNavTheme: PropTypes.object
    }

    static propTypes = {
        id: PropTypes.string,
        onClick: PropTypes.func,
        selectedId: PropTypes.string
    }

    onMouseOver = () => {
        this.setState( { hover: true });
    }

    onMouseOut = () => {
        this.setState( { hover: false });
    }

    onClick = () => {
        if ( this.props.onClick ) {
            this.props.onClick(this.props.id);
        }
    }

    render() {
        const { props } = this;
        const { selectedId, id } = props;
        const { hover } = this.state;
        const selected = selectedId === id && selectedId !== undefined;
        const { ruiSideNavTheme = DEFAULT_THEME } = this.context;
        const { colors } = ruiSideNavTheme;
        const { selection, highlight } = colors;
        const style = mstyles(
            tstyle(hover || selected, { background: selection }),
            tstyle(selected, { borderLeft: `4px solid ${highlight}`}),
            props.style
        );
        return (
            <li onClick={this.onClick} style={style} onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut} className={styles['nav']}>
                {props.children ? props.children : <Nav {...{...props, hover}} /> }
            </li>
        );
    }
};
