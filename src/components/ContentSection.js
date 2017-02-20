import React from 'react';
import { ScrollView } from 'react-native';

import styles from '../styles';

import QuestionPostBox from './QuestionPostBox';
import ContentItem from './ContentItem';

const ContentSection = () => (
  <ScrollView style={styles.contentSection}>
    <QuestionPostBox />
    { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <ContentItem key={item} />) }
  </ScrollView>
);

export default ContentSection;
