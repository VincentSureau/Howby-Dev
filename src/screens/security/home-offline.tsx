import React, {useCallback, useEffect} from 'react';

import {ScrollView, Alert, ActivityIndicator} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import { BButton } from '../../components/button';

const ButtonSpace = 20;

export const HomeOffline: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const start = useCallback(async () => {
    try {
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);


  useEffect(() => {
    start();
  }, []);

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
            <Button
              backgroundColor="#FB3C62"
              label="Connexion"
              labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
              borderRadius={7}
              style={{height: 45, marginBottom: ButtonSpace}}
              onPress={() => nav.push('Login')}
            />
            <Button 
              backgroundColor="#FB3C62"
              color="#FFFFFF"
              labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
              label="Inscription"
              borderRadius={7}
              style={{height: 45, marginBottom: ButtonSpace}}
              onPress={() => nav.push('Register')}
            />
            <Button 
              backgroundColor="#FB3C62"
              color="#FFFFFF"
              labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
              label="Allez au feed"
              borderRadius={7}
              style={{height: 45, marginBottom: ButtonSpace}}
              onPress={() => nav.push('FeedIndex')}
            />
        </View>
      </ScrollView>
    </View>
  );
});