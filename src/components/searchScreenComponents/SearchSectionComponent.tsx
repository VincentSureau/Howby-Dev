import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchSectionComponent = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={styles.text}>Recherche</Text>
              <Ionicons name="search-outline" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={{textTransform: 'uppercase', fontSize: 18, color: 'brown'}}>
                Derniere
              </Text>
              <Text style={{textTransform: 'uppercase', fontSize: 18, color: 'brown'}}>Minute</Text>
              <Ionicons name="return-down-back-outline" size={20} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={{textTransform: 'uppercase', fontSize: 18, color: 'brown'}}>
                Limited
              </Text>
              <Text style={{textTransform: 'uppercase', fontSize: 18, color: 'brown'}}>Event</Text>
              <Ionicons name="diamond-outline" size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={styles.text}>Mon Panier</Text>
              <Ionicons
                name="cart-outline"
                size={20}
                style={{position: 'absolute', bottom: 0, right: 5}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>Nouvelle</Text>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>
                Organisation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>
                Organisation
              </Text>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>en cours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableArea}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>Favoris</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001C33',
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
  },
  touchableArea: {
    backgroundColor: 'gray',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 50,
    borderRadius: 5,
    marginBottom: 20,
  },
});
export default SearchSectionComponent;
