import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-ui-lib';


const Img = {
  uri: 'https://images.unsplash.com/photo-1521855346-ac915e77ac23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGxlJTIwZCdvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
};

const MessageSectionComponent = () => {
  return (
    <>
      <View>
        <View style={styles.inline}>
          <Icon name="person-circle" size={30} />
          <Text style={{marginLeft: 10, color: 'blue'}}>David Blondel</Text>
        </View>
      </View>
      <View style={styles.inline}>
        <Image source={Img} style={{width: 50, height: 50}} />
        <View>
          <Text style={styles.messageLocation}>Escape Game à La salle d'or</Text>
          <Text style={styles.messageUsername}>Clémentine</Text>
        </View>
      </View>
      <View>
        <Text style={styles.messageContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas aliquam distinctio,
          cumque accusamus tempore asperiores{' '}
        </Text>
      </View>
      <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
        <View>
          <Text>#exemple de hashtag</Text>
        </View>

        <View style={styles.icons}>
          <TouchableOpacity style = {{marginRight: 10}}>
            <Icon name="heart-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style = {{marginRight: 10}}>
            <Icon name="chatbox-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style = {{marginRight: 10}}>
            <Icon name="caret-forward-outline" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  messageLocation: {
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  messageUsername: {
    fontWeight: 'bold',
    color: 'brown',
    marginLeft: 10,
  },
  messageContent: {
    color: 'gray',
  },
  icons: {
    flexDirection: 'row',
   
  },
});
export default MessageSectionComponent;
