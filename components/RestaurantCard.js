import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {StarIcon, MapPinIcon} from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';


const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    type,
    address,
    description,
    items,
    long,
    lat,
}) => {


    const navigation = useNavigation(); 

  return (
    <TouchableOpacity 
    onPress={() => {
        navigation.navigate('Restaurant', {
            id,
            imgUrl,
            title,
            rating,
            type,
            address,
            description,
            items,
            long,
            lat, 
        })
    }}
    className="bg-white mr-3 shadow rounded-xl">
     <Image source={{
        uri: imgUrl,
     }}
     className="h-36 w-64" />

     <View className="px-2 pb-4">

        <Text className="font-bold text-lg pt-2">{title}</Text>
        <Text className="text-sm text-gray-400">{description}</Text>

        <View className="flex-row items-center space-x-2">

            <StarIcon color="green" opacity={0.5} size={20} />
            <Text>{rating} | {type}</Text>

        </View>

        <View className="flex-row items-center space-x-2">

            <MapPinIcon color="gray" opacity={0.4} size={20} />
            <Text className="text-xs text-gray-400">{address}</Text>

            </View>

     </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard