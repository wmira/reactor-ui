
import React from 'react';

export const elementWith = el => ({className = '', style = {}, attrs = {}})=>
    (props) => {
        const { className: propClass = '', style: propStyle = {}, children, ...others } = props; //eslint-disable-line
        const mergeStyles = {...propStyle, ...style};
        const attributes = {...others, ...attrs};
        const clsArr = [propClass,className].filter(str => str);
        const clsName = clsArr.length > 0 ? clsArr.join(' ') : null;
        const propsToPass = { className: clsName, style: mergeStyles, ...attributes };
        return React.createElement(el, propsToPass, children);
    };


//helper
export const divWith = elementWith('div');

export default elementWith;
