import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../src/components/Navbar';

describe('<Navbar>', () => {
  it('renders correctly', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar).toHaveLength(1);
  });

  it('renders 4 menus', () => {
    const navbar = shallow(<Navbar />);
    expect(navbar.find('TouchableHighlight')).toHaveLength(4);
  });
});
