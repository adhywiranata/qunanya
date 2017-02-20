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
      <Text style={styles.navtext}>Read</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.navtext}>Answer</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.navtext}>Notification</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.navbutton}>
      <Text style={styles.navtext}>You</Text>
    </TouchableHighlight>
  </View>
);

export default Navbar;
