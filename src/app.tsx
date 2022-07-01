import React, { useContext } from 'react';
import {ActivityIndicator, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {AuthNavigator, RootNavigator} from './screens';
import {
  getNavigationTheme,
  getThemeStatusBarBGColor,
  getThemeStatusBarStyle,
} from './utils/designSystem';
import {useServices} from './services';
import { View } from 'react-native-ui-lib';
import { AuthContext } from './context/AuthContext';
import { If } from '@kanzitelli/if-component';

export const AppNavigator = (): JSX.Element => {
  useColorScheme();
  const {nav} = useServices();
  const {isLoading, userToken} = useContext(AuthContext)

  return (
    <>
      <StatusBar barStyle={getThemeStatusBarStyle()} backgroundColor={getThemeStatusBarBGColor()} />
      <NavigationContainer
        ref={nav.n}
        onReady={nav.onReady}
        onStateChange={nav.onStateChange}
        theme={getNavigationTheme()}
      >
        {isLoading ? (
            <View flex centerH centerV>
              <ActivityIndicator />
            </View>
          ) : (
            <If
            _={userToken !== null}
            _then={() => <RootNavigator />}
            _else={<AuthNavigator />}
          />
          )
        }
      </NavigationContainer>
    </>
  );
};
