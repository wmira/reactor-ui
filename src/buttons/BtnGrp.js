
import React, { cloneElement, Children, PropTypes } from 'react';
import { InlineBlk } from '../containers/InlineBlk';

export class BtnGrp extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        active: PropTypes.string,
        onClick: PropTypes.func,
        scheme: PropTypes.string
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
        const { scheme: userScheme, children, active } = this.props;

        return (
            <InlineBlk>
                { Children.map(children, (child) => {
                    const value = child.props.value;
                    const scheme = active === value ? userScheme : 'default';
                    return cloneElement(child, { scheme , onClick: this.onClick } );
                })}
            </InlineBlk>
        );
    }
}
