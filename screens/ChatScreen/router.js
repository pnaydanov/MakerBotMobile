import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Button, Text, Icon, Footer, FooterTab } from 'native-base';

import LucyChat from './components/LucyChat';
import JadeChat from './components/JadeChat';
import NineChat from './components/NineChat';

const MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: { screen: LucyChat },
    NineChat: { screen: NineChat },
    JadeChat: { screen: JadeChat },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: ({ navigation: { navigate, state } }) => (
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={state.index === 0}
            onPress={() => navigate('LucyChat')}>
            <Icon name="bowtie" ios="ios-bowtie" />
            <Text>Lucy</Text>
          </Button>
          <Button
            vertical
            active={state.index === 1}
            onPress={() => navigate('NineChat')}>
            <Icon name="briefcase" ios="ios-briefcase" />
            <Text>Nine</Text>
          </Button>
          <Button
            vertical
            active={state.index === 2}
            onPress={() => navigate('JadeChat')}>
            <Icon name="headset" ios="ios-headset" />
            <Text>Jade</Text>
          </Button>
        </FooterTab>
      </Footer>
    ),
  },
);

export default MainScreenNavigator;