import {ModalScreenLayouts, ScreenLayouts, TabScreenLayouts} from '../services/navigation/types';

import {FeedIndex} from './feed/index';
import {ChatHome} from './chat/home';
import {Search} from './search';
import {Story} from './story';
import {NewStory} from './story/new-story';
import {Notification} from './notification';
import {Main} from './main';
import {Settings} from './settings';
import {Example} from './screen-sample';
import {genRootNavigator, genStackNavigator, genTabNavigator} from '../services/navigation/help';
import {screenDefaultOptions, tabBarDefaultOptions} from '../services/navigation/options';
import { FeedDetails } from './feed/details';
import { Login } from './security/login';
import { Register } from './security/register';
import { HomeOffline } from './security/home-offline';
import { UserProfile } from './feed/user-profile';

// Describe your screens here
export type Tabs = 'Settings' | 'Feed' | 'Chat' | 'Search' | 'Story' | 'Notification';
export type Modal = 'ExampleModal';
export type Screen = 'Example' | 'Settings' | 'FeedIndex' | 'FeedDetails' | 'ChatHome' | 'Search' | 'Story' | 'NewStory' | 'Notification' | 'Login' | 'Register' | 'HomeOffline' | 'UserProfile';

export type ModalProps = {
  ExampleModal: undefined;
};

export type ScreenProps = {
  Main: undefined;
  Example: ExampleScreenProps;
  Settings: undefined;
  Feed: undefined;
  FeedIndex: undefined;
  Chat: undefined;
  Search: undefined;
  Story: undefined;
  Notification: undefined;
  FeedDetails: {
    companyId: string;
  };
  Login: undefined;
  Register: undefined;
  HomeOffline: undefined;
  UserProfile: undefined;
} & ModalProps;

// Screens
const loggedScreen = {
  Example: {
    name: 'Example',
    component: Example,
    options: () => ({
      title: 'Example',
      ...screenDefaultOptions(),
    }),
  },
  Settings: {
    name: 'Settings',
    component: Settings,
    options: () => ({
      title: 'Settings',
      ...screenDefaultOptions(),
    }),
  },
  FeedIndex: {
    name: 'FeedIndex',
    component: FeedIndex,
    options: () => ({
      title: 'Feed',
      ...screenDefaultOptions(),
    }),
  },
  FeedDetails: {
    name: 'FeedDetails',
    component: FeedDetails,
    options: () => ({
      title: 'Feed Detail',
      ...screenDefaultOptions(),
    }),
  },
  NewStory: {
    name: 'NewStory',
    component: NewStory,
    options: () => ({
      title: 'New Story',
      ...screenDefaultOptions(),
    }),
  },
  ChatHome: {
    name: 'Chat',
    component: ChatHome,
    options: () => ({
      title: 'Chat',
      ...screenDefaultOptions(),
    }),
  },
  Search: {
    name: 'Search',
    component: Search,
    options: () => ({
      title: 'Search',
      ...screenDefaultOptions(),
    }),
  },
  Story: {
    name: 'Story',
    component: Story,
    options: () => ({
      title: 'Story',
      ...screenDefaultOptions(),
    }),
  },
  Notification: {
    name: 'Notification',
    component: Notification,
    options: () => ({
      title: 'Notification',
      ...screenDefaultOptions(),
    }),
  },
  UserProfile: {
    name: 'UserProfile',
    component: UserProfile,
    options: () => ({
      title: 'User Profile',
      ...screenDefaultOptions(),
    }),
  },
};

const offlineScreens = {
  Login: {
    name: 'Login',
    component: Login,
    options: () => ({
      title: 'Login',
      ...screenDefaultOptions(),
      // headerShown: false,
    }),
  },
  Register: {
    name: 'Register',
    component: Register,
    options: () => ({
      title: 'Register',
      ...screenDefaultOptions(),
    }),
  },
  HomeOffline: {
    name: 'HomeOffline',
    component: HomeOffline,
    options: () => ({
      title: 'Home Offline',
      ...screenDefaultOptions(),
      headerShown: false,
    }),
  }
}
const screens: ScreenLayouts = {
  ...loggedScreen,
  ...offlineScreens,
};

const SettingsStack = () => genStackNavigator([screens.Settings]);
const ExampleModalStack = () => genStackNavigator([screens.Example]);
const FeedStack = () => genStackNavigator([screens.HomeOffline, screens.Register, screens.Login, screens.FeedIndex, screens.FeedDetails, screens.UserProfile]);
const ChatStack = () => genStackNavigator([screens.ChatHome]);
const SearchStack = () => genStackNavigator([screens.Search]);
const StoryStack = () => genStackNavigator([screens.NewStory]);
const NotificationStack = () => genStackNavigator([screens.Notification, screens.Example]);

// Tabs
const tabs: TabScreenLayouts = {
  Feed: {
    name: 'FeedNavigator',
    component: FeedStack,
    options: () => ({
      title: 'Feed',
      ...tabBarDefaultOptions('FeedNavigator'),
    }),
  },
  Chat: {
    name: 'ChatNavigator',
    component: ChatStack,
    options: () => ({
      title: 'Chat',
      ...tabBarDefaultOptions('ChatNavigator'),
    }),
  },
  Search: {
    name: 'SearchNavigator',
    component: SearchStack,
    options: () => ({
      title: 'Search',
      ...tabBarDefaultOptions('SearchNavigator'),
    }),
  },
  Story: {
    name: 'StoryNavigator',
    component: StoryStack,
    options: () => ({
      title: 'Story',
      ...tabBarDefaultOptions('StoryNavigator'),
    }),
  },
  Notification: {
    name: 'NotificationNavigator',
    component: NotificationStack,
    options: () => ({
      title: 'Notification',
      ...tabBarDefaultOptions('NotificationNavigator'),
    }),
  },
  Settings: {
    name: 'SettingsNavigator',
    component: SettingsStack,
    options: () => ({
      title: 'Settings',
      ...tabBarDefaultOptions('SettingsNavigator'),
    }),
  },
};

const TabNavigator = () => genTabNavigator([tabs.Feed, tabs.Chat, tabs.Search, tabs.Story, tabs.Notification, tabs.Settings]);

// Modals
const modals: ModalScreenLayouts = {
  ExampleModal: {
    name: 'ExampleModal',
    component: ExampleModalStack,
    options: () => ({
      title: 'ExampleModal',
    }),
  },
};

// Root Navigator
export const RootNavigator = (): JSX.Element =>
  genRootNavigator(TabNavigator, [modals.ExampleModal]);
