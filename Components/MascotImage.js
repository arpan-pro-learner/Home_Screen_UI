import React from "react";
import { Image, StyleSheet } from "react-native";

import MascotBro from "../assets/MascotBro.png";

const MascotImage = () => {
  return <Image source={MascotBro} style={styles.image} />;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',  // Align the image in the center of its container
    marginBottom: 100,     // Margin to move the image below the search bar text
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});


export default MascotImage;
