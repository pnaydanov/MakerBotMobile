/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';

import { ButtonHighlight } from 'components/Buttons';
import styles from './style';

type Props = {
  styles: Object,
}
class TouchabelScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ButtonHighlight
          onPress={() => console.log('press')}
          styles={styles.button}
          text="Touch Here"
        />
      </View>
    );
  }
}

export default TouchabelScreen;