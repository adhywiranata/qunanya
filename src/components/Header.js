import React from 'react';
import { View } from 'react-native';

import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

const Header = () => (
  <View>
    <SearchBar />
    <MenuBar />
  </View>
);

export default Header;
