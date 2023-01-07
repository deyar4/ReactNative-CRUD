import { View, Text, SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const OrderPreparationScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("Basket")
      }, 4000)
    

    }, [])
    
  return (
    <SafeAreaView className = "bg-[#E02E3A] flex-1 justify-center items-center">
      <Animatable.Image 
      source = {require("../assets/giphy.gif")}
      animation = "slideInUp"
      iterationCount = {1}
      className = "h-64 w-64"
      />
      <Animatable.Text 
      className = "text-3xl text-white text-center font-bold mt-10"
      animation="slideInUp"
      iterationCount={1}
      >Preparing Order</Animatable.Text>
    </SafeAreaView>
  )
}

export default OrderPreparationScreen