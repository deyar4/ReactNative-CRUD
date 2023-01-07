import { View, Text } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'


const RestaurantScreen = () => {
    const navigation = useNavigation();

    const {
        params: {
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
        }} = useRoute();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })

    }, [])    
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default RestaurantScreen