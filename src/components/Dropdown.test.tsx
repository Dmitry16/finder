import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<Dropdown
      passedValue={''}
      clickHandler={() => {}}
      listBlockHeight={5}
    />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown 
      passedValue={''}
      clickHandler={() => {}}
      listBlockHeight={5}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders determined layout', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('has an input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });
  it('the input has onChange property', () => {
    expect('onChange' in wrapper.find('input').props()).toBe(true);
  });
  it('the onChange property is a function', () => {
    expect(wrapper.find('input').prop('onChange')).toBeInstanceOf(Function);
  });
  // wrapper = shallow(<Dropdown
  //   passedValue={''}
  //   clickHandler={() => {}}
  //   listBlockHeight={5}
  // />);
  // console.log(wrapper.debug());
});

