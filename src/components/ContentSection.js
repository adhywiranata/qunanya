import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../styles';

const ContentSection = () => (
  <ScrollView style={styles.contentSection}>
    <View style={styles.contentItem}>
      <Text>sample item</Text>
    </View>
    <View style={styles.contentItem}>
      <Text>sample item</Text>
    </View>
  </ScrollView>
);

export default ContentSection;
