import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import {View, Text, TouchableOpacity, Card, Button, Avatar} from 'react-native-ui-lib';
import { useServices } from '../../services';
import { Icon } from '../icon';

export type PostType = {
  id: number;
  content: string;
  img?: {
    uri: string;
  }
  user: {
    name: string;
    img?: {
      uri: string;
    }
  }
  tags: string[];
  isLiked: boolean;
  company?: {
    name: string,
    city: string,
    img?: {
      uri: string,
    },
  }
}

interface PostCardProps {
  post: PostType;
}

const PostCard: React.FC<PostCardProps> = ({post}: PostCardProps) => {
  const {nav, t, api} = useServices();

  return (
    <Card
      key={post.id}
      style={{marginBottom: 15}}
      onPress={() => nav.push('FeedDetails', { companyId: post.id.toString() })}
    >
      <View row padding-10 centerV>
        {post.user.img && (
          <Avatar 
            size={30}
            source={{uri: post.user.img.uri }} 
            name={post.user.name}
          />
        ) || (
          <Avatar 
            size={30}
            name={post.user.name}
          />
        )}
        <Text text70 $textDefault marginL-10>
            {post.user.name}
        </Text>
      </View>
      {post.company && (
        <View row padding-10 centerV>
        {post.company.img && (
            <Avatar 
              imageStyle={{borderRadius: 0}}
              size={40}
              source={{uri: post.company.img.uri }}
              name={post.company.name}
            />
          ) || (
            <Avatar 
              imageStyle={{borderRadius: 0}}
              containerStyle={{borderRadius: 0}}
              size={40}
              name={post.company.name}
            />
          )}
          <Text text65 $textDefault marginL-10>
              {post.company.name} à {post.company.city}
          </Text>
        </View>
      )}
      {post.img && (
        <Card.Section
          imageSource={{
            uri: post.img.uri
          }}
          imageStyle={{width: '100%', height: 200}}
          imageProps={{cover: true}}
        />
      )}
      <View padding-10>
        {post.content && (
          <Text text70 $textDefault>
            {post.content}
          </Text>
        )}

        <View>
          {post.tags && (
            <View row left>
              {post.tags.map((tag, index) => (
                <Text key={index} text90 $textDefault marginR-5>
                  #{tag}
                </Text>
              ))}
            </View>
          )}
          <View row right>
            <Button
              text90
              link
              iconSource={() => (
                <Icon name={post.isLiked ? 'heart': 'heart-outline'} />
              )}
              label="like"
            />
            <Button
              text90
              link
              iconSource={() => (
                <Icon name='chatbox-outline' />
              )}
              label="comment"
            />
            <Button text90 link iconSource={() => <Icon name="share-outline" />} label="Share"/>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1
  },
  img: {
    width: 50,
    height: 50,
  },
  title:{
    fontSize: 17,
    marginTop: -15,
    marginLeft: 10,
    marginBottom: 2
  },
  bottomComponents: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    textAlignVertical: 'center'
  },
  favoriBtn:{
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "red",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
  
  },
  exclusifBtn: {
    fontWeight: "bold",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
   color: "#fff",
    backgroundColor: "#c48d52",
  },
  rating:{
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#efefef",
  },
  posts:{
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    backgroundColor: "#efefef",
    paddingTop: 5,

  },
  inline: {
    flexDirection: "row",
  },
});