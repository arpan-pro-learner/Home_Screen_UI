import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const TextWithSearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>Hello Arpan</Text>
        <Text style={styles.text}>Questions about any purchases?</Text>
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search..." style={styles.searchBar} />
          <Entypo name="mic" size={24} color="black" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1E1E1E', // Black gray full background
    marginTop:-60,
  },
  rectangle: {
    backgroundColor: 'rgba( 255, 255, 255, 0.35 )',
    boxshadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    borderRadius: 30,
    padding: 20,
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
   
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, .45)', // Semi-transparent white background
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20, // Adjust as needed
  },
  searchBar: {
    flex: 1,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default TextWithSearchBar;
