import React, { useState } from 'react';
import { StyleSheet, Text,Button, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreens({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleLogin = () => {
        // perform form validation
        if (!email || !password) {
        setError('Please fill out all fields');
        return;
        }

        // make HTTP POST request to backend API
        fetch('https://console.firebase.google.com/project/uber-clone-2ec59/authentication/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
            setError(data.error);
            } else {
            // handle successful login
            console.log(data);
            }
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <View style={styles.container}>
        
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('HomeScreen');handleLogin}}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>Don't have an account? 
            <Text style={styles.signupLink} onPress={() => navigation.navigate('RegistrationScreen')} >Sign up</Text>
        </Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '80%',
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
        marginBottom: 20,
    },
    signupText: {
        marginTop: 20,
        fontSize: 16,
    },
    signupLink: {
        color: '#2196f3',
        fontWeight: 'bold',
    },
    });