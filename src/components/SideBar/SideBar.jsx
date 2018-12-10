/* @flow */
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, List, ListItem, Header, Body, Title } from 'native-base';

const routes = ['Home', 'Chat', 'Profile', 'Repo', 'Animation', 'Touchable', 'Drag'];

type Props = {
  navigation: {
    navigate: Function,
  }
}

class SideBar extends Component<Props> {
  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Menu</Title>
          </Body>
        </Header>
        <Content>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
            }}
            style={{
              height: 120,
              width: '100%',
              alignSelf: 'stretch',
              position: 'absolute',
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: 'absolute',
              alignSelf: 'center',
              top: 20,
            }}
            source={{
              uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png',
            }}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => (
              <ListItem
                button
                onPress={() => navigate(data)}>
                <Text>{data}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;