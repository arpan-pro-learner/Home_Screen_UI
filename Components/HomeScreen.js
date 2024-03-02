import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import CircularProfileImage from './CircularProfileImage';
import TextWithSearchBar from './TextWithSearchBar';
import MascotImage from './MascotImage';
import SummaryComponent from './SummaryComponent';
import YourOrdersSection from './YourOrdersSection'; // Import YourOrdersSection

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <CircularProfileImage />
      </View>
      <View style={styles.textWithSearchBar}>
        <TextWithSearchBar />
      </View>
      <View style={styles.mascotImage}>
        <MascotImage />
      </View>
      <View style={styles.summaryContainer}>
        <SummaryComponent />
      </View>
      <View style={styles.yourOrdersContainer}>
        <YourOrdersSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E', // Black gray full background
  },
  profileSection: {
    marginTop: 40,
    marginLeft: 20,
  },
  textWithSearchBar: {
    marginHorizontal: 20,
    marginTop: 100,
  },
  mascotImage: {
    alignItems: 'center',
    marginBottom: 150,
    marginTop: -240,
    zIndex: -1,
  },
  summaryContainer: {
    marginTop: 20,
  },
  yourOrdersContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
