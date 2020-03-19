import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const wrapper = shallow(<App/>)
  const comp = wrapper.find('.App');
  expect(comp.length).toBe(1);
});
