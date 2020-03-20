import React from 'react';
import { shallow } from 'enzyme';

import { setupComp } from '../../utils';
import Header from './Header';

describe('Header component', () => {
  let component;
  beforeEach(()=>{
    component = setupComp(Header);
  })

  it('Should render without errors', () => {
    const expectedComponent = component.find(`[data-test='header-component']`);
    expect(expectedComponent.length).toBe(1);
  });
  
  it('Should render without errors', () => {
    const expectedComponent = component.find(`[data-test='image-component']`);
    expect(expectedComponent.length).toBe(1);
  });
})
