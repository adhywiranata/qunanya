import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from '../styles';

const ContentItem = () => (
  <View style={styles.contentItem}>
    <Text style={styles.contentItemTitle}>
      Kenapa React lebih populer ketimbang Angular?
    </Text>
    <View style={styles.contentItemUserGrid}>
      <Image
        source={{ uri: 'https://www.wrnsstudio.com/system/people/83/grid_sm_grid_image.jpg' }}
        style={styles.contentItemUserPhoto}
      />
      <View>
        <Text>Jimminy Cricket, </Text>
        <Text style={{ opacity: 0.8, fontSize: 12 }}>
          Software Engineer at Lapakpedia
        </Text>
      </View>
    </View>
    <View style={styles.contentItemDescription}>
      <Text>
        Sebenarnya, React tidak bisa dibandingkan apple-to-apple dengan Angular.
        Namun, bla bla bla bla...
      </Text>
      <TouchableHighlight
        style={{
          width: 150, height: 30, opacity: 0.5, paddingTop: 5 }}
      >
        <Text>Read More..</Text>
      </TouchableHighlight>
    </View>
    <View style={styles.contentItemActionGrid}>
      <TouchableHighlight style={styles.contentItemActionUpvoteButton}>
        <Text style={styles.upvoteActionText}>Upvote | 20</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.contentItemActionButton}>
        <Text style={styles.linkActionText}>Downvote</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.contentItemActionButton}>
        <Text style={styles.linkActionText}>Comments 5+</Text>
      </TouchableHighlight>
    </View>
  </View>
);

export default ContentItem;
