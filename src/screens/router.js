import React from 'react';
import SideBar from 'components/SideBar';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MainScreenNavigator from './ChatScreen/router';
import ProfileScreen from './ProfileScreen';
import RepoScreen from './RepoScreen';
import AnimationScreen from './AnimationScreen';
import TouchableScreen from './TouchableScreen';
import ScheduleScreen from './ScheduleScreen';
import BottomSheetScreen from './BottomSheetScreen';

const HomeScreenRouter = createDrawerNavigator(
  {
    Schedule: { screen: ScheduleScreen },
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: ProfileScreen },
    Repo: { screen: RepoScreen },
    Animation: { screen: AnimationScreen },
    Touchable: { screen: TouchableScreen },
    BottomSheet: { screen: BottomSheetScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);
export default HomeScreenRouter;
