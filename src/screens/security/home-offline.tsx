import React, {useCallback, useContext, useEffect} from 'react';

import {Alert, Platform} from 'react-native';
import {View, Text, Button, Colors, Image, Assets} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import { AuthContext } from '../../context/AuthContext';

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
            backgroundColor={Colors.primary}
            size={Button.sizes.large}
            label={t.do('homeOffline.button.login')}
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            borderRadius={7}
            style={{marginBottom: ButtonSpace, height: 65}}
            onPress={() => nav.push('Login')}
          />
          <Button 
            backgroundColor={Colors.accent}
            size={Button.sizes.medium}
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            label={t.do('homeOffline.button.register')}
            borderRadius={7}
            style={{marginBottom: ButtonSpace, height: 45}}
            onPress={() => nav.push('Register')}
          />
      </View>
      <View centerH>
        <Text>{t.do('homeOffline.footer.subtitle')}</Text>
      </View>
    </View>
  );
});