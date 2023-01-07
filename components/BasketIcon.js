import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
        <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className= "bg-[#E01E3A] mx-5 space-x-2 items-center rounded-lg p-4 flex-row"
        >
            <Text className="text-white text-lg bg-[#df5c70] p-1 font-bold">{items.length}</Text>
            <Text className="text-white flex-1 text-center text-lg font-bold" >View Basket</Text>
            <Text className="text-white text-lg font-bold">{basketTotal} IQD</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon