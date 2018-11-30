/* @flow */
import React, { Component } from 'react';
import { Container } from 'native-base';

import List from 'features/list';
import Animation from 'components/Animation';
import Header from 'components/Header';

type Props = {}
class RepoScreen extends Component<Props> {
  render() {
    return (
      <Container>
        <Header />
        <Animation style={{ marginTop: 20 }} />
        <List />
      </Container>
    );
  }
}

export default RepoScreen;