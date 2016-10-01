

import React, { PropTypes, Component } from 'react';

import defaultCtxTypes from './contextTypes';

export class Input extends Component {

    static contextTypes = defaultCtxTypes;

    static propTypes = {
        name: PropTypes.string.isRequired,
        path: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object
    }

    static defaultProps = {
        model: {}
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
        const { name, model, value, style } = props;
        const contextModel = this.context['_ruiform_model_'];
        const modelToUse = contextModel ? contextModel : model;

        const valueToUse = value || modelToUse[name];
        return (
            <input className='form-field' style={style} onChange={this.onChange} name={name} value={valueToUse || ''}/>
        );
    }
}

export default Input;