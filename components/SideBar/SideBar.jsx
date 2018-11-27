import React, { Component } from "react";
import { Container, Content, Text, List, ListItem,
  Icon, Header, Body, Title } from "native-base";

const routes = ["Home", "Chat", "Profile", "Repo"];

class SideBar extends Component {
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
          <Icon
            name='home'
            ios='ios-home'
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;