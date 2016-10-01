
import React, { Children, PropTypes, Component } from 'react';

export const View = (props) => (Children.only(props.children));

View.propTypes = {
    name: PropTypes.string.isRequired
};

export default class ViewSwitcher extends Component {

    static propTypes = {
        activeView: PropTypes.string
    }


    render() {
        const { props } = this;
        const { children } = props;

        const ViewToRender = Children.toArray(children).reduce( (view, child) => {
            if ( !view && child.props.name === props.activeView ) {
                return child;
            }
            return view;
        }, null);


        return ( ViewToRender );
    }
}