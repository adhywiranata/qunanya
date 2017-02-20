import React from 'react';
import { View, TextInput } from 'react-native';

import styles from '../styles';

const QuestionPostBox = () => (
  <View style={styles.questionPostBox}>
    <TextInput
      style={styles.questionPostInput}
      placeholder="What's your question?"
    />
  </View>
);

export default QuestionPostBox;
