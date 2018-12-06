import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BottomUpPanel from 'components/BottomUpPanel';
const { height } = Dimensions.get('window');

const data = ['Some component', 'Some component', 'Some component', 'Some component',
  'Some component', 'Some component', 'Some component', 'Some component', 'Some component',
  'Some component', 'Some component', 'Some component', 'Some component', 'Some component',
  'Some component', 'Some component',
];

export default class DragScreen extends Component {
  render() {
    return (
      <BottomUpPanel
        content={this.renderBottomUpPanelContent}
        icon={this.renderBottomUpPanelIcon}
        topEnd={height - (height * 0.8)}
        startHeight={80}
        headerText="Tasks"
        headerTextStyle={{
          color: 'white',
          fontSize: 15,
        }}
        bottomUpSlideBtn={{ display: 'flex',
          alignSelf: 'flex-start',
          backgroundColor: 'black',
          alignItems: 'center',
          borderTopColor: 'grey',
          borderTopWidth: 5 }} />
    );
  }

  renderBottomUpPanelContent = () => (
    <View>
      <FlatList style={{ backgroundColor: 'black', opacity: 0.7, flex: 1 }}
        data={data}
        renderItem={({ item }) => <Text style={{ color: 'white', padding: 20 }}>{item}</Text>} />
    </View>
  )

  renderBottomUpPanelIcon = () => <Ionicons name="ios-arrow-up" style={{ color: 'white' }} size={30} />
}