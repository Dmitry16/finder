import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import App from './App';

describe('<App />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders determined layout', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders Dropdown component', () => {
    expect(wrapper.find('Dropdown').length).toEqual(1);
  });
  it('Dropdown component is been passed passedValue prop', () => {
    expect('passedValue' in wrapper.find('Dropdown').props()).toBe(true);
  });
  it('the passedValue prop is a string', () => {
    expect(typeof wrapper.find('Dropdown').prop('passedValue')).toBe('string');
  });
  it('Dropdown component is been passed clickHandler prop', () => {
    expect('clickHandler' in wrapper.find('Dropdown').props()).toBe(true);
  });
  it('the clickHandler prop is a function', () => {
    expect(wrapper.find('Dropdown').prop('clickHandler')).toBeInstanceOf(Function);
  });
  it('Dropdown component is been passed listBlockHeight prop', () => {
    expect('listBlockHeight' in wrapper.find('Dropdown').props()).toBe(true);
  });
  it('the listBlockHeight prop is a number', () => {
    expect(typeof wrapper.find('Dropdown').prop('listBlockHeight')).toBe('number');
  });
});

