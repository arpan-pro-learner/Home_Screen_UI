import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const SummaryComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Summary of the online purchases</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.squareContainer}>
          {/* First Square */}
          <LinearGradient
            colors={['#5A58E1', '#4F8FE1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.square}
          >
            <AntDesign name="shoppingcart" size={35} color="white" />
            <Text style={styles.squareText}>24 orders this month</Text>
          </LinearGradient>
          {/* Second Square */}
          <LinearGradient
            colors={['#FFA6A6', '#FF4F4F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.square}
          >
            <FontAwesome name="ticket" size={35} color="white" />
            <Text style={styles.squareText}>5 subscriptions this month</Text>
          </LinearGradient>
          {/* Third Square */}
          <LinearGradient
            colors={['#CC8328', '#E1A724']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.square}
          >
            <FontAwesome name="money" size={35} color="white" />
            <Text style={styles.squareText}>₹8939 spending this month</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  square: {
    width: 135,
    height: 136,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    padding:1,
  },
  squareText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'left',
  },
});

export default SummaryComponent;
