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
import { UserFeed } from './feed/user-feed';
import { Teams } from './profil/teams';
import { SaveStory } from './story/save-story';
import { InnerProfile } from './profil/innerProfile';
import { Test } from './test/test';
import { ForgottenPassword } from './security/forgotten-password';
import { UserCreated } from './security/user_created';

// Describe your screens here
export type Tabs = 'Settings' | 'Feed' | 'Chat' | 'Search' | 'StoryNavigator' | 'Notification';
export type Modal = 'ExampleModal';
export type Screen = 'Example' | 'Settings' | 'UserFeed' | 'FeedIndex' | 'FeedDetails' | 'ChatHome' | 'Search' | 'Story' | 'NewStory' | 'SaveStory' | 'NewStory' | 'Notification' | 'Login' | 'Register' | 'HomeOffline' | 'UserProfile' | 'Teams' | 'InnerProfile' | 'Test' | 'ForgottenPassword' | "UserCreated" ;

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
  NewStory: undefined;
  SaveStory: {
    record: string;
  };
  Notification: undefined;
  FeedDetails: {
    companyId: string;
  };
  Login: undefined;
  Register: undefined;
  ForgottenPassword: undefined;
  HomeOffline: undefined;
  Test: undefined;
  UserProfile: undefined;
  UserFeed: undefined;
  Teams: undefined;
  InnerProfile: undefined;
  UserCreated: {
    firstname: string;
  }
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
      headerShown: false,
    }),
  },
  SaveStory: {
    name: 'SaveStory',
    component: SaveStory,
    options: () => ({
      title: 'Save Story',
      ...screenDefaultOptions(),
      headerShown: false,
    })
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
  UserFeed: {
    name: 'UserFeed',
    component: UserFeed,
    options: () => ({
      title: 'User Feed',
      ...screenDefaultOptions(),
    }),
  },
  Teams: {
    name: 'Teams',
    component: Teams,
    options: () => ({
      title: 'User Teams',
      ...screenDefaultOptions(),
    }),
  },
  InnerProfile: {
    name: 'InnerProfile',
    component: InnerProfile,
    options: () => ({
      title: 'Inner Profile',
      ...screenDefaultOptions(),
    }),
  },
  Test: {
    name: 'Test',
    component: Test,
    options: () => ({
      title: 'Home Offline',
      ...screenDefaultOptions(),
      headerShown: false,
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
  },
  ForgottenPassword: {
    name: 'ForgottenPassword',
    component: ForgottenPassword,
    options: () => ({
      title: 'Forgotten Password',
      ...screenDefaultOptions(),
    }),
  },
  UserCreated: {
    name: 'UserCreated',
    component: UserCreated,
    options: () => ({
      title: 'User Created',
      ...screenDefaultOptions(),
    }),
  },
}

const screens: ScreenLayouts = {
  ...loggedScreen,
  ...offlineScreens,
};

const SettingsStack = () => genStackNavigator([screens.Settings, screens.Teams]);
const ExampleModalStack = () => genStackNavigator([screens.Example]);
const FeedStack = () => genStackNavigator([screens.Test, screens.Story, screens.Register, screens.Login, screens.FeedIndex, screens.FeedDetails, screens.UserProfile, screens.UserFeed, screens.Teams, screens.InnerProfile]);
const ChatStack = () => genStackNavigator([screens.ChatHome]);
const SearchStack = () => genStackNavigator([screens.Search]);
const StoryStack = () => genStackNavigator([screens.NewStory, screens.SaveStory, screens.FeedIndex]);
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
  StoryNavigator: {
    name: 'StoryNavigator',
    component: StoryStack,
    options: () => ({
      title: 'Story',
      ...tabBarDefaultOptions('StoryNavigator'),
      headerShown: false,
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

const TabNavigator = () => genTabNavigator([tabs.Feed, tabs.Chat, tabs.Search, tabs.StoryNavigator, tabs.Notification, tabs.Settings]);

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


const AuthStack = () => genStackNavigator([screens.HomeOffline, screens.Login, screens.Register, screens.ForgottenPassword, screens.UserCreated]);

// Auth Navigator
export const AuthNavigator = (): JSX.Element =>
  genRootNavigator(AuthStack, []);