import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import styles from '../styles';

const Navbar = () => (
  <View style={styles.navbar}>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.selectedNavText}>Read</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.navText}>Answer</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.navText}>Notifications</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.navText}>You</Text>
    </TouchableHighlight>
  </View>
);

export default Navbar;
