import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { useServices } from '../../services';


let imageHeight = Dimensions.get('window').height;
let imageWidth = Dimensions.get('window').width;

const publicationImages = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1653932946648-6585ff164682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZXllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1567647753830-de3fe7ce9f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1529419412599-7bb870e11810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxfHxuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1654124803462-e01f93b1550a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
];

interface  PublicationProfilePropsType {
  setShowDialog: (boolean: boolean) => void;
  setDialogUrl: (source : {uri: string}) => void;
}

const PublicationProfileComponent = ({setShowDialog, setDialogUrl} : PublicationProfilePropsType) => {

  const {nav, t, api} = useServices();
    
  return (
    <View>
      <Text style = {{marginTop: 10, borderBottomWidth: 1, borderBottomColor: "gray"}}>VOS PUBLICATIONS</Text>
      <View style = {{flexDirection: "row", flexWrap: "wrap", marginTop: 10}}>                  
        {publicationImages.map((img, index) => (
            <TouchableOpacity 
              key={index}
              // onPress={() => props.navigation.navigate('FullScreenPublicationComponent',{url: img.imageUrl})}
              onPress={() => {
                setShowDialog(true);
                setDialogUrl({uri: img.imageUrl});
              }}
            >
              <Image
                source={{uri: img.imageUrl}}
                style={{height: imageHeight / 3, width: imageWidth /  3 - 6, margin: 2 }}
              />
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
};

export default PublicationProfileComponent;
