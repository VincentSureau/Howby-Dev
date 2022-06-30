import { Text } from 'react-native'
import React from 'react'
import HeaderProfileComponent from '../../components/profilScreenComponents/HeaderProfileComponent'
import ImageProfileComponent from '../../components/profilScreenComponents/ImageProfileComponent'
import { View } from 'react-native-ui-lib'

const Profile = () => {
  return (
    <View flex bg-bgColor2>
      <HeaderProfileComponent />
      <ImageProfileComponent 
      />
    </View>    
  )
}

export default Profile