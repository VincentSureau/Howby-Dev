import 'expo-dev-client';
import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {AppNavigator} from './src/app';
import {configureDesignSystem, loadAssets} from './src/utils/designSystem';
import {hydrateStores, StoresProvider} from './src/stores';
import {initServices, ServicesProvider} from './src/services';
import * as Font from 'expo-font';

LogBox.ignoreLogs(['Require']);

export default (): JSX.Element => {
  const [ready, setReady] = useState(false);

  const startApp = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();
    await hydrateStores();
    await initServices();
    configureDesignSystem();
    await loadAssets();

    try {
      // Load fonts
      await Font.loadAsync({
        'brushsci': require('./assets/fonts/BRUSHSCI.ttf'),
      })
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      setReady(true);
      await SplashScreen.hideAsync();
    }    
  }, []);

  useEffect(() => {
    startApp();
  }, [startApp]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StoresProvider>
        <ServicesProvider>{ready ? <AppNavigator /> : null}</ServicesProvider>
      </StoresProvider>
    </GestureHandlerRootView>
  );
};
