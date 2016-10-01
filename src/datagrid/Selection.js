

import React, { Component, PropTypes } from 'react';

const getPosition = (el) => {

    let xPos = 0;
    let yPos = 0;

    while (el) {
        if (el.tagName === 'BODY') {
            // deal with browser quirks with body/window/document and page scroll
            const xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            const yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
};

export default class Selection extends Component {

    static propTypes = {
        element: PropTypes.object
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const { element, anchor, colConfig } = this.props;
        const position = getPosition(element);
        const anchorPos = anchor ? getPosition(anchor) : null;

        if ( anchorPos ) {
            const netx = position.x - anchorPos.x;
            const nety = position.y - anchorPos.y;
            const width = element ? element.offsetWidth : 0;
            const height = element ? element.offsetHeight : 0;

            return (
                <div>
                    <div style={{ position: 'absolute', left: netx - 1, top: nety, width: 2, background: 'red', height: 22 }}/>
                    <div style={{ position: 'absolute', left: netx + width - 2, top: position.y - anchorPos.y, width: 2, background: 'red', height: 22 }}/>
                    <div style={{ position: 'absolute', left: netx - 1, top: nety, width: width -1, background: 'red', height: 2 }}/>
                    <div style={{ position: 'absolute', left: netx - 1, top: nety + height, width: width, background: 'red', height: 2 }}/>
                </div>
            );
        }

        return null;
    }

}