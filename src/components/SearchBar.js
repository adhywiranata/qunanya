import React from 'react';
import { View, TextInput } from 'react-native';

import styles from '../styles';

const SearchBar = () => (
  <View style={styles.searchBar}>
    <TextInput style={styles.searchInput} placeholder="teasda" />
  </View>
);

export default SearchBar;
