
import React, { PropTypes } from 'react';

import styles from './Pane.css';

const Pane = ({children}) => (
    <div className={styles.pane}>
        { children }
    </div>
);

Pane.propTypes = {
    children: PropTypes.node
};

export const Title = (props) => (
    <div className={styles['pane-title']}>
        <div><span>{props.iconCls}</span><span>{props.title}</span></div>
    </div>
);

Title.propTypes = {
    iconCls: PropTypes.string,
    title: PropTypes.string
};

export default Pane;
