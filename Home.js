import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';


    export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <ImageBackground source={require('./assets/man.jpg')} style={styles.background}>
            <View style={styles.content}>
            <Text style={styles.title}>Welcome to Uber</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreens")}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    });