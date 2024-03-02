import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <LinearGradient
      colors={['#1E1E1E', '#1E1E1E']} // Set the gradient color to ash
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.tabItem, state.index === 0 && styles.activeTab]}
        >
          <Ionicons name="home-outline" size={24} color={state.index === 0 ? '#FFFFFF' : '#33B1FF'} />
          <Text style={[styles.tabText, state.index === 0 && styles.activeTabText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Products')}
          style={[styles.tabItem, state.index === 1 && styles.activeTab]}
        >
          <Ionicons name="pricetags-outline" size={24} color={state.index === 1 ? '#FFFFFF' : '#33B1FF'} />
          <Text style={[styles.tabText, state.index === 1 && styles.activeTabText]}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chatbot')}
          style={[styles.tabItem, state.index === 2 && styles.activeTab]}
        >
         <MaterialCommunityIcons name="robot-happy-outline" size={24} color={state.index === 2 ? '#FFFFFF' : '#33B1FF'} />
          <Text style={[styles.tabText, state.index === 2 && styles.activeTabText]}>Ssup</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderBottomWidth: 0, // Remove the bottom border
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    color: '#33B1FF',
    marginTop: 5,
  },
  activeTab: {
    backgroundColor: '#1E1E1E', // Change the background color when active
  },
  activeTabText: {
    color: '#FFFFFF', // Change the text color when active
  },
});

export default NavigationBar;
