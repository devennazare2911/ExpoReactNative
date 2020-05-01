import React from 'react';
import { StyleSheet, Text,Alert,View } from 'react-native';
import { Button,Overlay } from 'react-native-elements';
import {Icon }from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';
import { PricingCard } from 'react-native-elements';
import { Slider } from 'react-native-elements';
import { Tooltip } from 'react-native-elements';

import { Input } from 'react-native-elements';


function HomeScreen() {
return(
  console.log("Hellow World")
       );
} 
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
    price="$2001"
    info={['1 User', 'Basic Support', 'All Core Features..']}
    button={{ title: 'GET STARTED',icon: 'flight-takeoff'  }}
    />

<View style={{ flex: 0, alignItems: 'stretch', justifyContent: 'center' }}>
  <Slider
 
  />
  <Tooltip popover={<Text>Nice to Meet you</Text>}><Text>Click Me</Text></Tooltip>
</View>

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
