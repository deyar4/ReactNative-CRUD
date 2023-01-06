import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {ArrowRightIcon} from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';

const Sections = ({id, title, description}) => {
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

<RestaurantCard 
 id = {12}
 imgUrl = "https://images.deliveryhero.io/image/talabat/Menuitems/Shaghf_Double_Frappe_637560642634411991.jpg"
 title = "Shaghaf Cafe"
 rating = {4.5}
 type = "Cafe"
 address = "Ashti, Sulaimaniyah"
 description = "The only cafe i go to."
 items = {[]}
 long = {20}
 lat = {0}
/>
<RestaurantCard 
 id = {12}
 imgUrl = "https://images.deliveryhero.io/image/talabat/Menuitems/Shaghf_Double_Frappe_637560642634411991.jpg"
 title = "Shaghaf Cafe"
 rating = {4.5}
 type = "Cafe"
 address = "Ashti, Sulaimaniyah"
 description = "The only cafe i go to."
 items = {[]}
 long = {20}
 lat = {0}
 />
<RestaurantCard 
 id = {12}
 imgUrl = "https://images.deliveryhero.io/image/talabat/Menuitems/Shaghf_Double_Frappe_637560642634411991.jpg"
 title = "Shaghaf Cafe"
 rating = {4.5}
 type = "Cafe"
 address = "Ashti, Sulaimaniyah"
 description = "The only cafe i go to."
 items = {[]}
 long = {20}
 lat = {0}
/>


    </ScrollView>
      

    </View>
  )
}

export default Sections