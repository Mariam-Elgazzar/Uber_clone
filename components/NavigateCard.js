import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style= {tw `bg-white flex-1`}>
      <Text style={tw `text-center py-5 text-xl`}>Good Morning</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            fetchDetails ={true}
            styles={ToInputBoxStyles}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlaces Search'
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details =null) =>{
              dispatch(setDestination({
                location: details.geometry.location,
                description:data.description,
              }));
              navigation.navigate('RideOptionsCard');
            }}
            query={{
              key:GOOGLE_MAPS_APIKEY,
              language:"en",
            }}
            debounce={400}
          />
        </View>
        <NavFavourites/>
      </View>

      <View style={tw `flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >
        <TouchableOpacity 
        onPress={()=> navigation.navigate('RideOptionsCard') }
        style={tw `flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
          <Icon 
            name="car"
            type="font-awesome"
            color="white"
            size={16}
          />
          <Text style={tw `text-white text-center`}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const ToInputBoxStyles = StyleSheet.create ({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#dddddf",
    borderRadius:0,
    fontSize: 18,
  },
  TextInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});