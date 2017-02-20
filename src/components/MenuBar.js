import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

const MenuBar = () => (
  <View style={styles.menuBar}>
    <TouchableHighlight style={styles.upperMenu}>
      <Text style={styles.upperMenuTextActive}>Feed</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.upperMenu}>
      <Text style={styles.upperMenuText}>Bookmark</Text>
    </TouchableHighlight>
  </View>
);

export default MenuBar;
