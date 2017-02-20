import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const MenuBar = () => (
  <View>
    <TouchableHighlight>
      <Text>Feed</Text>
    </TouchableHighlight>
    <TouchableHighlight>
      <Text>Bookmark</Text>
    </TouchableHighlight>
  </View>
);

export default MenuBar;
