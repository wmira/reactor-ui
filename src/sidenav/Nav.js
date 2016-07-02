
import React, { PropTypes } from 'react';
import styles from './SideNav.css';

//section nav
export const SNav = (props) => (
    <div className={styles['nav-section']} style={props.style}>
        {props.title}
    </div>
);
export const Nav = (props) => (
    <div className={styles['nav-item']}>
        <span style={{width: 22}} className={props.icon}/>{props.text}
    </div>
);

Nav.contextTypes = {
    ruiSideNavTheme: PropTypes.object
};

Nav.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

SNav.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
};
