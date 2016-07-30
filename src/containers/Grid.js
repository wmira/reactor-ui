
import { PropTypes } from  'react';

import divWith from '../hoc/divWith';

/**
 * Uses Bootstraps Grid System.
 * This assumes you have bootstraps grid css loaded
 *
 */
const propTypes = Object.freeze({
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string
});

export const Left = divWith({style: {float: 'left'}});
export const Right = divWith({style: {float: 'right'}});
export const Row = divWith({className: 'row'});

export const Container = ({className, fluid = true, style, children}) => {
    const clsName = fluid === true ? 'container-fluid' : 'container';
    return divWith({className: clsName})({className, style,children});
};

Left.propTypes = propTypes;
Right.propTypes = propTypes;
Container.propTypes = propTypes;

//Col :: String -> (Int -> (divWith)) -> (props -> Component)
const Col = size => weight => divWith({className: `col-${size}-${weight}`});

const ColMd = Col('md');
const ColSm = Col('sm');
const ColLg = Col('lg');


export const ColSm1 = ColSm(1);
export const ColSm2 = ColSm(2);
export const ColSm3 = ColSm(3);
export const ColSm4 = ColSm(4);
export const ColSm5 = ColSm(5);
export const ColSm6 = ColSm(6);
export const ColSm7 = ColSm(7);
export const ColSm8 = ColSm(8);
export const ColSm9 = ColSm(9);
export const ColSm10 = ColSm(10);
export const ColSm11 = ColSm(11);
export const ColSm12 = ColSm(12);

export const ColMd1 = ColMd(1);
export const ColMd2 = ColMd(2);
export const ColMd3 = ColMd(3);
export const ColMd4 = ColMd(4);
export const ColMd5 = ColMd(5);
export const ColMd6 = ColMd(6);
export const ColMd7 = ColMd(7);
export const ColMd8 = ColMd(8);
export const ColMd9 = ColMd(9);
export const ColMd10 = ColMd(10);
export const ColMd11 = ColMd(11);
export const ColMd12 = ColMd(12);

export const ColLg1 = ColLg(1);
export const ColLg2 = ColLg(2);
export const ColLg3 = ColLg(3);
export const ColLg4 = ColLg(4);
export const ColLg5 = ColLg(5);
export const ColLg6 = ColLg(6);
export const ColLg7 = ColLg(7);
export const ColLg8 = ColLg(8);
export const ColLg9 = ColLg(9);
export const ColLg10 = ColLg(10);
export const ColLg11 = ColLg(11);
export const ColLg12 = ColLg(12);
