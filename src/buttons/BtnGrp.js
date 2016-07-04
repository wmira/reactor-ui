
import React, { cloneElement, Children, PropTypes } from 'react';
import { InlineBlk } from '../containers/InlineBlk';

const INACTIVE_COLOR = '#bdc3c7';
export const INACTIVE_THEME = Object.freeze({ background: INACTIVE_COLOR, hover: INACTIVE_COLOR});
export class BtnGrp extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        active: PropTypes.string,
        onClick: PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    onClick = (e, value) => {
        if ( this.props.onClick ) {
            this.props.onClick(e, value);
        }
    }

    render() {
        const { children, active } = this.props;
        return (
            <InlineBlk>
                {Children.map(children, (child) => {
                    const value = child.props.value;
                    const theme = active === value ? {} : INACTIVE_THEME;
                    return cloneElement(child, { theme , onClick: this.onClick } );
                })}
            </InlineBlk>
        );
    }
}
