import React from 'react'
import { shallow } from 'enzyme'

export const setupComp = (props = {}, Component) => {
    const component = shallow(<Component {...props}/>);
    return component
}