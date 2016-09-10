import React, { PropTypes } from 'react';
import cx from 'classnames';

export const DEFAULT_THEME = {  color: '#FFF', background: '#26a69a', hover: '#2bbbad' };


export const IconText = ({text, icon}) => (
    <span>
        {icon ? <span className={icon}/> : null }
        {text ? <span>{text}</span> : null }
    </span>
);

IconText.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
};

const SCHEMES = {
    default: 'default',
    primary: 'primary',
    success: 'success',
    warning: 'warning',
    danger: 'danger'
};

const isScheme = (schemeToCompare, propsScheme, disabled ) => propsScheme === schemeToCompare && !Boolean(disabled);

const createClassnames = (props) => {

    const { scheme, disabled } = props;

    return cx(
        'rui-btn',
        {
            'rui-btn-default': isScheme(SCHEMES.default, scheme, disabled),
            'rui-btn-primary': isScheme(SCHEMES.primary, scheme, disabled),
            'rui-btn-success': isScheme(SCHEMES.success, scheme, disabled),
            'rui-btn-warning': isScheme(SCHEMES.warning, scheme, disabled ),
            'rui-btn-danger': isScheme(SCHEMES.danger, scheme, disabled)
        }
    );
};

export class Btn extends React.Component {

    static propTypes = {
        disabled: PropTypes.bool,
        style: PropTypes.object,
        icon: PropTypes.string,
        text: PropTypes.string,
        scheme: PropTypes.string,
        onClick: PropTypes.func,
        children: PropTypes.node,
        value: PropTypes.string
    }

    static defaultProps = {
        scheme: SCHEMES.default,
        disabled: Boolean(false)
    }

    constructor(props) {
        super(props);
        this.state = { hovered: false };
    }

    dispatchOnClick = (e) => {
        if ( this.props.onClick ) {
            this.props.onClick(e, this.props.value);
        }
    }

    render() {
        const { props } = this;
        const { children, disabled, scheme,   //eslint-disable-line no-unused-vars
            style, icon, text, ...rest } = props;

        const classNames = createClassnames(props);

        return (
            <button {...rest} disabled={disabled} onClick={this.dispatchOnClick}
                        ref='btn' className={classNames}
                style={style} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
            { children ? children : <IconText icon={icon} text={text} /> }
        </button>);
    }

}
