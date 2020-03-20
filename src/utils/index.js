import React from 'react'
import { shallow } from 'enzyme'
import CheckProptypes from 'check-prop-types'

export const setupComp = (Component, props = {}) => shallow(<Component {...props}/>);

export const findComponent = (wrapper, attr) =>  wrapper.find(attr);

export const checkPropsHelper = (Component, expectedProps) => {
    const check = CheckProptypes(Component.propTypes, expectedProps, Component.name);
    return check;
}