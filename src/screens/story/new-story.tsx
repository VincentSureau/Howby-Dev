import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, TouchableOpacity, StyleSheet, Platform, Button} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {BButton} from '../../components/button';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';

export const NewStory: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const { record } = useStores();
  
  const [hasAudioPermission, setHasAudioPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [recordURI, setRecordURI] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  const isFocused = useIsFocused();
  
  const start = useCallback(async () => {
    requestPermission();
  }, []);
  
  useEffect(() => {
    start();

    return () => {
      if(camera) {
        camera.stopRecording();
      }
    };
  }, []);
  
  const requestPermission = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === 'granted');
    const audioStatus = await Camera.requestMicrophonePermissionsAsync();
    setHasAudioPermission(audioStatus.status === 'granted');
  }
  
  // reccord the video
  const takeVideo = async () => {
    if(camera){
      const data = await camera.recordAsync()
      setRecordURI(data.uri);
      record.set(data.uri);
      console.log(data.uri);
    }
  }
  
  const stopVideo = async () => {
    await camera.stopRecording();

    nav.push('SaveStory', {record: recordURI});
  }
  
  if (hasCameraPermission === null || hasAudioPermission === null) {
    return <BButton
      marginV-s1
      label={t.do('Autoriser caméra')}
      onPress={() => requestPermission()}
    />;
  }
  
  if (hasCameraPermission === false || hasAudioPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  return (          
    <View style={{ flex: 1}}>
      { isFocused &&  
        <View style={styles.cameraContainer}>
          <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'4:3'} 
          />
        </View>
      }
      <Button
        title="Flip Video"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
            );
      }}>
      </Button>
      <Button title="Take video" onPress={() => takeVideo()} />
      <Button title="Stop Video" onPress={() => stopVideo()} />
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
      cameraContainer: {
        flex: 1,
        flexDirection: 'row'
      },
      fixedRatio:{
        flex: 1,
        aspectRatio: 1
      },
      video: {
        alignSelf: 'center',
        width: 350,
        height: 220,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });