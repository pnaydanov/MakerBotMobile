import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const arr = [];
for (let i = 0; i < 500; i += 1) {
  arr.push(i);
}

class Stager extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate();
  }

  render() {
    const animations = arr.map((a, i) => (
      <Animated.View
        key={i}
        style={{
          opacity: this.animatedValue[a],
          height: 20,
          width: 20,
          backgroundColor: 'green',
          marginLeft: 3,
          marginTop: 3,
        }}
      />
    ));
    return (
      <View style={styles.container}>
        {animations}
      </View>
    );
  }

  animate() {
    const animations = arr.map(item => Animated.timing(
      this.animatedValue[item],
      {
        toValue: 1,
        duration: 4000,
      },
    ));
    Animated.stagger(10, animations).start();
  }
}

export default Stager;