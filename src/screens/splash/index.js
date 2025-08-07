import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function SplashScreen() {
    return (
        <ImageBackground
            source={require('../../assets/bg.jpg')}
            resizeMode="cover"
            style={styles.background}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
