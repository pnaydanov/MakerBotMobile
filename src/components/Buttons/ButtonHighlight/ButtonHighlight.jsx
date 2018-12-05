/* @flow */
import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

import ownStyles from './style';

type Props = {
  onPress: Function,
  styles: Object,
  text: string,
}

class ButtonHighlight extends Component<Props> {
  render() {
    const { onPress, styles, text } = this.props;
    return (
      <TouchableHighlight
        style={{ ...ownStyles.button, ...styles }}
        onPress={onPress}>
        <Text style={ownStyles.text}>{text}</Text>
      </TouchableHighlight>
    );
  }
}

export default ButtonHighlight;