
import { createElement } from 'react';
import identity from 'fkit-js/identity';

export const elementWith = el => ({className = '', style = {}, attrs = {}})=>
    (props) => {
        const { className: propClass = '', style: propStyle = {}, children, ...others } = props; //eslint-disable-line
        const mergeStyles = {...propStyle, ...style};
        const attributes = {...others, ...attrs};
        const clsArr = [propClass,className].filter(identity);
        const clsName = clsArr.length > 0 ? clsArr.join(' ') : null;
        const propsToPass = { className: clsName, style: mergeStyles, ...attributes };
        return createElement(el, propsToPass, children);
    };

//helper
export const divWith = elementWith('div');

export default elementWith;