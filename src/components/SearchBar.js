import React from 'react';
import { View, TextInput } from 'react-native';

import styles from '../styles';

const SearchBar = () => (
  <View style={styles.searchBar}>
    <TextInput
      style={styles.searchInput}
      placeholder="Ask Qunanya..."
      placeholderTextColor="rgba(255, 255, 255, 0.2)"
    />
  </View>
);

export default SearchBar;
