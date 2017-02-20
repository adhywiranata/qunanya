import React from 'react';
import { shallow } from 'enzyme';

import MenuBar from '../../src/components/MenuBar';

describe('<MenuBar>', () => {
  it('renders correctly', () => {
    const menuBar = shallow(<MenuBar />);
    expect(menuBar).toHaveLength(1);
  });

  it('renders TouchableHighlight/Buttons at least 1', () => {
    const menuBar = shallow(<MenuBar />);
    expect(menuBar.find('TouchableHighlight').length).toBeGreaterThanOrEqual(1);
  });
});
