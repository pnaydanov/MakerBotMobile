import React, { Component } from 'react';
import { View, PanResponder, Animated } from 'react-native';
import styles from './style';

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
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
    const { pan, opacity } = this.state;
    const panStyle = { transform: pan.getTranslateTransform() };
    return (
      <View style={{ width: '20%', alignItems: 'center' }}>
        <View style={{ position: 'absolute', zIndex: 1000 }}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle, { opacity }]}
          />
        </View>
      </View>
    );
  }
}

export default Draggable;