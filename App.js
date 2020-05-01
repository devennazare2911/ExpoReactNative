import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import {Icon }from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { PricingCard } from 'react-native-elements';

import { Header } from 'react'




export default function App() {
  return (
  
    <View style={styles.container}>
   
      <Text>Welcome To Our Booking App </Text>


     
    <PricingCard
    color="#4f9deb"
    title="Sale"
    price="$69"
    info={['1 User', 'Basic Support', 'All Core Features']}
    button={{ title: 'GET STARTED',icon: 'flight-takeoff'  }}
    />

<Button
  
  title="Book Tickets"
  
/>

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
