import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import App from './App';

describe('<App />', () => {
  let wrapper: any;
  const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState')
  // useStateSpy.mockImplementation((init) => [init, setState]);

  wrapper = shallow(<App />);
  // beforeEach(() => {
  //   wrapper = shallow(<App />);
  // });
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders determined layout', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders Dropdown component', () => {
    expect(wrapper.find('Dropdown').length).toEqual(1);
  });
  it('Dropdown component is been passed 2 props', () => {
    expect('initialValue' in wrapper.find('Dropdown').props()).toBe(true);
  });
  it('Dropdown component is been passed initialValue prop', () => {
    expect('initialValue' in wrapper.find('Dropdown').props()).toBe(true);
  });
  it('Dropdown component is been passed findMatch prop', () => {
    expect('findMatch' in wrapper.find('Dropdown').props()).toBe(true);
  });
  // console.log(wrapper.debug());
});

