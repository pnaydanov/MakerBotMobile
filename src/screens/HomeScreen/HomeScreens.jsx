/* @flow */
import React, { Component } from 'react';
import { Container, Button, Body, Content, Text, Card, CardItem } from 'native-base';

import Header from 'components/Header';
import Carousel from 'components/Carousel';
import styles from './styles';

const images = [
  { source: 'https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg' },
  { source: 'https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg' },
  { source: 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg' },
  { source: 'https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg' },
];

type Props = {
  navigation: {
    openDrawer: Function,
    navigate: Function,
    state: Object,
  },
};

class HomeScreen extends Component<Props> {
  render() {
    const { navigation: { openDrawer, navigate, state } } = this.props;
    return (
      <Container>
        <Header openDrawer={openDrawer} title={state.routeName} />
        <Content padder>
          <Carousel images={images} />
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full
            rounded
            dark
            style={styles.commonMargin}
            onPress={() => navigate('Chat')}>
            <Text>Chat With People</Text>
          </Button>
          <Button full
            rounded
            primary
            style={styles.commonMargin}
            onPress={() => navigate('Profile')}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;