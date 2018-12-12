import React, { Component } from 'react';
import { View, Dimensions, Animated } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import PropTypes from 'prop-types';

import styles from './style';
const { height } = Dimensions.get('window');

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this._draggedValue = new Animated.Value(-120);
  }

  static propTypes = {
    content: PropTypes.element,
    children: PropTypes.element,
    draggableRange: PropTypes.object,
  }

  static defaultProps = {
    draggableRange: {
      top: height * 0.80,
      bottom: 80,
    },
  }

  render() {
    const { draggableRange, content, children } = this.props;
    return (
      <View style={styles.container}>
        {content}
        <SlidingUpPanel
          visible
          startCollapsed
          showBackdrop={false}
          ref={r => { this._panel = r; }}
          draggableRange={draggableRange}
          onDrag={v => this._draggedValue.setValue(v)}>
          {children}
        </SlidingUpPanel>
      </View>
    );
  }
}

export default BottomSheet;
