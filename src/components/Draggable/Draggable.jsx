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

    this.panResponder = this._createPanResponder();
  }

  render() {
    const { pan } = this.state;
    const panStyle = { transform: pan.getTranslateTransform() };
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle]}>
        {this.props.children}
      </Animated.View>
    );
  }

  _createPanResponder() {
    const { pan } = this.state;

    return PanResponder.create({
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
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          friction: 5,
        }).start();
      },
    });
  }
}

export default Draggable;