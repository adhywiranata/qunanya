import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

const ContentItem = () => (
  <View style={styles.contentItem}>
    <Text>
      Kenapa React lebih populer ketimbang Angular?
    </Text>
    <View>
      <Text>MUKA ORANG</Text>
      <Text>Jimminy Cricket, Software Engineer, Lapakpedia</Text>
      <Text>Written Feb 10. Upvoted by Rudi, Mike, John, and 213 others</Text>
    </View>
    <View>
      <Text>
        Sebenarnya, React tidak bisa dibandingkan apple-to-apple dengan Angular.
        Namun, bla bla bla bla.
        <TouchableHighlight>
          <Text>Read More..</Text>
        </TouchableHighlight>
      </Text>
    </View>
  </View>
);

export default ContentItem;
