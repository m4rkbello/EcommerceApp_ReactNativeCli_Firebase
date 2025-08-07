import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import SplashScreen from './src/screens/splash'; // ensure the file name is correct and case-sensitive

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <SplashScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or '#000' if dark mode
  },
  container: {
    flex: 1,
    justifyContent: 'center', // optional
    alignItems: 'center', // optional
  },
});

export default App;
