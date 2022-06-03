import React, {useCallback, useEffect, useState} from 'react';

import {ScrollView, Alert, ActivityIndicator, Platform} from 'react-native';
import {View, Text, Button, Colors, Image, Assets, Dialog} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import { BButton } from '../../components/button';


//Profile Components

import HeaderProfileComponent from '../../components/profilScreenComponents/HeaderProfileComponent';
import ImageProfileComponent from '../../components/profilScreenComponents/ImageProfileComponent';
import TeamProfileComponent from '../../components/profilScreenComponents/TeamProfileComponent';
import PublicationProfileComponent from '../../components/profilScreenComponents/PublicationProfileComponent';
import FullScreenPublicationComponent from '../../components/profilScreenComponents/FullScreenPublicationComponent';

const ButtonSpace = 20;

export const UserProfile: React.FC = observer(({}) => {

  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();
  const [showDialog, setShowDialog] = useState(false);
  const [dialogUrl, setDialogUrl] = useState({});

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
    <ScrollView>
      <View>
        <FullScreenPublicationComponent 
          showDialog={showDialog} 
          source={dialogUrl} 
          setShowDialog={setShowDialog} 
        />
        <HeaderProfileComponent />
        <ImageProfileComponent />
        <TeamProfileComponent />
        <PublicationProfileComponent setShowDialog={setShowDialog} setDialogUrl={setDialogUrl} />

      </View>
    </ScrollView>
  );
});