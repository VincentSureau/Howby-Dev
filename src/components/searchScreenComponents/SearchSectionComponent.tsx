import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchSectionComponent = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={styles.text}>Recherche</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="search-outline" size={20} />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.text}>Mon Panier</Text>
              <Ionicons name="cart-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginTop: 15}}>
            <Text style={{marginTop: 30, color: '#8F6C22', fontSize: 16}}>DERNIERE MINUTE</Text>
            <View>
              <TouchableOpacity style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{marginTop: 30, marginRight: 50, color: '#8F6C22', fontSize: 16}}>
                  LIMITED EVENT
                </Text>
                <Ionicons name="glasses-outline" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View></View>
          <View style={{marginTop: 15}}>
            <Text>Nouvelle organisation</Text>
            <Text style={{marginTop: 30}}>Organisations en cours</Text>
            <Text style={{marginTop: 30}}>Favoris</Text>
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
    fontWeight: 'bold',
    color: '#020084',
    marginRight: 10,
  },
});
export default SearchSectionComponent;
