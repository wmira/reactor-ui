
import React, { PropTypes } from 'react';

//section nav
export const SNav = (props) => (
    <div className={'rui-snav-section'} style={props.style}>
        {props.title}
    </div>
);
export const Nav = (props) => (
    <div>
        <span style={{width: 22}} className={props.icon}/>{props.text}
    </div>
);

Nav.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

SNav.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
};
