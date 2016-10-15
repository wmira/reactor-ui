import React, { Component, PropTypes } from 'react';

export default (FormComponent) => {

    return class extends Component {
        static propTypes = {
            model: PropTypes.object,
            onChange: PropTypes.func,
            reset: PropTypes.func,
            submit: PropTypes.func
        }

        static childContextTypes = {
            _ruiform_model_: PropTypes.object,
            _ruiform_changeListener_: PropTypes.func
        }

        constructor(props) {
            super(props);
        }

        getChildContext() {
            return {
                _ruiform_model_: this.props.model,
                _ruiform_changeListener_: this.onFormFieldChange
            };
        }

        onFormFieldChange = ({ name, value }) => {
            if ( this.props.onChange ) {
                this.props.onChange({name, value});
            }
        }

        render() {

            return (
               <FormComponent {...this.props} submit={this.props.submit} reset={this.props.reset} model={this.props.model} />
            );
        }
    };
};

