import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as boardActions } from 'features/list/redux';

class Board extends Component {
  render() {
    return (
      <View>
        <Text> i am board</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.board.lists,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addList: boardActions.addList,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);