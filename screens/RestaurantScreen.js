import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import {ArrowLeftIcon, 
        ChevronRightIcon,
        MapPinIcon,
        StarIcon
        } from "react-native-heroicons/solid"; 
import Item from '../components/Item';
import BasketIcon from '../components/BasketIcon';
import {useDispatch} from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice';


const RestaurantScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // const [Items, setItems] = useState([])
    // const [loading, setLoading] = useState(true);

    // const getData = async () => {
    //     try {
    //       setLoading(true)
    //       await axios.get(BASE_URL + '/restaurant').then(res => {
    //         setItems(res.data.data);
    //         setLoading(false);
    //       });
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
      
    //   useEffect(() => {
    //     getData(); 
    // }, [])


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
    
    useEffect(() => {
        dispatch(setRestaurant({
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
        }))
    }, [dispatch])

    // console.log(items)
  return (
    <>
    <BasketIcon />

    <ScrollView className="bg-white">

        {/* Header Img */}
      <View className="relative">
        <Image source = {{
            uri: imgUrl,
        }} 
        className="w-full h-64 p-4"
        />
        <TouchableOpacity 
        onPress={navigation.goBack}
        className= "absolute top-14 left-5 p-2 bg-white rounded-full">
        <ArrowLeftIcon size={30} color="#E01E3A" />
        </TouchableOpacity>
      </View>

        {/* Title Area */}
      <View className= "bg-white">
        <View className= "px-4 pt-4">
            <Text className= "text-4xl font-bold">{title}</Text>
            <View className= "flex-row space-x-2 my-1">
                <View className='flex-row items-center space-x-1'>
                    <StarIcon size={20} opacity={0.5} color="green"/>
                    <Text className= "text-green-500 font-bold text-md">{rating}</Text>
                    <Text> |  {type}</Text>
                    <MapPinIcon size={20} opacity={0.3} color="gray"/>
                    <Text className= "text-gray-400 font-bold text-md">{address}</Text>
                </View>
            </View>
            <Text className= "text-gray-400 text-md">{description}</Text>
        </View>

        {/* Menu Items Area */}
            <View className="pb-36">
                <Text className="text-2xl font-bold px-4 pt-6 mb-3 text-gray-600">Menu</Text>

                {items.data.map((item) => (
                    <Item 
                        key = {item.attributes.iid}
                        iid = {item.attributes.iid}
                        name = {item.attributes.name}
                        description = {item.attributes.description}
                        price = {item.attributes.price}
                        img = {item.attributes.img}
                    />
                )

                )}


            </View>
      </View>
    </ScrollView>

    </>
  )
}

export default RestaurantScreen