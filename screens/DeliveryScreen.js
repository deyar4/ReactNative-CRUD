import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../slices/restaurantSlice'
import {XMarkIcon} from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, {Marker} from 'react-native-maps'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
  return (
    <View className = "bg-[#E02E3A] flex-1">
      <SafeAreaView className = "z-50">
        <View className = "flex-row justify-between items-center p-5">
            <TouchableOpacity
            onPress={() => navigation.navigate("Home")}>
                <XMarkIcon color="white" size = {30} />
            </TouchableOpacity>
            <Text className = "font-light text-white text-lg">Order Help</Text>
        </View>

        <View className = "bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
         <View className = "flex-row justify-between">
            <View>
                <Text className = "text-lg text-gray-400">Estimated Arrival</Text>
                <Text className = "text-4xl font-bold">15-25 Minutes</Text>
            </View>

            <Image 
            source = {{
                uri: "https://cdn-icons-png.flaticon.com/512/2937/2937008.png"
            }}
            className = "h-20 w-20"
            />

         </View>

         <Progress.Bar size={30} color="#E02E3A" indeterminate={true} />

         <Text className = " mt-3 text-gray-500">Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>

      <MapView
      initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    className = "flex-1 -mt-10 z-0"
    mapType='mutedStandard'
      >
        <Marker 
        coordinate = {{
            latitude: restaurant.lat,
            longitude: restaurant.long,
        }}
        title = {restaurant.title}
        description = {restaurant.description}
        identifier = "origin"
        />
      </MapView>

      <SafeAreaView className = "bg-white flex-row items-center h-28 space-x-5">
        <Image 
        source = {{
            uri: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
        }}
        className = "h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className = "flex-1">
            <Text className = "text-lg">Dyar Bakr</Text>
            <Text className= "text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#E02E3A] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen