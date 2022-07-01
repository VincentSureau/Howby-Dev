import React, {useCallback, useContext, useEffect, useState} from 'react';

import {ScrollView, Alert, ActivityIndicator, Platform} from 'react-native';
import {View, Text, Button, Colors, Image, Assets, Dialog} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import { BButton } from '../../components/button';
import ReturnForwardComponent from '../../components/teamComponents/ReturnForwardComponent';
import CircleComponent from '../../components/CircleComponent';
import { AuthContext } from '../../context/AuthContext';

const ButtonSpace = 20;

export const Test: React.FC = observer(({}) => {

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

  const logoFull = Platform.OS === 'web' ? {uri: Assets.images.logos.logoFull}: Assets.images.logos.logoFull;

  const {logout} = useContext(AuthContext);
  return (
    <View flex bg-bgColor2 centerV>
      <View centerH flex centerV>
        <Image style={{height: 200, width: 300}} source={logoFull} />
        <Text text40 color={Colors.secondary} subtitle>{t.do('homeOffline.subtitle')}</Text>
      </View>
      <View centerV marginV-50 marginH-10>
          <Button 
            backgroundColor="#FB3C62"
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            label="Allez au feed"
            borderRadius={7}
            style={{height: 45, marginBottom: ButtonSpace}}
            onPress={() => nav.push('FeedIndex')}
          />
          <Button 
            backgroundColor="#FB3C62"
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            label="Allez au profile"
            borderRadius={7}
            style={{height: 45, marginBottom: ButtonSpace}}
            onPress={() => nav.push('UserProfile')}
          />
          <Button 
            backgroundColor="#FB3C62"
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            label="Allez au user feed"
            borderRadius={7}
            style={{height: 45, marginBottom: ButtonSpace}}
            onPress={() => nav.push('UserFeed')}
          />
          <Button 
            backgroundColor="#FB3C62"
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            label="Allez a story"
            borderRadius={7}
            style={{height: 45, marginBottom: ButtonSpace}}
            onPress={() => nav.push('Story')}
          />
          <Button 
            backgroundColor="#FB3C62"
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            label="Logout"
            borderRadius={7}
            style={{height: 45, marginBottom: ButtonSpace}}
            onPress={() => logout()}
          />
      </View>
      <View centerH>
        <Text>{t.do('homeOffline.footer.subtitle')}</Text>
      </View>
    </View>
  );
});