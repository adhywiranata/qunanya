import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../src/components/Header';

describe('<Header>', () => {
  it('renders correctly', () => {
    const header = shallow(<Header />);
    expect(header).toHaveLength(1);
  });

  it('renders <SearchBar> as child', () => {
    const header = shallow(<Header />);
    expect(header.find('SearchBar')).toHaveLength(1);
  });

  it('renders <menuBar> as child', () => {
    const header = shallow(<Header />);
    expect(header.find('MenuBar')).toHaveLength(1);
  });
});
