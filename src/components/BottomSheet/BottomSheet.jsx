import React, { Component } from 'react';
import { Dimensions, Animated } from 'react-native';
import { Container } from 'native-base';
import SlidingUpPanel from 'rn-sliding-up-panel';
import PropTypes from 'prop-types';

const { height } = Dimensions.get('window');

class BottomSheet extends Component {
  constructor(props) {
    super(props);
    this._draggedValue = new Animated.Value(-120);
  }

  static propTypes = {
    content: PropTypes.element,
    children: PropTypes.element,
    onRef: PropTypes.func.isRequired,
    draggableRange: PropTypes.object,
  }

  static defaultProps = {
    draggableRange: {
      top: height * 0.80,
      bottom: 80,
    },
  }

  componentDidMount() {
    // Возвращает ref компонента
    this.props.onRef(this.slidingUpPanel);
  }

  render() {
    const { draggableRange, content, children } = this.props;
    return (
      <Container>
        {content}
        <SlidingUpPanel
          ref={r => { this.slidingUpPanel = r; }}
          visible
          startCollapsed
          allowDragging={false}
          showBackdrop={false}
          draggableRange={draggableRange}
          onDrag={v => this._draggedValue.setValue(v)}>
          {children}
        </SlidingUpPanel>
      </Container>
    );
  }
}

export default BottomSheet;
