import React, { Component } from "react";
import { Header, Title, Left, Icon, Right, Button, Body } from "native-base";

class HomeHeader extends Component {
  render() {
    const { openDrawer, title } = this.props;

    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => openDrawer()}>
            <Icon name="menu" ios='ios-menu' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

export default HomeHeader;