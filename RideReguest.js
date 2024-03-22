    import React, { useState } from 'react';
    import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
    import MapView, { Marker } from 'react-native-maps';

    export default function RideRequestScreen() {
    const [pickupLocation, setPickupLocation] = useState(null);
    const [dropoffLocation, setDropoffLocation] = useState(null);
    const [rideOption, setRideOption] = useState(null);

    const handleSelectPickup = (coordinate) => {
        setPickupLocation({ coordinate });
    };

    const handleSelectDropoff = (coordinate) => {
        setDropoffLocation({ coordinate });
    };

    const handleConfirmRide = () => {
        // handle confirm ride logic here
    };

    return (
        <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
            {pickupLocation && <Marker coordinate={pickupLocation.coordinate} />}
            {dropoffLocation && <Marker coordinate={dropoffLocation.coordinate} />}
        </MapView>
        <TouchableOpacity style={styles.button} onPress={handleConfirmRide} disabled={!pickupLocation || !dropoffLocation || !rideOption}>
            <Text style={styles.buttonText}>Confirm Ride</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        flex: 1,
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: '10%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    });