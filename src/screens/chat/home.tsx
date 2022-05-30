import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';


import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import {Reanimated2} from '../../components/reanimated2';
import {randomNum} from '../../utils/help';
import {BButton} from '../../components/button';

import HeaderComponent from '../../components/messagesScreenComponents/HeaderComponent';
import SliderComponent from '../../components/messagesScreenComponents/SliderComponent';
import TeamComponent from '../../components/messagesScreenComponents/TeamComponent';
import MessagesComponent from '../../components/messagesScreenComponents/MessagesComponent';

export const ChatHome: React.FC = observer(({}) => {
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

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
      <HeaderComponent />
      <SliderComponent />
      <TeamComponent />
      <MessagesComponent />  
    </View>
      </ScrollView>
    </View>
  );
});


const styles = StyleSheet.create ({
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1rem",
    color: "#a56210",
    fontSize: 14,
    letterSpacing: 1,
    fontWeight: "500",
  },
})