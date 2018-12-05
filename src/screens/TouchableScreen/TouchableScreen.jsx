/* @flow */
import React, { Component } from 'react';
import { Container, Header, Content } from 'native-base';

import { ButtonHighlight } from 'components/Buttons';
import Input from 'components/Input';
import styles from './style';

type Props = {
  styles: Object,
}
class TouchabelScreen extends Component<Props> {
  render() {
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Input />
          <ButtonHighlight
            onPress={() => console.log('press')}
            styles={styles.button}
            text="Touch Here"
          />
        </Content>
      </Container>
    );
  }
}

export default TouchabelScreen;