import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import FloatingButton from './src/FloatingButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={} resizeMode='cover' style={{ width: 500, height: 900, opacity: 0.7 }} /> */}
      <FloatingButton 
        style={{ bottom: 100 }} 
        primaryColor='#F02A4B'
        primaryIcon={(
          <AntDesign name='plus' size={24} color='#FFF' />
        )}
        secondaryColor='#FFF'
        secondaryIcons={[
          (
            <Entypo name='location-pin' size={20} color='#F02A4B' />
          ),
          (
            <Entypo name='location-pin' size={20} color='#F02A4B' />
          ),
          (
            <Entypo name='location-pin' size={20} color='#F02A4B' />
          )  
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
