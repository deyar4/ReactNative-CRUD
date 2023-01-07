import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState, useMemo} from 'react'
import { useNavigation } from '@react-navigation/native'
import {useSelector, useDispatch} from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import item from '../components/Item'
import {XCircleIcon} from 'react-native-heroicons/solid'
import { removeFromBasket } from '../slices/basketSlice'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectBasketTotal)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.iid] = results[item.iid] || []).push(item)
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)

    }, [items])


  return (
    <SafeAreaView className= "flex-1 bg-white">
        <View className= "flex-1 bg-gray-100">
            <View className= "p-5 border-b border-[#E01E3A] bg-white shadow-xs">
                <View>
                    <Text className="font-bold text-center text-2xl pt-4">Basket</Text>
                    <Text className="text-center text-gray-500">{restaurant.title}</Text>
                </View>

                <TouchableOpacity
                onPress= {navigation.goBack}
                className= "bg-gray-50 rounded-full absolute top-7 right-5"
                >
                    <XCircleIcon color="#E01E3A" height={50} width={50} />

                </TouchableOpacity>
            </View>
            <View className = "bg-white rounded-md flex-row items-center m-6">
                <Image source = {{
                    uri: "https://cdn-icons-png.flaticon.com/512/9335/9335141.png",
                }}
                className = "h-12 w-12 p-4 m-6 rounded-full"
                />
                
                <Text className="flex-1">Delivery in 15-25 minutes</Text>

                <TouchableOpacity>
                    <Text className = "text-[#E01E3A] m-6">Change</Text>
                </TouchableOpacity>
            </View>
        <ScrollView className = "divide-y divide-gray-200"> 
            {Object.entries(groupedItemsInBasket)?.map(([key, items]) => (
                <View 
                key = {key}
                className = "flex-row items-center space-x-4 bg-white py-3 px-5"
                >
                <Text className = "text-md font-semibold">{items.length} x</Text>
                <Image
                source = {{
                    uri: (items[0]?.img)
                }}
                className = "h-12 w-12 rounded-full"
                />
                <Text className="flex-1 font-bold">{items[0]?.name}</Text>
                <Text className = "text-gray-500">{items[0].price} IQD</Text>

                <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({iid: key}))}
                >
                    <Text className = "text-[#E01E3a] text-xs">Remove</Text>
                </TouchableOpacity>
            </View>
            ))
            }
        </ScrollView>

        <View className = "flex-col space-y-1 bg-white">
            <View className = "flex-row justify-between m-8">
                <Text>Subtotal</Text>
                <Text>{basketTotal} IQD</Text>
            </View>

            <View className = "flex-row justify-between m-8">
                <Text>delivery Fee</Text>
                {/* Since this is just a Demo i am not calculating per distance */}
                <Text>2000 IQD</Text> 
            </View>

            <View className = "flex-row justify-between m-8">
                <Text>Total Amount</Text>
                <Text>{basketTotal + 2000} IQD</Text>
            </View>
        </View>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen