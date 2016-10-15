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
            this.subscribers = [];
            //create store shape
            const { getState, dispatch, subscribe } = this;
            this.bindedSetState = (stateToSet) => {
                this.setState(stateToSet);
            };
            this.store = { getState, dispatch, subscribe };
            window.store = this.store;
        }

        getState = () => {
            return this.state;
        }

        subscribe = (f) => {
            this.subscribers.push(f);
        }

        componentDidUpdate() {
            this.subscribers.reduce( (next, f) => {
                f();
            }, {});
        }

        dispatch = (fsa) => {
            const { dispatch, bindedSetState, getState } = this;
            dispatchAction({dispatch, setState: bindedSetState, getState, reducer}, fsa);
        }

        render() {
            return <Comp {...this.state} store={this.store} />;
        }
    };
};

export const bindActionCreators = (creators) => (dispatch) => {
    return Object.keys( creators ).reduce( (actions, key) => {
        actions[key] = (...args) => {
            dispatch(creators[key](...args));
        };
        return actions;
    }, {});
};

export const combineReducers = (reducersMap) => {

    return (state, action) => {
        const keys = Object.keys(reducersMap);

        const resultingState = keys.reduce( (acc, reducerKey) => {
            const stateToPass = acc[reducerKey];
            const actualReducer = reducersMap[reducerKey];

            return { ...acc, [reducerKey]: actualReducer(stateToPass, action) };

        }, state);

        return resultingState;
    };
};

const dispatchAction = ({dispatch, setState, getState, reducer}, fsa) => {
    if ( typeof fsa === 'function' ) {
        fsa( dispatch, getState );
    } else {
        const { payload, type } = fsa;
        let thennable = null;

        if ( fsa && fsa.then ) {
            thennable = fsa.then;
        } else if ( payload && payload.then ) {
            //payload is a promise
            thennable = payload;
        }

        if ( thennable ) {
            thennable.then( resolvedPayload => setState( (prevState) => reducer(prevState, { type, payload: resolvedPayload} )));
        } else {
            setState( (prevState) => reducer(prevState, fsa) );
        }

    }
};


export default withStore;
