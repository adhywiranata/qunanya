import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Index from '../index.android';

it('renders correctly', () => {
  const tree = shallow(<Index />);
  expect(tree).toBeDefined();
});
