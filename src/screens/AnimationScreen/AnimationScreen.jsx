/* @flow */
import React, { Component } from 'react';
import { Container } from 'native-base';

import Header from 'components/Header';
import Animation from 'components/Animation';

type Props = {
  navigation: {
    openDrawer: Function,
    navigate: Function,
    state: Object,
  },
};

class AnimationScreen extends Component<Props> {
  render() {
    const { navigation: { openDrawer, state } } = this.props;
    return (
      <Container>
        <Header openDrawer={openDrawer} title={state.routeName} />
        <Animation />
      </Container>
    );
  }
}

export default AnimationScreen;