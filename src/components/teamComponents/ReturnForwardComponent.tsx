import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ReturnForwardComponent = () => {
  return (
    <View style = {{flexDirection: 'row', justifyContent: "space-between", margin: 10}}>
        <TouchableOpacity>
      <Text>Retour</Text>
       </TouchableOpacity>
       <TouchableOpacity>
      <Text>...</Text>
       </TouchableOpacity>
    </View>
  )
}

export default ReturnForwardComponent