import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../../src/components/SearchBar';

describe('<SearchBar>', () => {
  it('renders correctly', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar).toBeDefined();
  });
});
