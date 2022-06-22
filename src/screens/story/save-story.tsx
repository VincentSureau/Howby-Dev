import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, TouchableOpacity, StyleSheet, Platform, Button} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';
import { Video } from 'expo-av';
import { useRoute } from '@react-navigation/native';

export const SaveStory: React.FC = observer(() => {
  const video = React.useRef(null);
  const {nav, t, api} = useServices();
  // const {record} = useStores();
  const route = useRoute();

  const { record } = route.params;
  const [status, setStatus] = React.useState({});
    
  const start = useCallback(async () => {
    // requestPermission();
    console.log('from savestory : ' + record);
  }, []);
  
  useEffect(() => {
    start();
  }, []);
  
  // if video is emty, navigate to new story
  // if(record.value == null) {
  //   nav.push('NewStory');
  // }
  
  return (          
    <View style={{ flex: 1}}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: record,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={'Retour'}
            onPress={async () => {
              await video.current.pauseAsync();
              // todo: delete video
              // record.reset();
              nav.push('NewStory');
            }}
          />
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View>
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