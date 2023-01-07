import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect, useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import Sections from '../components/Sections';
import axios from "axios";



const HomeScreen = () => {

    const navigation = useNavigation();
    const [sectionTypes, setSectionTypes] = useState([])
    const baseUrl = "http://192.168.1.143:1337/api/restaurants";
    const api = axios.create({
        baseURL: baseUrl
    })
    api.get('/').then(res => {
        console.log(res.data)
    }).catch(error => console.log(error));   

useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
}, []);

useEffect(() => {

}, [])


return (
    <SafeAreaView className="bg-gray-50 pt-5">
        { /* Header */}
    <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{uri: 'https://links.papareact.com/wru'}}
        className='h-10 w-10 bg-gray-300 p-5 ml-3 rounded-full' />
        <View className="flex-1 mr-3">
            <Text className="font-bold text-gray-400 text-xs">Order Now!</Text>
            <Text className="font-bold text-xl">Current Location <ChevronDownIcon size={20} color="#E02E3A" /></Text>  
        </View>

        <UserIcon size={35} color="#E02E3A" />
    </View>

    {/* Search */}
<View className="flex-row items-center pb-2 mx-4 space-x-2">
<View className="flex-row flex-1 m-4 rounded-xl space-x-2 p-3 bg-gray-200">
    <MagnifyingGlassIcon color="#E01E3A"/>
    <TextInput
    placeholder='Search Restaurants or Foods'
    keyboardType='default'
    />
    </View>
    <AdjustmentsHorizontalIcon size={30} color="#E01E3A" />
</View>

{/* BODY */}

<ScrollView
contentContainerStyle={{
    paddingBottom: 90,
}}
>

{/* Categories */}

<Categories />

<Sections 
    id="1"
    title="Nearest Restaurants"
    description="Below are the Restaurants closest to your current location."
/>

<Sections 
    id="2"
    title="Up to 70% Discounts"
    description="Order your favourite meals cheaper."
/>

<Sections 
    id="3"
    title="Top Rated Restaurants"
    description="These are the most popular and highest rated restaurants."
/>

</ScrollView>

</SafeAreaView>

);

  
  
}

export default HomeScreen