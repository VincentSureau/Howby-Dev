import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {View, Text, Icon} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../services';
import {useStores} from '../stores';

import {Section} from '../components/section';
import {Reanimated2} from '../components/reanimated2';
import {randomNum} from '../utils/help';
import {BButton} from '../components/button';

//import icons
import Icons from '../data/Icons';

export const Story: React.FC = observer(({}) => {
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
              source={require('../../assets/icons/redheart.png')}
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
              source={require('../../assets/icons/house.png')}
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
              source={require('../../assets/icons/cake.png')}
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
          <Text style={{color: 'red', fontWeight: 'bold', fontSize: 16}}>Centre d'intérêts</Text>
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
            <Text
              style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: 16,
                marginTop: 10,
                paddingTop: 10,
              }}
            >
              Equipements sportif
            </Text>
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
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/inside.png')}
            style={{width: 40, height: 40,  marginRight: 10}}
          />
          <View>
            <Text> Nombre d'activités effectuées en intérieur</Text>
            <Text>17</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/outside.png')}
            style={{width: 40, height: 40,  marginRight: 10}}
          />
          <View>
            <Text> Nombre d'activités effectuées en extérieur</Text>
            <Text>17</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/outside2.png')}
            style={{width: 40, height: 40,  marginRight: 10}}
          />
          <View>
            <Text> Nombre de sorties</Text>
            <Text>47</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/home.png')}
            style={{width: 40, height: 40,  marginRight: 10}}
          />
          <View>
            <Text> Nombre d'activités effectuées à domicile</Text>
            <Text>21</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/companies.png')}
            style={{width: 40, height: 40,  marginRight: 10}}
          />
          <View>
            <Text> Nombre d'entreprises auxquelles vous avez fait appel</Text>
            <Text>70</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/organisations.png')}
            style={{width: 40, height: 40,  marginRight: 10}}
          />
          <View>
            <Text> Nombre d'organisations effectuées</Text>
            <Text>45</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/icons/icones/reward.png')}
            style={{width: 40, height: 40, marginRight: 10}}
          />
          <View>
            <Text> Nombre de récompenses obtenues</Text>
            <Text>3</Text>
          </View>
        </View>
      </View>
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
});
/*  <View flex bg-bgColor>
<ScrollView contentInsetAdjustmentBehavior="automatic">
<View padding-s4>
  <Section title={t.do('section.navigation.title')}>
    <BButton
      marginV-s1
      label={t.do('section.navigation.button.push')}
      onPress={() => nav.push('Example', {value: randomNum()})}
    />
    <BButton
      marginV-s1
      label={t.do('section.navigation.button.show')}
      onPress={() => nav.show('ExampleModal')}
    />
    <BButton
      marginV-s1
      label={t.do('section.navigation.button.sharedTransition')}
      onPress={() => Alert.alert('future feature: shared transition')}
    />
  </Section>

  <Section title="Reanimated 2">
    <Reanimated2 stID="reanimated2" />
  </Section>

  <Section title="MobX">
    <View centerV>
      <Text marginB-s2 text60R textColor>
        App laujfdhfjdnches: {ui.appLaunches}
      </Text>
      <Text marginB-s2 text60R textColor>
        Counter:{' '}
        <If
          _={counter.loading}
          _then={() => <ActivityIndicator />}
          _else={<Text>{counter.value}</Text>}
        />
      </Text>
      <BButton margin-s1 label="-" onPress={counter.dec} />
      <BButton margin-s1 label="+" onPress={counter.inc} />
      <BButton margin-s1 label="reset" onPress={counter.reset} />
    </View>
  </Section>

  <Section title="API">
    <BButton margin-s1 label="Update counter value from API" onPress={api.counter.get} />
  </Section>

  <Text textColor center>
    localized with i18n-js
  </Text>
</View>
</ScrollView>
</View>

*/
