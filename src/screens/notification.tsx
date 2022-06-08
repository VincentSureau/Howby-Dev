import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../services';
import {useStores} from '../stores';

import {Section} from '../components/section';
import {Reanimated2} from '../components/reanimated2';
import {randomNum} from '../utils/help';
import {BButton} from '../components/button';
import HeadingComponent from '../components/notificationsScreenComponents/HeadingComponent';
import InvitationsComponent from '../components/notificationsScreenComponents/InvitationsComponent';
import FollowersComponent from '../components/notificationsScreenComponents/FollowersComponent';

export const Notification: React.FC = observer(({}) => {
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
    <View style = {styles.container} >
      <ScrollView>
      <HeadingComponent />
      <InvitationsComponent />
      <FollowersComponent />
      </ScrollView>

    </View>
  );

});

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10
  }
})