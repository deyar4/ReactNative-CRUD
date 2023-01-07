import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid"
import {useDispatch, useSelector} from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../slices/basketSlice';



const item = ({
    iid, name, description, price, img, inStock
}) => {

    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ iid, name, description, price, img}));
}
    const items = useSelector(state => selectBasketItemsWithId(state, iid));
    const removeItemFromBasket = () => {
    if(!items.length > 0) return;

    dispatch(removeFromBasket({iid}));
    }
  return (

    <>

    <TouchableOpacity
    onPress={() => setIsPressed(!isPressed)}>
        <View className="flex-row space-x-2 items-center p-6">
            <Image source={{
        uri: img,
     }}
     className="h-16 w-16" />
     <View className="flex-col flex-1 space-y-1">
        <Text className= "text-md font-bold">{name}</Text>
        <Text className= "text-sm text-gray-500">{description}</Text>
        <Text className= "">{price} IQD</Text>
     </View>
     {isPressed && (
        <View>
            <View className= "flex-col items-center">
                <TouchableOpacity
                onPress={addItemToBasket}
                >
                    <PlusCircleIcon size={35} color="green" />
                </TouchableOpacity>
                    <Text>{items.length}</Text>
                <TouchableOpacity
                onPress={removeItemFromBasket}
                >
                    <MinusCircleIcon size={35} 
                    color={items.length > 0 ? "red" : "gray"} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )}

        </View>
     
    </TouchableOpacity>
    
    
    </>
  )
}

export default item