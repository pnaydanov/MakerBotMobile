import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Card, CardItem, Content, Right, Icon, Button, Text } from 'native-base';

import TopHeader from 'components/Header';

class Profile extends Component {
  componentDidMount() {
    Alert.alert('No Users Found', 'Oops, Looks like you are not signed in');
  }

  render() {
    const { navigation: { openDrawer, navigate } } = this.props;
    return (
      <Container>
        <TopHeader title="Header" openDrawer={openDrawer} />
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" ios="ios-paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" ios="ios-close" />
              </Right>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => navigate('EditScreenOne')}>
            <Text>Goto EditScreen One</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Profile;