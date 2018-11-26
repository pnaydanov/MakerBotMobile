import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as listActions } from './redux';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('relferreira');
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    repos: storedRepositories,
  };
};

function mapDispatchToProps(dispatch) {
  const actions = {
    listRepos: listActions.listRepos,
  }
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);