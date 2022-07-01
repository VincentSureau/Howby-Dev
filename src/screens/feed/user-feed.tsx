import React, { useCallback, useEffect, useState } from 'react';
import {StyleSheet, ScrollView, FlatList, ActivityIndicator, Alert} from 'react-native';
import {View} from 'react-native-ui-lib';
import {useServices} from '../../services';

import PostCard, { PostType } from '../../components/post/post-card';

// User Feed components
import HeaderComponent from '../../components/userFeedComponents/HeaderComponent';
import StoriesSlider from '../../components/userFeedComponents/StoriesSlider'
import { If } from '@kanzitelli/if-component';
import axios, { CancelTokenSource } from 'axios';
import { useStores } from '../../stores';

type UserFeedProps = {
  user?: any;
};

const renderPost = ({item}: {item: PostType}) => <PostCard post={item} />;

export const UserFeed: React.FC<UserFeedProps> = () => {
  const {nav, t, api} = useServices();

  const {userpost} = useStores();

  const start = useCallback(() : {cancelTokenSource : CancelTokenSource} => {
    const cancelTokenSource = axios.CancelToken.source();

    api.userpost
      .get({cancelToken: cancelTokenSource.token})
      .catch(error => {
        if (!axios.isCancel(error)) {
          Alert.alert('Error', 'There was a problem fetching data :(');
        }
      })
    ;

    return {
      cancelTokenSource,
    };

  }, [api.userpost]);

  useEffect(() => {
    const { cancelTokenSource } = start();

    return () => {
      cancelTokenSource.cancel();
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.container} paddingH-s2>
          <HeaderComponent />
          <StoriesSlider />
          <View flex bg-bgColor paddingV-s2>
            <If
              _={userpost.loading}
              _then={() => <ActivityIndicator />}
              _else={
                <FlatList
                  data={userpost.value}
                  renderItem={renderPost}
                  keyExtractor={item => item.id}
                />
              }
            />
        </View>
          {/* <MessageSectionComponent />
          <PostSectionComponent /> */}
          {/* <BottomSectionComponent /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
