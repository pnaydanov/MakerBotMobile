/* @flow  */
import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

import styles from './styles';

type Props = {
  images: Array<Object>,
}

class CarouselContent extends Component<Props> {
  render() {
    const { images } = this.props;

    return (
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          enfFillColor>
          {images.map((image, index) => (
            <Image key={index} style={styles.image} source={{ uri: image.source }} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CarouselContent;