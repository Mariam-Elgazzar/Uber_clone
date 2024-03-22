import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity,Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';



const data = [
  {
    id: "uber-x-123",
    title: "Uber X",
    mulitplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "uber XL-456",
    title: "Uber Xl",
    mulitplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "uber-lux-789",
    title: "Uber LUX",
    mulitplier: 1.75,
    image: "https://links.papareact.com/3pn",
  },
];
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] =useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw `bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          style={tw `absolute top-3 left-5 p-3 rounded-full`}
          onPress={() => navigation.navigate("NavigateCard")}
          >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
      <Text style={tw `text-center py-5 text-xl`} >Select a Ride - 
      {travelTimeInformation?.distance?.text}
      </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem ={({item : {id, title, mulitplier, image} })=> (
          <TouchableOpacity 
            style={tw `flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200" }`}
            onPress={()=> setSelected(id)}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source= {{uri: image}}
            />
            <View style={tw `-ml-6`}>
              <Text style={tw `text-xl font-semibold`} >{title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={ tw `text-xl`}>
              {new Intl.NumberFormat("en-gb",{
                style:"currency",
                currency:"GBP",
              }).format(

                (travelTimeInformation?.duration?.value*
                  SURGE_CHARGE_RATE*
                  mulitplier)/100
              ) }
            </Text>
          </TouchableOpacity>
        )}
      />
              <View style={tw `mt-auto border-t border-gray-200` } >
                <TouchableOpacity  style={tw `bg-black py-3 m-3 ${!selected && "bg-gray-400"}`}
                  onPress={() => navigation.navigate("PaymentScreen")}
                >
                  <Text style={tw `text-center text-white text-xl` }>
                    Choose {selected?.title}
                  </Text>
                </TouchableOpacity>
              </View> 
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create ({})
//disabled={!selected}
