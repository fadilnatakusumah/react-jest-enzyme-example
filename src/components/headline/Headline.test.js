import CheckProptypes from 'check-prop-types';

import { setupComp, findComponent, checkPropsHelper } from '../../utils';
import Headline from './Headline';

describe('Headline component', () => {
  describe('check proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        title: "Test title",
        desc: "Test description",
        dummyData: [{
          fName: "Test fName",
          lName: "Test lName",
          email: "Test Email",
          age: 23,
          onlineStatus: true
        }]
      };
      const checkProps = checkPropsHelper(Headline, expectedProps);
      expect(checkProps).toBe(undefined);
    })
  })

  describe('does have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "Test description",
      }
      wrapper = setupComp(Headline, props)
    });

    it('should render without errors', () => {
      const comp = findComponent(wrapper, `[data-test='headline-component']`);
      expect(comp.length).toBe(1);
    });

    it('should render <h1/>', () => {
      const comp = findComponent(wrapper, `[data-test='post-title']`);
      expect(comp.length).toBe(1);
    });

    it('should render <p/>', () => {
      const comp = findComponent(wrapper, `[data-test='post-desc']`);
      expect(comp.length).toBe(1);
    });
  })


  describe('does not have props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setupComp(Headline);
    });

    it('should not render', () => {
      const comp = findComponent(wrapper, `[data-test='headline-component']`);
      expect(comp.length).toBe(0);
    });
  })
})
