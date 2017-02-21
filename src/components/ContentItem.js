import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles';

const ContentItem = () => (
  <View style={styles.contentItem}>
    <Text style={styles.contentItemTitle}>
      Kenapa React lebih populer ketimbang Angular?
    </Text>
    <View>
      <Text>MUKA ORANG</Text>
      <Text>Jimminy Cricket, Software Engineer, Lapakpedia</Text>
      <Text style={{ opacity: 0.7, fontSize: 12 }}>
        Written Feb 10. Upvoted by Rudi, Mike, John, and 213 others
      </Text>
    </View>
    <View>
      <Text>
        Sebenarnya, React tidak bisa dibandingkan apple-to-apple dengan Angular.
        Namun, bla bla bla bla.
        <TouchableHighlight
          style={{
            width: 150, height: 30, opacity: 0.5, paddingTop: 16, paddingLeft: 5 }}
        >
          <Text>Read More..</Text>
        </TouchableHighlight>
      </Text>
    </View>
  </View>
);

export default ContentItem;
