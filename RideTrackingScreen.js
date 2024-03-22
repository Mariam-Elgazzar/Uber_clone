import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function RideTrackingScreen({navigation}) {
  const [location, setLocation] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [estimatedArrivalTime, setEstimatedArrivalTime] = useState(null);

  const [destination, setDestination] = useState({
    latitude: -34.397,
    longitude: 150.644,
  });

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            // Your success callback function here
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          },
          error => {
            // Your error callback function here
            console.log(`Error: ${error.message}`);
          }
        );
      } else {
        // Geolocation is not supported by this browser
        const intervalId = setInterval(() => {
            setDriverLocation({ latitude: 37.78825 + Math.random() * 0.01, longitude: -122.4324 + Math.random() * 0.01 });
            setEstimatedArrivalTime(new Date(Date.now() + Math.random() * 10 * 60 * 1000));
          }, 5000);
      
          return () => clearInterval(intervalId);      }
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="You are here"
          />
          <Marker
            coordinate={destination}
            title="Destination"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
