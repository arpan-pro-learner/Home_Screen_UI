import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import profiledp from '../assets/Profile_Picture/profiledp.png'

const CircularProfileImage = () => {
  return (
    <View style={styles.container}>
      <Image source={ profiledp } style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CircularProfileImage;
