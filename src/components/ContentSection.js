import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import styles from '../styles';

import ContentItem from './ContentItem';

const ContentSection = () => (
  <ScrollView style={styles.contentSection}>
    { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ContentItem key={item} />) }
  </ScrollView>
);

export default ContentSection;
