import React, { Component } from 'react';
import { Text, View } from 'native-base';

import styles from './style';

class Task extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.task}>
        <Text>{text}</Text>
      </View>
    );
  }
}

export default Task;