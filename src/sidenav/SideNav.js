
import React, { PropTypes } from 'react';
import cx from 'classnames';

import { FlexColumn } from '../containers/Flex';
import { noop } from '../util';
import { SCHEMES } from './schemes';
import { createNavItems } from './createNavItems';

//export const DEFAULT_THEME = Object.freeze({ colors: { selection: '#f4f4f4', text: '#3a5266', highlight: '#c0392b' } });


/**
 * Side Bar Navigation component
 */
export class SideNav extends React.Component {

    static propTypes = {
        children: PropTypes.node,
        scheme: PropTypes.string,
        selectedId: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        style: PropTypes.object,
        highlightScheme: PropTypes.oneOf(Object.keys(SCHEMES))
    }

    static defaultProps = {
        onClick: noop,
        scheme: 'default',
        style: {},
        highlightScheme: SCHEMES.danger
    }

    onClick = (id) => {
        const { onClick } = this.props;
        onClick(id);
    }

    render() {
        const { children, selectedId, scheme, style, highlightScheme } = this.props;

        const containerClass = cx({
            'rui-snav-clight': scheme === 'default',
            'rui-snav-cdark': scheme !== 'default'
        });
        /* console.log('selectedId ', highlightScheme, selectedId); */
        return (
            <FlexColumn className={containerClass} style={{width: '100%', height: '100%', ...style}}>
                <ul className={'rui-snav'} >
                    {createNavItems({ children, onClick: this.onClick, selectedId, scheme, highlightScheme })}
                </ul>
            </FlexColumn>
        );
    }
}
