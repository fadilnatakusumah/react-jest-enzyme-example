import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { setupComp, findComponent } from './utils';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // ======================
  // const wrapper = setupComp(App)
  // const comp = findComponent(wrapper, `.App`);
  // console.log("comp", comp)
  // expect(comp.length).toBe(1);
});
