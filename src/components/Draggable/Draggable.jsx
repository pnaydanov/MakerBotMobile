import React, { Component } from 'react';
import { PanResponder, Animated } from 'react-native';
import styles from './style';

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
    };
  }

  componentWillMount() {
    const { pan } = this.state;
    this._val = { x: 0, y: 0 };
    pan.addListener(value => this._val = value);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        pan.setOffset({
          x: this._val.x,
          y: this._val.y,
        });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null, { dx: pan.x, dy: pan.y },
      ]),
    });
  }

  render() {
    const { pan } = this.state;
    const panStyle = { transform: pan.getTranslateTransform() };
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, styles.circle, { zIndex: 10, position: 'absolute' }]}
      />
    );
  }
}

export default Draggable;