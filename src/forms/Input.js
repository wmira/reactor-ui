

import React, { PropTypes, Component } from 'react';

import defaultCtxTypes from './contextTypes';

export class Input extends Component {

    static contextTypes = defaultCtxTypes;

    static propTypes = {
        name: PropTypes.string.isRequired,
        path: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object,
        type: PropTypes.string,
        readOnly: PropTypes.bool,
        focusOnRender: PropTypes.bool,
        onBlur: PropTypes.func,
        onKeyPress: PropTypes.func,
        type: PropTypes.string,
        onKeyUp: PropTypes.func
    }

    static defaultProps = {
        model: {},
        type: 'text',
        readOnly: false,
        focusOnRender: false,
    }

    componentDidMount() {
        if ( this.props.focusOnRender ) {
            setTimeout( () => {
                this.refs.input.focus();
            }, 0);
        }
    }

    onChange = (e) => {

        const contextListener = this.context['_ruiform_changeListener_'];
        const { onChange, name } = this.props;
        const { target } = e;

        const changeData = { name, value: target.value };

        if ( contextListener ) {
            contextListener(changeData);
        }
        if ( onChange ) {
            onChange(changeData);
        }
    }

    render() {
        const { props } = this;
        const { name, onBlur, model, onKeyUp, onKeyPress, value, style, type, readOnly } = props;
        const contextModel = this.context['_ruiform_model_'];
        const modelToUse = contextModel ? contextModel : model;

        const valueToUse = value || modelToUse[name];

        return (
            <input onKeyUp={onKeyUp} onKeyPress={onKeyPress} onBlur={onBlur} ref={'input'}
                readOnly={readOnly} type={type} className='form-field'
                    style={style} onChange={this.onChange} name={name} value={valueToUse || ''}/>
        );
    }
}

export default Input;