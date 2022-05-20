import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import {Reanimated2} from '../../components/reanimated2';
import {randomNum} from '../../utils/help';
import {BButton} from '../../components/button';
import { Camera } from 'expo-camera';

export const NewStory: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Platform.OS === "web" ? Camera.Constants.Type.front : Camera.Constants.Type.back);

  const start = useCallback(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  }, []);

  useEffect(() => {
    start();
  }, []);

  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  }

  if (hasPermission === null) {
    return <BButton
      marginV-s1
      label={t.do('Autoriser caméra')}
      onPress={() => requestPermission()}
    />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View flex bg-bgColor style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});