import { View, Text } from 'react-native'
import React from 'react'

const item = ({
    iid, name, description, price, img, inStock
}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default item