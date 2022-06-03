import { View, Text, ImageBackground, Dimensions, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Dialog, Colors, Button, Modal } from 'react-native-ui-lib';
import { Icon } from '../icon';
import {Ionicons} from '@expo/vector-icons';

let imageHeight = Dimensions.get('window').height;
let imageWidth = Dimensions.get('window').width;

interface  FullScreenPublicationPropsType {
  showDialog: boolean;
  source: ImageSourcePropType;
  setShowDialog: (showDialog: boolean) => void;
}

const FullScreenPublicationComponent = ({showDialog, source, setShowDialog}: FullScreenPublicationPropsType) => {
  return (
      <Modal    
          visible={showDialog}
          onDismiss={() => setShowDialog(false)}
      >
        <Button 
          enableShadow
          style={
            {
              width: 44,
              height: 44,
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 1,
            }
          } 
          link
          onPress={() => setShowDialog(false)}
          iconSource={() => (
            <Ionicons style={{
              textShadowColor: "rgba(0,0,0,.3)",
              textShadowOffset: {
                width: 0,
                height: 1,
              },
              textShadowRadius: 2.22,

            elevation: 3,}} name="close-sharp" size={44} color={Colors.whitish} />
          )}
        />
        <ImageBackground source={source} style = {{ height: imageHeight, width: imageWidth}} />
      </Modal>
  )
}

export default FullScreenPublicationComponent