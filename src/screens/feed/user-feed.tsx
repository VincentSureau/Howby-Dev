import React, { useEffect, useState } from 'react';
import {StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import {View} from 'react-native-ui-lib';
import {useServices} from '../../services';

import PostCard, { PostType } from '../../components/post/post-card';

// User Feed components
import HeaderComponent from '../../components/userFeedComponents/HeaderComponent';
import StoriesSlider from '../../components/userFeedComponents/StoriesSlider'
import { If } from '@kanzitelli/if-component';

type UserFeedProps = {
  company: any;
};

const posts = [
  {
    id: 1,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    img: {
      uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
    },
    user: {
      name: 'Matthieu Blanc',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: false,
    company: {
      name: 'Escape Game',
      city: 'La salle d\'or',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    }
  },
  {
    id: 2,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    user: {
      name: 'David Blondel',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: true,
    company: {
      name: 'Escape Game',
      city: 'La salle d\'or',
    }
  },
  {
    id: 3,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    user: {
      name: 'David Blondel',
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: true,
  },
  {
    id: 4,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    img: {
      uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
    },
    user: {
      name: 'Vincent Sureau',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: true,
  },
  {
    id: 5,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    img: {
      uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
    },
    user: {
      name: 'Matthieu Blanc',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: false,
    company: {
      name: 'Escape Game',
      city: 'La salle d\'or',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    }
  },
  {
    id: 6,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    user: {
      name: 'David Blondel',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: true,
    company: {
      name: 'Escape Game',
      city: 'La salle d\'or',
    }
  },
  {
    id: 7,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    user: {
      name: 'David Blondel',
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: true,
  },
  {
    id: 8,
    content: 'lorem ipsum dolor sit amet, consectetur adip',
    img: {
      uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
    },
    user: {
      name: 'Vincent Sureau',
      img: {
        uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
      },
    },
    tags: [
      "lorem",
      "ipsum",
      "dolor",
    ],
    isLiked: true,
  }
];

const renderPost = ({item}: {item: PostType}) => <PostCard post={item} />;

export const UserFeed: React.FC<UserFeedProps> = ({company}: UserFeedProps) => {
  const {nav, t, api} = useServices();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {setIsLoading(false);}, 2000);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container} paddingH-s2>
          <HeaderComponent />
          <StoriesSlider />
          <View flex bg-bgColor paddingV-s2>
            <If
              _={loading}
              _then={() => <ActivityIndicator />}
              _else={
                <FlatList
                  data={posts}
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
