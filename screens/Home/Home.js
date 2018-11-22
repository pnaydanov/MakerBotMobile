import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Icon, Text } from 'native-base';

class Home extends Component {
  render() {
    const { onClickMenu } = this.props;
    return (
      <Container>
          <Header>
            <Left>
              <Button transparent onPress={onClickMenu}>
                <Icon name='menu' ios="ios-menu" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <Text>
              This is Content Section
            </Text>
          </Content>
          <Footer>
            <FooterTab>
              <Button full>
                <Text>Footer</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}

export default Home;
