import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Alert, StyleSheet, Image, TextInput, SafeAreaView} from 'react-native';
import {View, Text, GridView, ListItem} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../../services';
import {useStores} from '../../stores';

//import icons
import Icons from '../../data/Icons';
import {Ionicons} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const InnerProfile: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const start = useCallback(async () => {
    try {
      await api.counter.get();
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);

  useEffect(() => {
    start();
  }, []);

  // section Header

  const HeaderSection = () => {
    return (
      <>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#E6AB78', fontWeight: 'bold', fontSize: 18}}>Prénom Nom </Text>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Age</Text>
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 20}}>
          <Text>Conseiller commercial automobile</Text>
          <Text></Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../../assets/icons/redheart.png')}
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#000',
                padding: 10,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#000',
                marginRight: 10,
              }}
            />
            <Image
              source={require('../../../assets/icons/house.png')}
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#000',
                padding: 10,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#000',
                marginRight: 10,
              }}
            />
            <Text>location</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>1/06/1997</Text>
            <Image
              source={require('../../../assets/icons/cake.png')}
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#000',
                padding: 10,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#000',
                marginLeft: 10,
              }}
            />
          </View>
        </View>
      </>
    );
  };
  // section Centre d'intérêt

  const InterestSection = () => {
    return (
      <>
        <View style={{borderTopColor: '#000', borderTopWidth: 1, marginTop: 10, paddingTop: 10}}>
          <Text style={styles.title}>Centre d'intérêts</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {Icons.map((img, index) => (
            <View key={index} style={{marginRight: 10, marginBottom: 15}}>
              <Image source={{uri: img.img}} style={styles.icons} />
              <Text style={{fontSize: 12, textAlign: 'center'}}>{img.name}</Text>
            </View>
          ))}
        </View>
      </>
    );
  };

  // Section Equipement sportif
  const Equipment = () => {
    return (
      <>
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
            {Icons.map((img, index) => (
              <View key={index} style={{marginRight: 5}}>
                <Image source={{uri: img.img}} style={styles.icons} />
                <Text style={{fontSize: 12, textAlign: 'center'}}>{img.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </>
    );
  };

  // section review

  const Review = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/inside.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre d'activités effectuées en intérieur</Text>
            <Text style={styles.reviewSectionNumbers}>17</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/outside.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre d'activités effectuées en extérieur</Text>
            <Text style={styles.reviewSectionNumbers}>17</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/outside2.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre de sorties</Text>
            <Text style={styles.reviewSectionNumbers}>47</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/home.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre d'activités effectuées à domicile</Text>
            <Text style={styles.reviewSectionNumbers}>21</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/companies.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre d'entreprises auxquelles vous avez fait appel</Text>
            <Text style={styles.reviewSectionNumbers}>70</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/organisations.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre d'organisations effectuées</Text>
            <Text style={styles.reviewSectionNumbers}>45</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image
            source={require('../../../assets/icons/icones/reward.png')}
            style={styles.reviewSectionIcons}
          />
          <View>
            <Text> Nombre de récompenses obtenues</Text>
            <Text style={styles.reviewSectionNumbers}>3</Text>
          </View>
        </View>
      </View>
    );
  };

  const Search = () => {
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.TextInputFocus : styles.textInput;
    return (
      <>
        <View style={{borderTopColor: '#000', borderTopWidth: 1, marginTop: 10, paddingTop: 10}}>
          <Text style={styles.title}>Centres d'intérêts</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="search-outline" size={30} />
            <TextInput placeholder="Rechercher" style={customStyle} />
          </View>

          {Icons.map((img, index) => (
            <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image source={{uri: img.img}} style={[styles.icons, {marginBottom: 10}]} />
              </TouchableOpacity>
              <Text style={{marginLeft: 10}}>{img.name}</Text>
            </View>
          ))}
        </View>
      </>
    );
  };


  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <HeaderSection />
          <InterestSection />
          <Equipment />
          <Review />
          <Search />
          
        </ScrollView>
      </View>
    </>
  );
});

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
