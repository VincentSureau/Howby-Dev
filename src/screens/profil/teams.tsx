import React, {useCallback, useEffect, useState} from 'react';

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
import SearchByName from '../../components/SearchByName';

const ButtonSpace = 20;

export const Teams: React.FC = observer(({}) => {

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
    <View flex bg-bgColor2>
      <ReturnForwardComponent />
      <CircleComponent />
      <SearchByName />
    </View>
  );
});