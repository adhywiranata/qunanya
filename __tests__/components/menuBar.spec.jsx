import React from 'react';
import { shallow } from 'enzyme';

import MenuBar from '../../src/components/MenuBar';

describe('<MenuBar>', () => {
  it('renders correctly', () => {
    const menuBar = shallow(<MenuBar />);
    expect(menuBar).toHaveLength(1);
  });
});
