import React from 'react';
import { View, TouchableHighlight } from 'react-native';

const Navbar = () => (
  <View>
    <TouchableHighlight>Read</TouchableHighlight>
    <TouchableHighlight>Answer</TouchableHighlight>
    <TouchableHighlight>Notification</TouchableHighlight>
    <TouchableHighlight>You</TouchableHighlight>
  </View>
);

export default Navbar;
