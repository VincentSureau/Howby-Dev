import React, {useState} from 'react';
import {
  ImageBackground,
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  View,
  Text,
  Dialog,
  Colors,
  Button,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native-ui-lib';
import {Icon} from '../icon';
import {Ionicons} from '@expo/vector-icons';

interface HowbyModalPropsType {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setUserEquipement: ([]: Array<number>) => void;
  equipement: Array<any>;
  userEquipement: Array<any>;
}

const equipementModal = ({
  showModal,
  setShowModal,
  equipement,
  userEquipement,
  setUserEquipement,
}: HowbyModalPropsType) => {
  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.TextInputFocus : styles.textInput;

  const toggleEquipement = id => {
    console.log(id);
    if (userEquipement.indexOf(id) !== -1) {
      
      setUserEquipement(userEquipement.filter(equipement => equipement !== id));
    } else {
      
      setUserEquipement([...userEquipement, id]);
    }
  };

  return (
    <Modal visible={showModal} onDismiss={() => setShowModal(false)}>
      <Button
        enableShadow
        style={{
          width: 44,
          height: 44,
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
        link
        onPress={() => setShowModal(false)}
        iconSource={() => (
          <Ionicons
            style={{
              textShadowColor: 'rgba(0,0,0,.3)',
              textShadowOffset: {
                width: 0,
                height: 1,
              },
              textShadowRadius: 2.22,

              elevation: 3,
            }}
            name="close-sharp"
            size={44}
            color={Colors.whitish}
          />
        )}
      />
      <View
        style={{
          borderBottomColor: '#000',
          borderBottomWidth: 1,
          marginBottom: 10,
          paddingBottom: 10,
        }}
      >
        <View>
          <Text style={styles.title}>Equipements sportif</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          {equipement.map((equipement, index) => (
            <View key={index} style={{marginRight: 5}}>
              <Image source={{uri: equipement.equipement}} style={styles.icons} />
              <Text style={{fontSize: 12, textAlign: 'center'}}>{equipement.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default equipementModal;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  icons: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
  },
  selectedIcons: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 5,
    marginBottom: 10,
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    paddingTop: 10,
  },
  reviewSectionIcons: {
    width: 40,
    height: 40,
    marginRight: 10,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  reviewSectionNumbers: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  TextInputFocus: {
    //backgroundColor: 'Transparent',
    padding: 10,
    //borderColor: 'none',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    //outlineStyle: 'none',
  },
});
