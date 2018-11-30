/* @flow  */
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import FadeInView from './FadeInView';
import RotateImg from './RotateImg';
import SpringImg from './SpringImg';
import Stager from './Stager';

type Props = {}
class Animation extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
          </FadeInView>
          <RotateImg style={{ width: 250, height: 50 }} />
          <SpringImg style={{ width: 250, height: 50 }} />
          <Stager style={{ width: 250, height: 50 }} />
        </ScrollView>
      </View>
    );
  }
}

export default Animation;