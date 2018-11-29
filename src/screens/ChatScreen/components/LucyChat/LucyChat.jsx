/* @flow */
import React, { Component } from 'react';
import { Container, Content, Input, Item, Label, Button, Text } from 'native-base';

import Header from 'components/Header';
import styles from './styles';

type Props = {
  navigation: {
    openDrawer: Function,
    navigate: Function,
  },
};

class LucyChat extends Component<Props> {
  render() {
    const { navigation: { openDrawer, navigate } } = this.props;
    return (
      <Container>
        <Header openDrawer={openDrawer} title="Lucy Chat" />
        <Content padder>
          <Item floatingLabel style={styles.title}>
            <Label>Lucy Chat</Label>
            <Input />
          </Item>
          <Button
            rounded
            danger
            style={styles.navButton}
            onPress={() => navigate('Profile')}>
            <Text>Goto Lucy Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LucyChat;
