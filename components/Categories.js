import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    >
      <CategoryCard  imgUrl='https://cdn-icons-png.flaticon.com/512/5937/5937399.png' title="Offers"/>
      <CategoryCard  imgUrl='https://cdn-icons-png.flaticon.com/512/9326/9326151.png' title="Free Delivery" />
      <CategoryCard  imgUrl='https://cdn-icons-png.flaticon.com/512/9335/9335206.png' title="Burgers"/>
      <CategoryCard  imgUrl='https://cdn-icons-png.flaticon.com/512/3700/3700886.png' title="Pizza" />
      <CategoryCard  imgUrl='https://cdn-icons-png.flaticon.com/512/8881/8881542.png' title="Salad" />
      <CategoryCard  imgUrl='https://cdn-icons-png.flaticon.com/512/4180/4180045.png' title="Coffee" />
      
    </ScrollView>
  )
}

export default Categories