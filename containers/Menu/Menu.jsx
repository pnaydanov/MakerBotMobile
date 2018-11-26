import React, { Component } from 'react';
import { Container, Header, Title, Content, Body, Text } from 'native-base';

class Menu extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Menu</Title>
          </Body>
        </Header>
        <Content>
          <Text>Содержимое</Text>
        </Content>
      </Container>
    );
  }
}

export default Menu;
