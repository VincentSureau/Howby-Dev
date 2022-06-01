import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler';

const HeaderProfileComponent = () => {
  return (
        <SafeAreaView style = {styles.header}>
            <View>
                <Ionicons name = "chevron-back-outline" size = {20} />
                
            </View>
            <View style = {styles.userIcons}>
                <TouchableOpacity>
                <Ionicons name = "person-outline" size = {20} style = {{marginRight: 10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name = "add-circle-outline" size ={20} style = {{marginRight: 10}} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Ionicons name = "filter-outline" size={20} style = {{marginRight: 10}} />
                </TouchableOpacity>
                

            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create ({

    header:{
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 15
    },

    userIcons:{
        flexDirection: 'row',
        
        
    }

})

export default HeaderProfileComponent;