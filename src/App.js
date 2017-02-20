import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles';

import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Navbar from './components/Navbar';

const App = () => (
  <View style={styles.app}>
    <Header />
    <ContentSection />
    <Navbar />
  </View>
);

export default App;
