import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeadingComponent = () => {
  return (
    <View style = {styles.inline}>
      <View >
          <TouchableOpacity style = {{flexDirection: "row"}}>
          <Icon name = "cart-outline" size = {20} />
          <Text style = {{marginLeft: 5}}>Mon </Text>
          <Text> Panier</Text>
          </TouchableOpacity>
      </View>
      <View>
          <Text style = {styles.notificationText}>Notifications</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
    inline: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    notificationText:{
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default HeadingComponent