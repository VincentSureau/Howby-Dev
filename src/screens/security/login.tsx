import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import {validateEmail} from '../../utils/help';
import { Formiz, useForm, FormizStep } from '@formiz/core';

export const Login: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const start = useCallback(async () => {
    try {
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);

  const loginForm = useForm();

  useEffect(() => {
    start();
  }, []);

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Section title={t.do('login.title')}>

          </Section>
        </View>
      </ScrollView>
    </View>
  );
});
