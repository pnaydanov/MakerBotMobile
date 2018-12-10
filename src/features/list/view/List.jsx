/* @flow */
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as listActions } from 'features/list/redux';
import styles from './styles';

type Repos = {
  name: string,
}

type Props = {
  repos: Repos,
  getRepos: Function,
};

class RepoList extends Component<Props> {
  componentDidMount() {
    this.props.getRepos();
  }

  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
}

function mapStateToProps(state) {
  let storedRepositories = state.list.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getRepos: listActions.getRepos,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);