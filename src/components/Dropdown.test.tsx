import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  let wrapper: any;
  const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, 'useState')
  // useStateSpy.mockImplementation((init) => [init, setState]);

  wrapper = shallow(<Dropdown initialValue={'zz'} findMatch={() => {}} />);

  beforeEach(() => {
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown initialValue={'zz'} findMatch={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it('renders determined layout', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

});

