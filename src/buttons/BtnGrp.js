
import React, { cloneElement, Children, PropTypes } from 'react';
import { InlineBlk } from '../containers/InlineBlk';

export class BtnGrp extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    }
    onClick = () => {

    }

    render() {
        const { children } = this.props;
        return (
            <InlineBlk>
                {Children.map(children, (child) => {
                    return cloneElement(child, {onClick: this.onClick});
                })}
            </InlineBlk>
        );
    }
}
