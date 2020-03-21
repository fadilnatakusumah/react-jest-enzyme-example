import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import { setupComp, findComponent, testStore } from './utils';

const setupHelper = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = setupComp(App, { store }).childAt(0).dive();
  return wrapper
}

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: "Test title 1", body: "Test body 1" },
        { title: "Test title 2", body: "Test body 2" },
        { title: "Test title 3", body: "Test body 3" },
      ],
    }
    wrapper = setupHelper(initialState);
  })

  test('should render without errors', () => {
    // const { getByText } = render(<App />);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    // ======================
    const comp = findComponent(wrapper, `[data-test='app-component']`);
    expect(comp.length).toBe(1);
    // console.log("comp", comp)
    // expect(comp.length).toBe(1);
  });
})

