import CheckProptypes from 'check-prop-types';

import { setupComp, findComponent, checkPropsHelper } from '../../utils';
import PostItem from './PostItem';

describe('PostItem Component', () => {
  describe('Checking proptypes', () => {
    it('should not throw warning', () => {
      const expectedProps = {
        title: "Test title",
        desc: "Test decription",
      }

      const checkProps = checkPropsHelper(PostItem, expectedProps)
      expect(checkProps).toBe(undefined);
    });
  });

  describe('renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "Test decription",
      }
      wrapper = setupComp(PostItem, props);
    });

    it('should render without error', () => {
      const comp = findComponent(wrapper, `[data-test="post-item-component"]`)
      expect(comp.length).toBe(1);
    });

    it('should render the title', () => {
      const comp = findComponent(wrapper, `[data-test="post-item-title"]`)
      expect(comp.length).toBe(1);
    })

    it('should render the description', () => {
      const comp = findComponent(wrapper, `[data-test="post-item-description"]`)
      expect(comp.length).toBe(1);
    });
  })

  describe('should not renders', () => {
    const wrapper = setupComp(PostItem);
    const comp = findComponent(wrapper, `[data-test="post-item-component"]`)
    expect(comp.length).toBe(0)
  })

})
