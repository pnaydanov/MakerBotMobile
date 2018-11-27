import React, { Component } from "react";
import { Container, Body, Content, Input, Item, Label, Button, Text } from "native-base";

import Header from 'components/Header';
// TODO: вынести стили в отдельный файл
class LucyChat extends Component {
  render() {
    const { navigation: { openDrawer, navigate } } = this.props;
    return (
      <Container>
        <Header openDrawer={openDrawer} title="Lucy Chat" />
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Lucy Chat</Label>
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

export default LucyChat;
