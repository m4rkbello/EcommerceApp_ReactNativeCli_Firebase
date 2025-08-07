import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';

export default function SplashScreen() {
    return (
        <ImageBackground
            source={require('../../assets/bg.jpg')}
            resizeMode="cover"
            style={{ flex: 1, padding: 15 }}
        >
            <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>
                E-Commerce APP
            </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
