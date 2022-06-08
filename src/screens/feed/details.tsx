import React, {useCallback, useEffect} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet, StatusBar, FlatList} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';
import axios, { CancelTokenSource } from 'axios';
import {useServices} from '../../services';
import {useStores} from '../../stores';
import { useRoute } from '@react-navigation/native';
import { CompanyDetails } from '../../components/company/company-details';

export const FeedDetails: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {companySingle} = useStores();
  const route = useRoute();

  const { companyId } = route.params;

  // console.log(companyId);

  const start = useCallback(() : {cancelTokenSource : CancelTokenSource} => {
    const cancelTokenSource = axios.CancelToken.source();

    api.company
      .getOne({cancelToken: cancelTokenSource.token, id: companyId})
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

  return (
    <View flex bg-bgColor>
      <If
        _={companySingle.loading}
        _then={() => <ActivityIndicator />}
        _else={<CompanyDetails company={companySingle.value} />}
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