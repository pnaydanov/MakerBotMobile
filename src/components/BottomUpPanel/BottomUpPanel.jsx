import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Text } from 'native-base';
import * as Easing from 'react-native/Libraries/Animated/src/Easing';

import styles from './style';
import getConfig from './config';
const { width } = Dimensions.get('window');

class BottomUpPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      spinValue: new Animated.Value(0),
    };
    this.config = getConfig(props.startHeight, props.topEnd);
    this._animatedHeight = new Animated.Value(props.isOpen ? this.config.height.end : this.config.height.start);
    this._animatedPosition = new Animated.Value(props.isOpen
      ? this.config.position.end
      : this.config.position.start);
  }

  static defaultProps = {
    isOpen: false,
  };


  componentWillMount() {
    this._animatedPosition.addListener(value => {
      // Every times that position changes then actualize the related properties. I.e: height, so the view
      // has the interpolated height
      [() => this._animatedHeight].map(item => {
        item().setValue(value.value);
      });
    });
    // Reset value once listener is registered to update depending animations
    this._animatedPosition.setValue(this._animatedPosition._value);
  }

  // Handle isOpen prop changes to either open or close the window
  componentWillReceiveProps(nextProps) {
    // isOpen prop changed to true from false
    if (!this.props.isOpen && nextProps.isOpen) {
      this.open();
    } else if (this.props.isOpen && !nextProps.isOpen) {
      // isOpen prop changed to false from true
      this.close();
    }
  }

  render() {
    const { content } = this.props;
    const { spinValue } = this.state;

    // Height according to position
    let animatedHeight = this._animatedHeight.interpolate({
      inputRange: [this.config.position.end, this.config.position.start],
      outputRange: [this.config.height.end, this.config.height.start],
    });

    // Icon rotation
    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg'],
    });
    return (
      <Animated.View style={[styles.buttonUpPanelView, { height: animatedHeight }]}>
        <Animated.View
          style={[styles.content, {
            // Add padding at the bottom to fit all content on the screen
            paddingBottom: this.props.topEnd,
            width,
            // Animate position on the screen
            transform: [{ translateY: this._animatedPosition }, { translateX: 0 }],
          }]}
                  >
          {/* Section for header or button to open the panel */}
          <TouchableWithoutFeedback onPress={() => { this.toggle(); }}>
            <Animated.View style={{ height: this.props.startHeight }}>
              <View style={[this.props.bottomUpSlideBtn, { width, height: this.props.startHeight }]}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  {this.props.icon()}
                </Animated.View>
                <Text style={this.props.headerTextStyle}>{this.props.headerText}</Text>
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>

          {/* Scrollable content */}
          <ScrollView
            ref={scrollView => { this._scrollView = scrollView; }}
            // Enable scrolling only when the window is open
            scrollEnabled={this.state.open}
            // Hide all scrolling indicators
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            // Trigger onScroll often
            scrollEventThrottle={16}
            onScroll={this._handleScroll}>
            {/* Render content components */}
            {content()}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    );
  }


  open = () => {
    this.setState({ open: true }, () => {
      Animated.timing(this._animatedPosition, {
        toValue: this.config.position.end,
        duration: 600,
      }).start();
      Animated.timing(
        this.state.spinValue,
        {
          toValue: 1,
          duration: 600,
          easing: Easing.linear,
          useNativeDriver: true,
        },
      ).start();
    });
  };

  close = () => {
    this._scrollView.scrollTo({ y: 0 });
    Animated.timing(this._animatedPosition, {
      toValue: this.config.position.start,
      duration: 600,
    }).start(() => this.setState({
      open: false,
    }));
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 0,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start();
  };

  toggle = () => {
    if (!this.state.open) {
      this.open();
    } else {
      this.close();
    }
  };
}

export default BottomUpPanel;