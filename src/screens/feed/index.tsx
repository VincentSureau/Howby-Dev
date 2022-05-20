import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet, StatusBar, FlatList} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';
import axios, { CancelTokenSource } from 'axios';
import {useServices} from '../../services';
import {useStores} from '../../stores';

export const FeedIndex: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {company, ui} = useStores();

  const start = useCallback(() : CancelTokenSource => {
    const cancelTokenSource = axios.CancelToken.source();

    api.company
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

  }, [api.company]);

  useEffect(() => {
    const { cancelTokenSource } = start();

    return () => {
      cancelTokenSource.cancel();
    }
  }, []);

  const Item = ({data}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{data.name}</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return(
      <Item data={item} />
    );
  };

  return (
    <View flex bg-bgColor>
      <If
        _={company.loading}
        _then={() => <ActivityIndicator />}
        _else={
          <FlatList
            data={company.value}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
      }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});