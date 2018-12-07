import React, { Component } from 'react';
import { PanResponder, Animated } from 'react-native';
import PropTypes from 'prop-types';

class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(), // Координаты перемещения
      scale: new Animated.Value(1), // Изменение размера в момент перетаскивания
    };
  }

  static propTypes = {
    children: PropTypes.object.isRequired, // Перемещаемый элемент
    scaleCoef: PropTypes.number, // Коэффициент скалирования при перемещение
  }

  static defaultProps = {
    scaleCoef: 1,
  }

  componentWillMount() {
    this.panResponder = this._createPanResponder();
  }

  render() {
    const { pan, scale } = this.state;

    let rotate = '0deg';
    let [translateX, translateY] = [pan.x, pan.y];
    let panStyle = { transform: [{ translateX }, { translateY }, { rotate }, { scale }] };
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[panStyle, { zIndex: 10 }]}>
        {this.props.children}
      </Animated.View>
    );
  }

  _createPanResponder() {
    const { scaleCoef } = this.props;
    const { pan, scale } = this.state;
    const panResponder = PanResponder.create({
      // Разрешение для ОС на перемещение
      onStartShouldSetPanResponder: () => true,

      // Инициализация перемещения
      onPanResponderGrant: () => {
        pan.setOffset({ x: pan.x._value, y: pan.y._value });
        pan.setValue({ x: 0, y: 0 });

        // Анимация скалирования при захвате элемента
        Animated.spring(scale, { toValue: scaleCoef, friction: 3 }).start();
      },

      // Процесс перемещения
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),

      // Конец перемещения
      onPanResponderRelease: () => {
        // Сглаживание смещения
        this.state.pan.flattenOffset();
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, friction: 5 }).start();

        // Анимация скалирования при прекращение перемещения
        Animated.spring(scale, { toValue: 1, friction: 3 }).start();
      },
    });

    return panResponder;
  }
}

export default Draggable;