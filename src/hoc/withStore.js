import React, { Component } from 'react';

/**
 * A poor mans store
 */
 //withStore :: ( Obj -> Obj -> Obj ) -> Obj  -> (Component -> Component)
export const withStore = (reducer, initialState) => Comp => {

    return class extends Component {

        constructor(props) {
            super(props);
            this.state = initialState;

            //create store shape
            const getState = this.getState;
            const dispatch = this.dispatch;

            this.store = { getState, dispatch };
        }

        getState = () => {
            return this.state;
        }

        componentDidUpdate() {
            //we can call notification here
        }

        dispatch = (fsa) => {
            const { dispatch, setState, getState } = this;
            dispatchAction({dispatch, setState, getState, reducer}, fsa);
        }

        render() {
            return <Comp {...this.state} store={this.store} />;
        }
    };
};


const dispatchAction = ({dispatch, setState, getState, reducer}, fsa) => {
    if ( typeof fsa === 'function' ) {
        fsa( dispatch, getState );
    } else {
        const { payload, type } = fsa;
        let thennable = null;

        if ( payload && payload.then ) {
            //payload is a promise
            thennable = payload;
        } else if ( fsa.then ) {
            thennable = fsa;
        }

        if ( thennable ) {
            thennable.then( resolvedPayload => this.setState( (prevState) => reducer(prevState, { type, payload: resolvedPayload} )));
        } else {
            setState( (prevState) => reducer(prevState, fsa) );
        }

    }
};


export default withStore;
