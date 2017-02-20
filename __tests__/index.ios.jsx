import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Index from '../index.ios';

describe('React renderer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toBeDefined();
  });

  it('renders <App />', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find('<App />')).toHaveLength(1);
  });
});
