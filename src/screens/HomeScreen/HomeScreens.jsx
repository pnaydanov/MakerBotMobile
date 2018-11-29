/* @flow */
import React, { Component } from 'react';
import { Container, Button, Body, Content, Text, Card, CardItem } from 'native-base';

import Header from 'components/Header';
import styles from './styles';

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