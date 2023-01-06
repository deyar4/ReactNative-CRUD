import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';


const HomeScreen = () => {

    const navigation = useNavigation();
useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
}, []);

return (
    <SafeAreaView className="bg-white pt-5">
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

</ScrollView>

</SafeAreaView>

);

  
  
}

export default HomeScreen