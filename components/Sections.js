import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';
import axios from "axios";
import { BASE_URL } from '../config';



const Sections = ({id, title, description}) => {
    const [loading, setLoading] = useState(true);
    const [Restaurants, setRestaurants] = useState([])


    // console.log(Restaurants)

    const getData = async () => {
        try {
          setLoading(true)
          await axios.get(BASE_URL + '/restaurants').then(res => {
            setRestaurants(res.data.data);
            setLoading(false);
          });
        } catch (err) {
          console.log(err);
        }
      };
      
      useEffect(() => {
        getData(); 
    }, [])
    console.log(Restaurants)
  return (
    <View className="p-4">
        <View className="flex-row space-x-2 items-center mt-4 justify-between">
        <Text className="text-xl text-gray-700 font-bold">{title}</Text>
        <ArrowRightIcon size={25} color="#E01E3A"/>
        </View>
      <Text className="text-gray-400">{description}</Text>
      <ScrollView 
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 4,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
{/* Restaurant Cards */}

{loading ? <Text>Loading..</Text> : Restaurants.map((restaurant) => (
    <RestaurantCard 
    key = {restaurant.attributes.rid}
    id = {restaurant.attributes.rid}
    imgUrl = {restaurant.attributes.imgUrl}
    title = {restaurant.attributes.Name}
    rating = {restaurant.attributes.rating}
    type = {restaurant.attributes.type}
    address = {restaurant.attributes.address}
    description = {restaurant.attributes.description}
    items = {[]}
    long = {restaurant.attributes.long}
    lat = {restaurant.attributes.lat}
/>
)

)}




    </ScrollView>
      

    </View>
  )
}

export default Sections