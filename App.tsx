import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from './src/screens/splash';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (

    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <SplashScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
