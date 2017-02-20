import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header';

const App = () => (
  <View style={styles.app}>
    <Header />
    <ContentSection />
    <Navbar />
  </View>
);

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'vertical',
  }
});

export default App;
