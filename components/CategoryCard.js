import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className="mr-6">
        <Image source={{
            uri: imgUrl
        }} 
        className="h-20 w-20 rounded-md"/>
      <Text className="text-center text-[#E01E3A] mt-1 font-light">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard