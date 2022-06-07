import React from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/Ionicons';
import {useServices} from '../../services';
import {Searchbar} from 'react-native-paper';

// User Feed components
import HeaderComponent from '../../components/userFeedComponents/HeaderComponent';
import MessageSectionComponent from '../../components/userFeedComponents/MessageSectionComponent';
import PostSectionComponent from '../../components/userFeedComponents/PostSectionComponent';
import BottomSectionComponent from '../../components/userFeedComponents/BottomSectionComponent';

type CompanyDetailsProps = {
  company: any;
};

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({company}: CompanyDetailsProps) => {
  const {nav, t, api} = useServices();

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HeaderComponent />
        <MessageSectionComponent />
        <PostSectionComponent />
        <BottomSectionComponent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
