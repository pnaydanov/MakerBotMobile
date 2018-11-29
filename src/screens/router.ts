import React from 'react';
// import SideBar from 'components/SideBar';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MainScreenNavigator from './ChatScreen/router';
import ProfileScreen from './ProfileScreen';
import RepoScreen from './RepoScreen';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: ProfileScreen },
    Repo: { screen: RepoScreen },
  },
  {
    // contentComponent: props => <SideBar {...props} />,
  },
);
export default HomeScreenRouter;
