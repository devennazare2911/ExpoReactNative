import React from 'react';
import { StyleSheet, Text,Alert,View } from 'react-native';
import { Button } from 'react-native-elements';
import {Icon }from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { PricingCard } from 'react-native-elements';

import { Input } from 'react-native-elements';


function HomeScreen() {
return(
  console.log("Hellow World")
       );
} //DO IN TERMINAL NAAAA  stop 
export default function App() {
 
  return (
  
    <View style={styles.container}>
   
      <Text  >Welcome To Our Booking App... </Text>

      <Input
  placeholder='Enter Your Email '
  leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
  style = {{ padding:'10',flex:4}} 
/>
<Input
  placeholder='Enter Your Password'
  secureTextEntry={true} 
  leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
  
/>
<Button
  
  title="Login "
  onPress={() => Alert.alert('Invalid Credentials')}//pushing
/>
    <PricingCard
    color="#4f9deb"
    title="Sale"
    price="$200"
    info={['1 User', 'Basic Support', 'All Core Features..']}
    button={{ title: 'GET STARTED',icon: 'flight-takeoff'  }}
    />



    </View>
 
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
