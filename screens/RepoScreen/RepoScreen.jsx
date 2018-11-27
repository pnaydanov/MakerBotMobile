import React, { Component } from "react";
import { Container } from "native-base";

import List from 'features/list';

class RepoScreen extends Component {
  render() {
    return (
      <Container>
        <List />
      </Container>
    );
  }
}

export default RepoScreen;