import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../../src/components/SearchBar';

describe('<SearchBar>', () => {
  it('renders correctly', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar).toHaveLength(1);
  });

  it('renders the search text input', () => {
    const searchBar = shallow(<SearchBar />);
    expect(searchBar.find('TextInput')).toHaveLength(1);
  });
});
