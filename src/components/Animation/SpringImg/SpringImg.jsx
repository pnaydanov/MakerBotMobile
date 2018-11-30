import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SpringImg extends Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount() {
    this.spring();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{ marginBottom: 100 }}
          onPress={this.spring.bind(this)}>
          Spring
        </Text>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{ scale: this.springValue }] }}
          source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
        />
      </View>
    );
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
      },
    ).start();
  }
}

export default SpringImg;