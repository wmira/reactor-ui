

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
        onChange: PropTypes.func,
        options: PropTypes.array,
        value: PropTypes.string,
        model: PropTypes.object
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
            try {
                contextListener(changeData);
            } catch (ex ) {
                //end
            }
        }
        if ( onChange ) {
            onChange(changeData);
        }
    }

    determineValueToUse = () => {
        const { name, model = {}, value } = this.props;
        const contextModel = this.context['_ruiform_model_'];
        const modelToUse = contextModel ? contextModel : model;
        return value || modelToUse[name] || '';
    }

    value = () => {
        const value = this.determineValueToUse();
        const { options = [] } = this.props;

        return options.filter( (option) => option.value === value)[0];
    }

    render() {
        const { props } = this;
        const { name, model = {}, value, children, options: selections = [], readOnly } = props;
        const options = selections.map(mapOption);
        const contextModel = this.context['_ruiform_model_'];
        const modelToUse = contextModel ? contextModel : model;
        const valueToUse = value || modelToUse[name] || '';

        return (
            <select readOnly={false} className={'form-field'} onChange={this.onChange} name={name} value={valueToUse}>
                { children ? children : options }
            </select>
        );
    }
}

export default Select;