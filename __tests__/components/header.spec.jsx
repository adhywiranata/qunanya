import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

describe('<Header>', () => {
  it('renders correctly', () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });
});
