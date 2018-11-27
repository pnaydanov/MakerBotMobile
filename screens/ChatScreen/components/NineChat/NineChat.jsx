import React, { Component } from "react";
import { Container, Content, Input, Item, Label, Button, Text } from "native-base";

import Header from 'components/Header';
// TODO: вынести стили в отдельный файл
class NineChat extends Component {
  render() {
    const { navigation: { openDrawer, navigate } } = this.props;
    return (
      <Container>
        <Header openDrawer={openDrawer} title="Nine Chat" />
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Nine Chat</Label>
            <Input />
          </Item>
          <Button rounded danger
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => navigate("Profile")}>
            <Text>Goto Lucy Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default NineChat;
