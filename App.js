import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts=() =>{
 return font.loadAsync({
    'open-sans': require ('./assets/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/OpenSans-Bold.ttf')
  });
};


export default function App() {
  const [fontLoaded,setFontLoaded]= useState(false);
  if (!fontLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={console.warn(<Text>
        ['Error loading assets']
      </Text>)}
      
    />
    );
    
  }
  return 0;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
