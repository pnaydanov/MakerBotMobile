/* @flow  */
import React, { Component } from 'react';
import { Header, Title, Left, Icon, Right, Button, Body } from 'native-base';

type Props = {
  openDrawer: Function,
  title: String,
}

class HomeHeader extends Component<Props> {
  render() {
    const { openDrawer, title } = this.props;

    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => openDrawer()}>
            <Icon name="menu" ios="ios-menu" />
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