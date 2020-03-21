import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import { shallow } from 'enzyme'
import CheckProptypes from 'check-prop-types'

import rootReducer from '../reducers'
import { middlewares } from '../store'

export const setupComp = (Component, props = {}) => shallow(<Component {...props} />);

export const findComponent = (wrapper, attr) => wrapper.find(attr);

export const checkPropsHelper = (Component, expectedProps) => {
    const check = CheckProptypes(Component.propTypes, expectedProps, Component.name);
    return check;
}

export const testStore = (initialState) => {
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(rootReducer, initialState);
}