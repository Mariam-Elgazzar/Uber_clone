import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View } from 'react-native';
import {Icon} from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
      id:"123",
      icon:"home",
      location:"home",
      destination:"المدينة الجامعية,جامعة الازهر ",
  },
  {
      id:"456",
      icon:"work",
      location:"Work",
      destination:"جامعة الازهر",
  },
];
const NavFavourites = () => {
  return (
  <FlatList
    data={data}
    
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
      <View
        style={[tw `bg-gray-200`, {height:0.5}]}
      />
    )}
    renderItem={({item: { location, destination, icon}}) => (
        <TouchableOpacity style={tw `flex-row items-center p-5`}>
          <Icon
            styles= {tw `mr-4 rounded-full bg-gray-400 p-3`}
            name= {icon}
            color= "white"
            size={18}
          />
          <View>
            <Text style={tw `font-semibold text-lg`}>{location}</Text>
            <Text style={tw `text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
    )} 
  ></FlatList>
  )
};

export default NavFavourites

const styles = StyleSheet.create ({});