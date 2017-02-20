import React from 'react';
import { View } from 'react-native';

import styles from '../styles';

import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

const Header = () => (
  <View style={styles.header}>
    <SearchBar />
    <MenuBar />
  </View>
);

export default Header;
