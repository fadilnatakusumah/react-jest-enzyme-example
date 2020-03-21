import React from 'react';

import { setupComp, findComponent, checkPropsHelper } from '../../utils'
import SharedButton from './SharedButton'

describe('SharedButton Component', () => {

  describe('Checking Proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        buttonText: "Test buttonText",
        emitEvent: () => { }
      }

      const checkProps = checkPropsHelper(SharedButton, expectedProps);
      expect(checkProps).toBe(undefined);
    });
  })

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Test button text",
        emitEvent: () => { }
      }

      wrapper = setupComp(SharedButton, props);
    })

    it('should render a button', () => {
      const comp = findComponent(wrapper, `[data-test='shared-button']`);
      expect(comp.length).toBe(1);
    })
  })


})
