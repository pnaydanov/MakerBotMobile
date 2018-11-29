/* @flow */
import React, { Component } from 'react';
import { Container } from 'native-base';

import List from 'features/list';

type Props = {}
class RepoScreen extends Component<Props> {
  render() {
    return (
      <Container>
        <List />
      </Container>
    );
  }
}

export default RepoScreen;