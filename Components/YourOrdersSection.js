import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const products = [
  { name: 'Marshall Major IV', deliveryDate: '23 Jan 2024', status: 'Ready to Deliver', company: 'Marshall' },
  { name: 'Deep Olive March Tee', deliveryDate: '23 Jan 2024', status: 'Delivered', company: 'XYZ' },
  { name: 'Chips Potato', deliveryDate: '20 Jan 2024', status: 'Ready to Deliver', company: 'XYZ Food Corps' },
  { name: '2 kg Onion [Fresh]', deliveryDate: '25 Jan 2024', status: 'Delivered', company: 'XYZ' },
  // Add more products as needed
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Ready to Deliver':
      return { style: styles.deliveryStatusReady, text: 'Status: Ready to Deliver' };
    case 'Delivered':
      return { style: styles.deliveryStatusDelivered, text: 'Status: Delivered' };
    default:
      return { style: styles.deliveryStatusDefault, text: `Status: ${status}` };
  }
};

const YourOrdersSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Orders</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.productList}>
        {/* Product List Items */}
        {products.map((product, index) => (
          <View style={styles.productItem} key={index}>
            {/* Product Image */}
            <View style={styles.productImage}></View>
            {/* Product Details */}
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.deliveryDate}>Delivery Date: {product.deliveryDate}</Text>
              <Text style={getStatusStyle(product.status).style}>{getStatusStyle(product.status).text}</Text>
              <Text style={styles.companyName}>Company: {product.company}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {/* See All Button with Linear Gradient Background */}
      <TouchableOpacity style={styles.seeAllButton}>
        <LinearGradient
          colors={['#162E7B', '#2AA3F1', '#2AF1E5']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
        >
          <Text style={styles.seeAllButtonText}>See All</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewAllButton: {
    backgroundColor: '#5A58E1',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  viewAllButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productList: {
    marginTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    backgroundColor: '#141B31',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  deliveryDate: {
    color: '#FFFFFF',
    marginBottom: 5,
  },
  deliveryStatusReady: {
    color: 'gray',
    marginBottom: 5,
  },
  deliveryStatusDelivered: {
    color: 'green',
    marginBottom: 5,
  },
  deliveryStatusDefault: {
    color: 'black',
    marginBottom: 5,
  },
  companyName: {
    color: '#FFFFFF',
  },
  seeAllButton: {
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  seeAllButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign:'center',
  },
  gradientBackground: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width:'100%',
  },
});

export default YourOrdersSection;
