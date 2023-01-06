import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {StarIcon} from "react-native-heroicons/outline";

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
  return (
    <TouchableOpacity className="pr-4">
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
     </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard