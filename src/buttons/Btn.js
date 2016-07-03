import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './Btn.css';
import { mergeStyles as mstyles, ternStyle as tstyle, overrideStyles as ostyles } from 'reactor-ui/util/mergeStyles';

export const DEFAULT_THEME = {  color: '#FFF', background: '#26a69a', hover: '#2bbbad' };

export const IconText = ({text, icon}) => (
    <span>
        {icon ? <span className={icon}/> : null }
        {text ? <span>{text}</span> : null }
    </span>
);

export class Btn extends React.Component {

    static propTypes = {
        disabled: PropTypes.bool,
        style: PropTypes.object,
        icon: PropTypes.string,
        text: PropTypes.string,
        theme: PropTypes.object,
        scheme: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.node,
        value: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    onMouseOver = () => {
        this.setState( { hovered: true });
    }

    onMouseOut = () => {
        this.setState( { hovered: false });
    }

    dispatchOnClick = (e) => {
        if ( this.props.onClick ) {
            this.props.onClick(e, this.props.value);
        }
    }

    render() {
        const { children, scheme = 'normal', style, icon, text, theme = {}, ...rest } = this.props;
        const themeToUse = ostyles(DEFAULT_THEME, theme);
        const { hovered } = this.state;

        const mergeStyle = mstyles(
            {color: themeToUse.color, background: themeToUse.background },
            tstyle(hovered, { background: themeToUse.hover }),
            style
        );

        const classNames = cx(
            styles['btn'],
            styles[`btn-${scheme}`]
        );
        return (<button {...rest} onClick={this.dispatchOnClick} ref='btn' className={classNames}
            style={mergeStyle} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            { children ? children : <IconText icon={icon} text={text} /> }
        </button>);
    }

}
