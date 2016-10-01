

import React, { PropTypes, Component } from 'react';

import defaultCtxTypes from './contextTypes';

const mapOption =  (option) => {

    const { text, value } = option;

    return <option key={value} value={value || text}>{text || value}</option>;
};

export class Select extends Component {

    static contextTypes = defaultCtxTypes;

    static propTypes = {
        name: PropTypes.string.isRequired,
        path: PropTypes.string,
        children: PropTypes.node,
        onChange: PropTypes.func
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
        const { name, model = {}, value, children, options: selections = [] } = props;
        const options = selections.map(mapOption);
        const contextModel = this.context['_ruiform_model_'];
        const modelToUse = contextModel ? contextModel : model;
        const valueToUse = value || modelToUse[name] || '';
        return (
            <select className={'form-field'} onChange={this.onChange} name={name} value={valueToUse}>
                { children ? children : options }
            </select>
        );
    }
}

export default Select;