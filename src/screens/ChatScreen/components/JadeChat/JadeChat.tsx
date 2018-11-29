import React, { Component } from "react";
import { Container, Body, Content, Input, Item, Label, Button, Text } from "native-base";

import Header from 'components/Header'
// TODO: вынести стили в отдельный файл
class JadeChat extends Component {
  render() {
    const { navigation: { openDrawer, navigate } } = this.props;
    return (
      <Container>
        <Header openDrawer={openDrawer} title="Jade Chat" />
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Jade Chat</Label>
            <Input />
          </Item>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => navigate("Profile")}>
            <Text>Goto Jade Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default JadeChat;
